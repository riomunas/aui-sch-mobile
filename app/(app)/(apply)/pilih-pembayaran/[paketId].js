import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";
import { axiosWithToken } from "../../../../config/axios-withtoken-config";
import ENV from "../../../../config/env";

export default function Page() {
  const {paketId} = useLocalSearchParams();
  const [snapToken, setSnapToken] = useState(null);

  const fetchData = axiosWithToken();
  console.log({paketId})

  useEffect(() => {
    fetchData.post(`/api/snap/checkout/${paketId}`).then(res => {
      console.log(res.data);
      setSnapToken(res.data.data.token);  
    })
  }, []);

  const onNavigationStateChange = (navState) => {
    if (navState.url != 'about:blank') {
      router.back();
    }
  }

  if (snapToken) {
    return (
      <View style={{ flex: 1}}>
        <WebView
          onNavigationStateChange={onNavigationStateChange}
          style={styles.webview}
          javaScriptEnabled={true}
          javaScriptCanOpenWindowsAutomatically={true}
          domStorageEnabled={true}
          cacheEnabled={true}
          allowFileAccessFromFileURLs={true}
          allowFileAccess={true}
          cacheMode="LOAD_NO_CACHE"
          source={{ html: `
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <script type="text/javascript" 
                src="${ENV.SNAP_URL}" 
                data-client-key="${ENV.CLIENT_KEY}"></script>
              </head>
              <body>
                <script type="text/javascript">
                  snap.pay('${snapToken}', {
                    onSuccess: function(result){
                      window.ReactNativeWebView.postMessage('{"event": "onSuccess"}');
                    },
                    onPending: function(result){
                      window.ReactNativeWebView.postMessage('{"event": "onPending"}');
                    },
                    onError: function(result){
                      window.ReactNativeWebView.postMessage('{"event": "onError"}');
                    },
                    onClose: function(){
                      window.ReactNativeWebView.postMessage('{"event": "onClose"}');
                    }
                  });
                </script>
              </body>
            </html>
          `}}
          onMessage={(event) => {
            try {
              const data = JSON.parse(message);
              if (data.event === 'onClose') {
                router.back();
              } 
              switch (data.event) {
                case 'getStatusAndClose':
                case 'onSuccess':
                case 'onClose':
                case 'onPending':
                case 'onError':
                  router.back();
                  break;
                default:
                  break;
              }
            } catch (e) {
              router.back();
            }
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

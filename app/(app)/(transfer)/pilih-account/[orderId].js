import { StyleSheet, Text, View } from "react-native";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import LoadingIndicator from "../../../../components/LoadingIndicator";


export default function Page() {
  const [ accountId, setAccountId ] = useState('9911cad7-e96a-427a-a917-6bb780578e20');
  const [ loading, setLoading ] = useState(false);
  const { orderId } = useLocalSearchParams();

  return (
      <View style={{ flexDirection: 'column', flex:1, gap:10, paddingHorizontal: 10, paddingVertical: 20}}>
        <Text>{orderId}</Text>
        <View style={{ }}>
          <Input placeholder="Id Tujuan" onChangeText={(text) => setAccountId(text)} value={accountId} />
        </View>
      <Button icon="account" mode="contained" onPress={() => {
            router.replace({
              pathname: '/(transfer)/submit-transfer/[orderId]/[accountId]',
              params: { orderId: orderId, accountId: accountId },
            });
        }}>
        Pilih
      </Button>
    </View>
  );
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

import { useState, useEffect } from "react";

const useSnap = () => {
    const [snap, setSnap] = useState(null);

    useEffect(() => {
        const myMidtransClientKey = 'SB-Mid-client-BapTBws7W5STjiH4';
        const script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
        script.setAttribute('data-client-key', myMidtransClientKey);
        script.onload = () => {
            setSnap(window.snap);
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const snapEmbed = (snap_token, embedId, action) => {
        if(snap){
            snap.embed(snap_token, {
                embedId,
                onSuccess: function (result) {
                    action.onSuccess(result);
                },
                onPending: function(result){
                    action.onPending(result);
                },
                onClose: function () {
                    action.onClose();
                }
            })
        }
    }

    return {snapEmbed}
}

export default useSnap;
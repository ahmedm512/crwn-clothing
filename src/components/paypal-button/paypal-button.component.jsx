import React, {useEffect} from 'react';
import { PayPalButton } from "react-paypal-button-v2";

const PayPalCheckoutButton = ({total}) => {
const PRODUCTION_CLIENT_ID = 'AfhRO-scBe017CFQ6IEt53QBzxoyESQoFOxUBfZrnUZjbo7rxoZNokJ5BWMBpUiz7ctgDPElqImcmrgT';

useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=scBe017CFQ6IEt53QBzxoyESQoFOxUBfZrnUZjbo7rxoZNokJ5BWMBpUiz7ctgDPElqImcmrgT"
    document.body.appendChild(script);
});


return (
        <div>
    
        <PayPalButton 
        
        amount='{total}'
        shippingPreferenc
        onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
        }}
        options={{
            clientId: {PRODUCTION_CLIENT_ID}
          }}
        
        />
        </div>
    );
};

export default PayPalCheckoutButton;
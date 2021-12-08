import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K40LASFkPaOUUfIZSF9hntAc9B8Fy9HNKyuPHh27pBVtCcNazbhni9GLxOIfhfde4CdDFMj8Xdib65GskFFKGRD00JKZeW98A';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Co.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
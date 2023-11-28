import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ProviderContext } from "../../../Provider/Provider";


const CheckoutForm = ({ price, boughtItem }) => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(ProviderContext)
    console.log(price)
    console.log('Bought Item',boughtItem);
    const totalPrice = price

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.error('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if(confirmError) {
            console.log('payment error', confirmError)
        }
        else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id:', paymentIntent.id)
                setTransactionId(paymentIntent.id)

                // now save the payment iin the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(), //utc date convert. use momentjs to the server
                    transactionId: paymentIntent.id,
                    boughtID: boughtItem?._id,
                    wishID: boughtItem?.wishID,
                    propertyID: boughtItem?.propertyID,
                    status: 'bought'
                }
                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved' ,res);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className="btn btn-primary"
            >
                Pay
            </button>
            <p className="text-red-400">
                {error}
            </p>
            {transactionId &&  <p className="text-green-400">Your transaction id is: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;
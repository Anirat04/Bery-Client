import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import usePropertyBought from "../../../hooks/usePropertyBought";
import { useParams } from "react-router-dom";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const params = useParams()
    const [propertyBought] = usePropertyBought()
    const getPayProduct = propertyBought.filter(property => property._id === params.id)
    const boughtItem = getPayProduct[0]
    const price = getPayProduct[0]?.offered_Price
    return (
        <div className="ml-[300px] w-full min-h-screen bg-base-200 mt-[90px]">
            <div className="bg-white p-[60px] max-w-[800px] mx-auto">
                <h1>Insert your payment Credential</h1>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={price} boughtItem={boughtItem}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
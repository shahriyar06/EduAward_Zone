import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import useAxiosPublic from './../../Hook/useAxiosPublic';

const Checkoutform = ({ scholarship }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState(null);
    const { user } = useContext(AuthContext);
    const ascholarship = scholarship[0]

    //TODO: Use Effect with intent 

    const [clientSecret, setClientSecret] = useState('');
    const [transactionsId, setTransactionId] = useState('')
    const axiosPublic = useAxiosPublic();
    const totalPrice = ascholarship?.applicationfees;
    console.log('Total',totalPrice)


   if (totalPrice > 0) {
        useEffect(() => {
            axiosPublic.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }, [axiosPublic, totalPrice])
    }




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) { return; }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setErrorMessage(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setErrorMessage('')
        }



        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymus',
                        name: user?.displayName || 'anonymus',
                    },
                },
            },
        );

        if (confirmError) console.log(confirmError);
        else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                // console.log(paymentIntent.id);
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    scholarshipId: ascholarship._id,
                    status: 'pending'
                }

                const res = await axiosPublic.post('/payments', payment)
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Payment Successful!!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(`/applies/${ascholarship._id}`)
                }
            }
        }



    };

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
            <button type="submit" className="btn btn-primary my-6 " disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600"> {errorMessage}</p>
            
        </form>
    );
};

export default Checkoutform;
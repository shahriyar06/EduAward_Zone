import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";
import {  useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);
const Payment = () => {
    const {id} = useParams();
    console.log(id)
    const axiosSecure = useAxiosSecure();
    const { data: scholarships = [] , isLoading} = useQuery({
        queryKey: ['scholarships'],
        queryFn: async () => {
            const res = await axiosSecure.get('/scholarships');
            return res.data;
        }
    });
    if(isLoading){
        <p>now</p>
    }
    console.log(scholarships)
    const scholarship = scholarships.filter(s => s._id === id)
    console.log(scholarship)
    
    
    return (
        <div>
       
        <Elements stripe={stripePromise} >
          <Checkoutform scholarship={scholarship}></Checkoutform>
        </Elements>
       
        </div>
    );
};

export default Payment;
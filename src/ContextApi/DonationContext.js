import {React,useState,createContext} from 'react'

//Create aDonation oreder in order to save all the the data from diffrent commpnets
export  const DonationContext = createContext();

export const DonationContextProvider = (props)=>
{
    const [state,setState] = useState({isStandingOrder:false,donationAmont:0,numberDonation:0});
    
    return(<DonationContext.Provider value={[state,setState]}>
        {props.children}
    </DonationContext.Provider>)

    
}
export default {DonationContextProvider,DonationContext}
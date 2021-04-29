import {React,useState,useEffect} from 'react';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import { grey,lightBlue} from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
//Styles settings
const StyledCheckbox = withStyles({
  root: {
    boxcolor: grey[400],
  
    '&$checked': {
      color: lightBlue[900],
      boxcolor: grey[400]
     
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


function PaymetCheckboxes(props) {
 //State settings and use effect
  const[isStandingOrder,setStandingOrder] = useState(false);
  const[numberOfMonths,setNumberOfMonths] = useState(1)
  const [numberOfPayments,setNumberOfPayments] = useState(1)

  useEffect(()=>
  {
    props.updateDuration(numberOfMonths)
  },[numberOfMonths]);

  useEffect(()=>
  {
    props.updateNumOfPayments(numberOfPayments)
  },[numberOfPayments]);
  //const Variables 
  const monthsNumbers=[1,2,3,4,5,6,7,8,9,10,11,12]
  const PaymentsNumbers =[1,2,3,4,5,6]
  const standingOrderPyamentTitle='אשמח להוראת קבע בסכום זה למשך'
  const singlePyamentTitle = 'באופן חד פעמי ב-'
    //functions
    const handleIsStandingOrderChange=(e)=>
    {
        if (e.target.name == 'standing_order')
        {
           setStandingOrder(true) ;
           props.updateDonationType('standing order')
        }
        else
        {
          setStandingOrder(false);
          props.updateDonationType('one time payment')
        } 
    }

    const handleNumberOfMonthsChange =(e)=>
    {
     setNumberOfMonths(e.target.value);
    
    }
    const   handleNumberOfPaymentsChange =  (e)=>{
       setNumberOfPayments(e.target.value);
      
      
    }
    
    return (
        <div  dir='rtl' >
          <Grid  container direction="row" justify="space-between" alignItems="center" spacing={8} >
          <Grid item >
            <StyledCheckbox name="one_time_payment" checked={!isStandingOrder} onChange={handleIsStandingOrderChange} color="primary"/> 
            {singlePyamentTitle}   &nbsp; 
             <Select value={numberOfPayments}  onChange={e=>{handleNumberOfPaymentsChange(e)}}>
               {PaymentsNumbers.map(item=><MenuItem value={item}>{item}</MenuItem>)} 
             </Select> 
             &nbsp; 
             תשלומים
             </Grid>
             <Grid item >
             <StyledCheckbox name="standing_order" checked={isStandingOrder} onChange={handleIsStandingOrderChange} /> 
             {standingOrderPyamentTitle}   &nbsp; 
             <Select value={numberOfMonths} defaultValue='1' onChange={e=>{handleNumberOfMonthsChange(e)}}>
               {monthsNumbers.map(item=><MenuItem value={item}>{item}</MenuItem>)} 
             </Select> 
             &nbsp; 
            חודשים
            </Grid>
        </Grid>
        </div>
        
    );
}

export default PaymetCheckboxes;
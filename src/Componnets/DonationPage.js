import {React,useState} from 'react';
import header from '../Images/header.png';

//import Compnents
import DonationTypeSetter from './DonationTypeSetter'
import DonationAmountSetter from './DonationAmountSetter.js'
import PageBeardCrumbs from './PageBeardCrumbs'
//Material-UI imports
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { orange,purple } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


//Style settings
const useStyles = makeStyles((theme) => ({
    divider: {
        background: theme.palette.warning.main,
        width:'50%'  
        
    },
  }));

  const MoveForwardButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
  }))(Button);
  

function DonationPage() {
      const classes = useStyles()
      //state settings with defult values
      const [DonationType,setDonationType] = useState("one time payment");
      const [donationAmount,setDonationAmount] = useState(50);
      const [donationDuration,setDonationDuration] = useState(1);
      const [numberOfPayments,setNumberOfPayments] = useState(1);

      // functons
      const changeDonationType = (type)=>
      {
        setDonationType(type);
      }

      
      const handleMoveForwardClick = ()=>
      {
        let suffixMsg = DonationType == 'standing order'?
        'for ' + donationDuration + ' months'
        : 'in '+ numberOfPayments + ' payments';
        let msg ='thank you for donating '+ donationAmount+' NIS ' + suffixMsg;
        console.log(msg);
        
      }


    return (
     <div style={{backgroundColor: 'rgba(0, 0, 0, 0.09)'}}>
        
        < Grid container justify='space-between' direction='column'  alignItems='center' spacing={6}>
        <Grid item >
          <img src={header} style={{'width':'100%','height':'10%'}}/>
        </Grid>
        <Divider classes={{root: classes.divider}}  variant='middle'/> 
        
          <Grid container item xs={3} spacing={1}  >
      
          <PageBeardCrumbs />
          </Grid>                 
            
          <Grid item>
            <DonationAmountSetter updateAmount ={(data)=>{setDonationAmount(data)}}/>
          </Grid>
           <Grid item xs={12}>
                <DonationTypeSetter updateDonationType={(data)=>{changeDonationType(data)}}
                updateDuration={(num)=>{setDonationDuration(num)} }
                updateNumOfPayments={(num)=>{setNumberOfPayments(num)}}/><br/>
            </Grid>
            <Grid item container alignItems="center" justify="center">
            <MoveForwardButton onClick={handleMoveForwardClick} variant="contained" color="primary" >
              <Typography variant="button" display="block" gutterBottom>
              <strong>{'<לשלב הבא'}</strong>
              </Typography>
              </MoveForwardButton>
              </Grid>
            
              <Divider variant="middle" classes={{root: classes.divider}}/>
        </Grid>
      
     </div>
    );
}

export default DonationPage;
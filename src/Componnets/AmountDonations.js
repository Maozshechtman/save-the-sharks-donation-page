import {React,useState} from 'react';
// Material-UI imports
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

//Styles settings
const useStyles = makeStyles(
    {
        root:{
            color:'navy'
        },
        
    }
)

function AmountDonations(props) {

    const[amount,setAmount] = useState(0)
    const constantDonationLabel='בחרו תרומה'
    const handleChangeAmount =(amount)=>
    {
        setAmount(amount)
        props.updateAmount(amount);
    }
    const amounts =[50,100,180,250];
    const shekelSymbol = '\u20AA';
    let buttons = amounts.map((number,index)=>{return (
     <Grid item>
        <Button variant='outlined' id={index} onClick={()=>{handleChangeAmount(number)}}>
            <Grid container direction="column"justify="center" alignItems="center">
                <Typography variant="caption" display="block" gutterBottom>{constantDonationLabel} </Typography>
                <Typography dir='rtl' variant="h4" display="block" gutterBottom> <strong>{number}</strong> {' '+shekelSymbol} </Typography>
            </Grid>  
            </Button> 
            </Grid>)});
    return (
        <div dir='rtl' style={{color:'navy'}} >
          
          <h3 >מהו הסכום אותו תרצו לתרום?</h3>
            <Grid   container direction='row' justify='space-evenly' alignItems="center" spacing={7}> 
                <Grid item>
                <FilledInput dir='ltr' id='castum-donation-input'  onChange={(e)=>{handleChangeAmount(Number(e.target.value))}} 
                startAdornment={<InputAdornment position="start">{'\u20AA'}</InputAdornment>}/>
                </Grid>
            
            {buttons}
            </Grid>
            
           

        </div>
    );
}

export default AmountDonations;
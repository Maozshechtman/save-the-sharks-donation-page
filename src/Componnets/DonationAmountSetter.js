import {React,useState} from 'react';
// Material-UI imports
import OutLinedInput from '@material-ui/core/OutLinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

//Styles settings
const useStyles = makeStyles((theme)=>({
   root:{
    flexGrow: 1,
   },
   text:{
       color: theme.palette.primary.dark
   },
   btn:{
    background: '#fff',
    color: theme.palette.primary.dark,
    fontSize: '20px'
   },
   myinput:{
      background: '#fff' ,
      height:'75px',
      color: theme.palette.primary.dark,
      
    
   },
   fontReSize:{
        fontSize:'50px'
   },
   adorment:{
       color: theme.palette.primary.dark
   }
   

}));
    

function DonationAmountSetter(props) {
    const classes = useStyles();
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
        <Button  className={classes.btn}  size='small' variant='outlined' id={index} onClick={()=>{handleChangeAmount(number)}}>
                <Box>
                <Typography className={classes.text}  variant="caption" display="inline" >
                    {constantDonationLabel} 
                </Typography><br/>
                
                    <strong>{number}</strong>  {shekelSymbol +' '}
              
                </Box>
            </Button> 
            </Grid>)});
    return (
        <div dir='rtl' style={{color:'navy'}} >
          
          <h4>מהו הסכום שתרצו לתרום?</h4>
            <Grid   container direction='row' justify='space-evenly' alignItems="center" spacing={6}> 
                <Grid item>
                <OutLinedInput  variant='outlined' InputProps={{border:'none',fontSize:'50 px'}} className={classes.myinput} dir='ltr' id='castum-donation-input'  onChange={(e)=>{handleChangeAmount(Number(e.target.value))}} 
                startAdornment={<InputAdornment className={classes.adorment} position="start">{'\u20AA'}</InputAdornment>}/>
                </Grid>
            
            {buttons}
            </Grid>
            
           

        </div>
    );
}

export default DonationAmountSetter;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';

//Styles settings
const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
        color: theme.palette.primary.dark
      },
      
    },
  }));

function PageBeardCrumbs(props) {
    
    const classes = useStyles();
    return (
        <div className={classes.root} dir='rtl'>
            <Breadcrumbs separator={<NavigateBeforeOutlinedIcon fontSize="small" />} aria-label="breadcrumb">
                    <p style={{color:'navy'}}><strong>בחירת התרומה</strong></p>
                    <p  style={{color:'navy'}} className={classes.pStyle} >פרטים אישיים</p>
                    <p style={{color:'navy'}} className={classes.pStyle} >פרטי תשלום</p>
            </Breadcrumbs>

        </div>
    );
}

export default PageBeardCrumbs;
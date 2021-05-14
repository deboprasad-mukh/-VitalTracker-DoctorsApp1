import React, { useState } from 'react';
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme) => ({
root:{
    marginTop: "3rem"
},
emailId: {
    marginTop: "1vh"
},
pswd: {
    marginTop: "2rem",
    marginBottom: "3vh"
}

}));


export default function DrForgotPwd() {

    const classes = useStyles();

    const history = useHistory();

    const [user, setUser] = useState({
        "email":'',
    })

    let name,value;
    const handleChange =(e)=> {
        name=e.target.name
        value=e.target.value
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleClick = () => {
        //alert('submit')
        //history.push('/page')
        // if(user.password=="admin"){
            // alert('Login successful')
            // history.push('/page')
          // localStorage.setItem("admidlogin", true)
        // }
        // else{
            // alert('Not matched user')
            // 
        // }
    }


    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    return (
        <div>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <ArrowBackIcon onClick={()=>history.push('/drLogin')}/>
                <Grid align='center' className={classes.root}>
                     <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h5>Forgot Your Password ?</h5>
                    <small>No worries! Enter your email and we will send you a link on your registered email.</small><br /><br/>
                </Grid><br/>
                <TextField label='Email' className={classes.emailId} placeholder='Enter Email id' value={user.email} name="email" onChange={handleChange} type="email" fullWidth required/>            
                <Button type='button' onClick={handleClick} color='primary' variant="contained" style={btnstyle} fullWidth>Send Request</Button>
            </Paper>
        </Grid>
        </div>
    )
}

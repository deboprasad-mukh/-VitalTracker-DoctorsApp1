import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Container, Paper, TextField, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "70vh",
        paddingTop: theme.spacing(5),
    },
    pateint: {
        marginLeft:"10%"
    },
    btn: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginLeft: "20%",
        width:'60%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: theme.typography.fontWeightRegular,
      },
      txt: {
          fontSize: 16,
          fontWeight: "bold"
      },
      logtxt: {
        fontSize:11,
        float: 'right',
        marginLeft:'100%',
        marginBottom:'6%'
      },
      logbtn: {
        color: 'red',
        float: 'right',
      },
}))

export default function View(props) {
    const classes = useStyles();
    const history = useHistory();
    const {currentdate,patientid} = props
    const [patient,setpatient] = useState({})
    const [daywisedetails,setdaywisedetails] =useState([])
    const [update,setupdate]= useState({
      medicine:"",
      suggestion:""
    })
    var param=new URLSearchParams();
    useEffect(()=>{
      axios.get(`http://localhost:4000/patient/${patientid}`).then(res=>{
        setpatient(res.data)
      })
    },[])

    useEffect(()=>{
      axios.get(`http://localhost:4000/dailypatientdetails/${patientid}`).then(res=>{
        setdaywisedetails(res.data)
      })
    },[])
    const logout=()=>{
      localStorage.clear()
      history.push("/")
    }
    let name, value
    const updatechange=(e)=>{
      name=e.target.name
      value=e.target.value
      setupdate({
        ...update,
        [name] : value
      })
    }
    const updateclick=()=>{
      param.append("patientid", patientid);
      param.append("comments", update.suggestion);
      param.append("medicines", update.medicine); 
      param.append("date", currentdate);
      
      axios.post("http://localhost:4000/adddailyPatient", param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
        }).then(res=>{
        
          axios.get(`http://localhost:4000/dailypatientdetails/${patientid}`).then(res=>{
          setdaywisedetails(res.data)
          })
        })
        setupdate({
          medicine:"",
          suggestion:""
        })
        param=new URLSearchParams();
    }
    console.log(currentdate)
    return (
        <Container className={classes.root}>
            <Paper component={Box} width="100%"  mx="auto" p={4}>
            <PowerSettingsNewIcon className={classes.logbtn} onClick={()=>logout()}/>
            <Typography className={classes.logtxt}>Logout</Typography>
            <ArrowBackIcon onClick={()=>history.goBack()}/>
            <Typography variant='h4' align="center">Pateint Details</Typography>
                <Box component="form" mt={2} className={classes.pateint}>
                    <Typography variant="h5" >Pateint Name : {patient.name}</Typography>
                </Box>
                <Paper component={Box} width="100%" mx="auto" p={4} mt={2}>
                     <Box component="form">
                         <Typography className={classes.txt} label="Heart Rate" margin="normal" fullWidth>Heart Rate : {patient.heartRate}</Typography>
                         <Typography className={classes.txt} label="SpO2 Level" margin="normal" fullWidth>SpO2 Level : {patient.oxygenLevel}</Typography>
                         <Typography className={classes.txt} label="Blood Pressure" margin="normal" fullWidth>Blood Pressure : {patient.bloodPressure}</Typography>
                         <Typography className={classes.txt} label="Temperature" margin="normal" fullWidth>Temperature : {patient.bodyTemp}°F</Typography>
                         <Typography className={classes.txt} label="RCT" margin="normal" fullWidth>RCT : {patient.rapidCoronaTest}</Typography>
                         <Typography className={classes.txt} label="Reason" margin="normal" fullWidth>Reason : {patient.reasonForappointment}</Typography>
                         <TextField label="Medicines" margin="normal" fullWidth multiline name="medicine" value={update.medicine} onChange={updatechange}/>
                         <TextField label="Suggestion" margin="normal" fullWidth multiline name="suggestion" value={update.suggestion} onChange={updatechange}/>
                     </Box>
                </Paper>
                <Box mt={2} className={classes.btn}>
                    <Button variant="contained"  color="primary" fullWidth onClick={()=>updateclick()}>Add</Button>
                </Box>
                <Box mt={3}>
                    {daywisedetails.map(item=>
                      
                      <Accordion>
                       <AccordionSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                       >
                         <Typography className={classes.heading}>{item?.date}</Typography>
                       </AccordionSummary>
                       <AccordionDetails>
                        <ul>
                         <li>
                         <Typography>
                           Medicines :- {item?.medicines}
                           </Typography>
                         </li>
                         

                         <li>
                         <Typography>
                         Suggestion :- {item?.comments}
                         </Typography>
                         </li>
                         </ul>
                       </AccordionDetails>
                      </Accordion>
                      
                    )}
                    
                </Box>
            </Paper>
        </Container>
    )
}

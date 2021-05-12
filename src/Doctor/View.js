import React from 'react';
import { Box, Button, Typography, Container, Paper, TextField, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

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
          fontSize: 16
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

export default function View() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Container className={classes.root}>
            <Paper component={Box} width="100%"  mx="auto" p={4}>
            <PowerSettingsNewIcon className={classes.logbtn}/>
            <Typography className={classes.logtxt}>Logout</Typography>
            <ArrowBackIcon onClick={()=>history.goBack()}/>
            <Typography variant='h6' align="center">Pateint Details</Typography>
                <Box component="form" mt={2} className={classes.pateint}>
                    <Typography className={classes.txt} >Pateint Name : </Typography>
                </Box>
                <Paper component={Box} width="100%" mx="auto" p={4} mt={2}>
                     <Box component="form">
                         <Typography className={classes.txt} label="Heart Rate" margin="normal" fullWidth>Heart Rate : </Typography>
                         <Typography className={classes.txt} label="SpO2 Level" margin="normal" fullWidth>SpO2 Level : </Typography>
                         <Typography className={classes.txt} label="Blood Pressure" margin="normal" fullWidth>Blood Pressure : </Typography>
                         <Typography className={classes.txt} label="Temperature" margin="normal" fullWidth>Temperature : </Typography>
                         <Typography className={classes.txt} label="RCT" margin="normal" fullWidth>RCT : </Typography>
                         <TextField label="Medicines" margin="normal" fullWidth multiline/>
                         <TextField label="Suggestion" margin="normal" fullWidth multiline/>
                     </Box>
                </Paper>
                <Box mt={2} className={classes.btn}>
                    <Button variant="contained"  color="primary" fullWidth>Add</Button>
                </Box>
                <Box mt={3}>
                    <Accordion>
                         <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                         >
                           <Typography className={classes.heading}>11/05/2021</Typography>
                         </AccordionSummary>
                         <AccordionDetails>
                           <Typography>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                             sit amet blandit leo lobortis eget.
                           </Typography>
                         </AccordionDetails>
                    </Accordion>
                </Box>
            </Paper>
        </Container>
    )
}

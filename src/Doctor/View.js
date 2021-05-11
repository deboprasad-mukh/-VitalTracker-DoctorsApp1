import React from 'react';
import { Box, Button, Typography, Container, Paper, TextField, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';

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
}))

export default function View() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Container className={classes.root}>
            <Paper component={Box} width="90%"  mx="auto" p={4}>
            
            <ArrowBackIcon onClick={()=>history.push('/front')}/>
            <Typography variant='h5' align="center">Pateint Details</Typography>
                <Box component="form" mt={2} className={classes.pateint}>
                    <TextField label="Pateint Name" />
                </Box>
                <Paper component={Box} width="80%" mx="auto" p={4} mt={2}>
                     <Box component="form">
                         <TextField label="Heart Rate" margin="normal" fullWidth/>
                         <TextField label="SpO2 Level" margin="normal" fullWidth/>
                         <TextField label="Blood Pressure" margin="normal" fullWidth/>
                         <TextField label="Temperature" margin="normal" fullWidth/>
                         <TextField label="RCT" margin="normal" fullWidth/>
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

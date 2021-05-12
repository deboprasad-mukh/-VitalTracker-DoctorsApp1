import React, { useEffect, useState } from 'react';
import { Container, Paper, Box, Typography, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, TablePagination, InputBase, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
//import DateFnsUtils from '@date-io/date-fns'
//import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
//import useAutocomplete from '@material-ui/lab/useAutocomplete'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:'40vw',
    height: "100vh",
    paddingTop: theme.spacing(5),
    justifyContent: "center",
    alignItems: "center"
  },
  ppr: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  srch: {
    width:'100%',
    height:'1',
    marginBottom: "5%"
  },
  typ: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: "3%",
    marginTop: "10%"
  }
}))

export default function DoctorHome() {
  const classes = useStyles();
  const [users, setUsers]=useState([])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [date, changeDate] = useState(new Date());
  const [filterFn, setFilterFn] = useState({fn: users => {return users; }})

  const loadUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  useEffect(()=>{
    loadUsers()
  }, []);

  const onChangePage = (e, nextPage) => {
    setPage(nextPage)
  };

  const onChangeRowsPerPage =(e) => {
    setRowsPerPage(e.target.value)
  }

  const handleSearch = (e) => {
    let target = e.target;
      setFilterFn({
        fn:users => {
          if(target.value == "")
          return users;
          else
          return users.filter(item => item.name.includes(target.value))
        }
      })

  }
  return (
    <Container className={classes.root}>
    <Paper component={Box} width="90%"  mx="auto" p={5}>
    <Box className={classes.typ}>
    <Typography variant="h5">Dr.</Typography>
    <TextField type="date"/>
    </Box>
    <TextField
    className={classes.srch}
     label="Search"
     size="small"
    variant="outlined" 
    margin="normal" 
    InputProps={
      {endAdornment:(<InputAdornment position="end"><SearchIcon/></InputAdornment>)}
      }
      onChange={{handleSearch}}
      />

      <TableContainer component={Paper} width='40%' className={classes.ppr}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.ppr}>Pateint Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {
            users.slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage).map(user => (
              <TableRow>
                 <TableCell onClick={()=>alert('i am clicked')} className={classes.ppr}>{user.name}</TableCell>
               </TableRow>
               
            ))
            
          }
          </TableBody>
        </Table>
      </TableContainer>
      <Paper>
        <TablePagination className={classes.ppr}
          rowsPerPageOptions={[1,3,5,10,15,25,50]}
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage} />
      </Paper>
      </Paper>
    </Container>
  )
}

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './DoctorHome.css';
//import DatePicker from 'react-date-picker';
import { useEffect, useState } from 'react';
import { Button,Box } from '@material-ui/core';
import { LocalDiningOutlined } from '@material-ui/icons';
//import SearchField from "react-search-field";



export default function DoctorHome(props) {
    // const [value, onChange] = useState(new Date());
    const history = useHistory()
    
    

    const logout=()=>{
      localStorage.clear()
      history.push("/")
    }
              
    return (
        <div className="container">
            
            
            
            {/* <SearchField/> */}
            <h3 className="Header">Dr {props.profilename}</h3>
            <br/>
            <button onClick={()=>logout()}>logout</button>
            
            {/* <DatePicker className="Datestyle" onChange={onChange} value={value}  format={"dd-MM-yyyy"} /> */}
            
            <button variant="contained" className="button" title="select">select</button>
<container>           
<table>
  <tr>
    <th>Assigned Patient</th>
    
    <th>Action</th>
  </tr>
  <tr>
  <td>john</td>
    
    <td>View</td>
  </tr>
  <tr>
  <td>john</td>
    
    <td>View</td>
  </tr>
  <tr>
  <td>john</td>
   
    <td>View</td>
  </tr>
  <tr>
  <td>john</td>
    
    <td>View</td>
  </tr>
  <tr>
  <td>john</td>
    
    <td>View</td>
  </tr>
  <tr>
    <td>john</td>
    
    <td>View</td>
  </tr>
</table>
</container> 
<Box textAlign='center'>


<Button className="viewButton" variant="contained" color="primary" onClick={()=> history.push('/view')} >
      View All
    </Button>

    </Box>

        </div>
)
    }
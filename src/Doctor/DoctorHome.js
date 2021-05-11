import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './DoctorHome.css';
//import DatePicker from 'react-date-picker';
import { useEffect, useState } from 'react';
import { Button,Box } from '@material-ui/core';
//import SearchField from "react-search-field";



export default function DoctorHome() {
    // const [value, onChange] = useState(new Date());
    const history = useHistory()
    
    // console.log(value)
            // console.log(typeof(value))

              
    return (
        <div>
            
            
            <centre><h1 className="Header">Doctors Portal</h1></centre>
            {/* <SearchField/> */}

            
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
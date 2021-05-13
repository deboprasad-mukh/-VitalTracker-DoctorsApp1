import React,{useState,useEffect} from 'react';
import './AddDoc.css';
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';



const Editdoctor = () => {
    const history =  useHistory();
    const [doc,setdoc]= useState([])
    const[doctor,setDoctor] = useState({
        "name":"",
        "registrationId":"",
        "email":"",
        "specialist":"",
    })
    const [doctorid,setDoctorid]=useState({
        doctorID: ''
        })
        
        useEffect(()=>{
            axios.get("http://localhost:4000/doctorlist").then(res=>{
            setdoc(res.data)
            })
            },[])
            

    let name,value
    const handleDocInput = (e)=>{
        name = e.target.name
        value = e.target.value
        setDoctor({
            ...doctor,
            [name]:value
        })
        console.log(doctor)
    }
    const handleDocID=(e)=>{
        name = e.target.name
        value = e.target.value
        setDoctorid({
        [name] : value
        })
        }
        console.log(doctorid.doctorID)
        

    const param=new URLSearchParams();
  const handleSubmit=()=>{
   param.append("name", doctor.name); 
   param.append("registrationId", doctor.registrationId);
   param.append("email", doctor.email);
   param.append("specialist", doctor.specialist);
    axios.put(`http://localhost:4000/editdoctor/${doctorid.doctorID}`, param,{
        headers:{
            'content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(res=>{
        window.alert("Successfully Added")
        console.log("ok")
        
    })
}
    return(
        
        <section className="heading">
        <ArrowBackIcon onClick={()=>history.push('/page')}/>
        <PowerSettingsNewIcon className="logbtn" onClick={()=>history.push('/')}/>
        <label className="logtxt">Logout</label>
            <h1 className="title">Edit Doctor</h1>

            <div className="container">
                <div className="add-doc-form row">
                <div className="form-field col-lg-6">

                <select className="choose-doc" name="doctorID" value={doctorid.doctorID} onChange={handleDocID}>
                    <option class="input-choice">Select doctor</option>
                    {doc.map(item=><option class="input-choice" value={item?._id}>{item?.name}</option>)}
                </select>
            </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="name" className="input-text" name="name" value={doctor.name} onChange={handleDocInput}/>
                        <label htmlFor="name" className="label">Name :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="reg" className="input-text" name="registrationId" value={doctor.regid} onChange={handleDocInput}/>
                        <label htmlFor="reg" className="label">Registration Id :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="email" id="email" className="input-text" name="email" value={doctor.email} onChange={handleDocInput}/>
                        <label htmlFor="email" className="label">Email :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="special" className="input-text" name="specialist" value={doctor.specialization} onChange={handleDocInput}/>
                        <label htmlFor="special" className="label">Specialization :</label>
                    </div>

                    <div className="form-field col-lg-12">
                        <input type="button" className="submit-btn" value ="Add" onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </section>
    

    )
}
export default Editdoctor;

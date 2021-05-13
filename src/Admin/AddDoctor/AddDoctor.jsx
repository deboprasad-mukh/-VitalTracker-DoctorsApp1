import React,{useState,useEffect} from 'react';
import './AddDoc.css';
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const AddDoctor = () => {
const[doctor,setDoctor] = useState({
"name":"",
"registrationId":"",
"email":"",
"specialist":"",
})
const [dbdoctor, setDbdoctor] = useState([])
useEffect(()=>{
    axios.get("http://localhost:4000/doctorlist").then(res=>{
        setDbdoctor(res.data)
        console.log(res.data)
    })
    
},[])
console.log(dbdoctor)
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
console.log(doctor.email)
console.log(dbdoctor.email)
const param=new URLSearchParams();
const handleSubmit=()=>{
    if((!doctor.name) || (!doctor.registrationId) || (!doctor.email) || (!doctor.specialist)){
        alert("Please fill all the fields")
        return
    }
     if(!doctor.email.includes('@')){
        alert("email must include @")
        return
    }

    axios.get(`http://localhost:4000/doctor/${doctor.email}`).then(res=>{
        if(res.data){
            window.alert("already reg")
        }
        
    else{
        param.append("name", doctor.name);
        param.append("registrationId", doctor.registrationId);
        param.append("email", doctor.email);
        param.append("specialist", doctor.specialist);
        axios.post("http://localhost:4000/newDoctor", param,{
        headers:{
        'content-Type': 'application/x-www-form-urlencoded'
        }
        }).then(res=>{
        window.alert("Successfully Added")
        console.log("ok")

        })
    }
    })
}

return(

        <section className="heading">
        <ArrowBackIcon onClick={()=>history.push('/')}/>
        <h1 className="title">Add Doctor</h1>

        <div className="container">
        <div className="add-doc-form row">
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
        <input type="submit" class="submit-btn" value ="Add" onClick={handleSubmit}/>
        </div>
        </div>
        </div>
        </section>


)
} 



export default AddDoctor;
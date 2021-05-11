import React,{useState} from 'react';
import './AddDoc.css';
import axios from 'axios';

const AddDoctor = () => {
    const[doctor,setDoctor] = useState({
        "name":"",
        "registrationId":"",
        "email":"",
        "specialist":"",
    })

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

    const param=new URLSearchParams();
  const handleSubmit=()=>{
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
        setDoctor({
            "name":"",
            "registrationId":"",
            "email":"",
            "specialist":""
        })
    })
    
}
    return(
        
        <section className="heading">
            <h1 className="title">Add Doctor</h1>

            <div className="container">
                <div className="add-doc-form row">
                    <div className="form-field col-lg-12">
                        <input type="text" id="name" className="input-text" name="name" value={doctor.name} onChange={handleDocInput}/>
                        <label htmlFor="name" className="label">Name :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="reg" className="input-text" name="registrationId" value={doctor.registrationId} onChange={handleDocInput}/>
                        <label htmlFor="reg" className="label">Registration Id :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="email" id="email" className="input-text" name="email" value={doctor.email} onChange={handleDocInput}/>
                        <label htmlFor="email" className="label">Email :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="special" className="input-text" name="specialist" value={doctor.specialist} onChange={handleDocInput}/>
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
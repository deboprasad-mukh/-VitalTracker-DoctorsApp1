import React,{useState} from 'react';
import './AddDoc.css'
const AddDoctor = () => {
    const[doctor,setDoctor] = useState({
        "name":"",
        "regid":"",
        "email":"",
        "specialization":"",
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
                        <input type="text" id="reg" className="input-text" name="regid" value={doctor.regid} onChange={handleDocInput}/>
                        <label htmlFor="reg" className="label">Registration Id :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="email" id="email" className="input-text" name="email" value={doctor.email} onChange={handleDocInput}/>
                        <label htmlFor="email" className="label">Email :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="special" className="input-text" name="specialization" value={doctor.specialization} onChange={handleDocInput}/>
                        <label htmlFor="special" className="label">Specialization :</label>
                    </div>

                    <div className="form-field col-lg-12">
                        <input type="submit" class="submit-btn" value ="Add"/>
                    </div>
                </div>
            </div>
        </section>
    

    )
}

export default AddDoctor;
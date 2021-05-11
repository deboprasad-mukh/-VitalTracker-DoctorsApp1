import React,{useState} from 'react';
import './AddPatient.css'
const AddPatient = () => {
    
    const [patient, setPatient] = useState({
        "name":"",
        "age":"",
        "date":{},
        "docid":"",
        "problems":"",
        "comments":"",
        "medicines":"",
        "heartrate":"",
        "oxygen":"",
        "pressure":"",
        "temperature":"",
        "coronatest":""
    })
    
    let name,value
    const handlePatientInput = (e) =>{
        name = e.target.name
        value = e.target.value
        setPatient({
            ...patient,
            [name]:value
        })
        console.log(patient)
    }
    const handleSubmit=()=>{
        alert("Patient added")
    
    }
    return(
        <section className="heading">
            <h1 className="title">Add Patient</h1>

            <div className="container">
                <div className="add-doc-form row">
                    <div className="form-field col-lg-12">
                        <input type="text" id="name" className="input-text" name="name" value={patient.name} onChange={handlePatientInput}/>
                        <label htmlFor="name" className="label" >Name :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="reg" className="input-text" name="age" value={patient.age} onChange={handlePatientInput}/>
                        <label htmlFor="reg" className="label" >Age :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="date" id="reg" className="input-text" name="date" value={patient.date} onChange={handlePatientInput}/>
                        <label htmlFor="reg" className="label" >Date :</label>
                    </div>
                    <div className="form-field col-lg-12">
                    <select className="choose-doc">
                            <option class="input-choice">Select doctor</option>
                            <option class="input-choice">Select doctor</option>
                            <option class="input-choice">Select doctor</option>
                        </select>
                        <label htmlFor="patientid" className="label-doctor">Doctor Appointed :</label>
                    </div>
                    <div className="form-field col-lg-12">
                    <textarea className="input-comments" comments rows="10" name="problems" value={patient.problems} onChange={handlePatientInput}></textarea>
                        <label htmlFor="problems" className="label-comments" >Problems :</label>
                    </div>
                  
                    <div className="form-field col-lg-12">
                        <input type="text" id="reg" className="input-text" name="heartrate" value={patient.heartrate} onChange={handlePatientInput}/>
                        <label htmlFor="reg" className="label">Heart Rate :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="reg" className="input-text" name="oxygen" value={patient.oxygen} onChange={handlePatientInput}/>
                        <label htmlFor="reg" className="label">Oxygen Level :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="reg" className="input-text" name="pressure" value={patient.pressure} onChange={handlePatientInput}/>
                        <label htmlFor="reg" className="label">Blood Pressure :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="special" className="input-text" name="temperature" value={patient.temperature} onChange={handlePatientInput}/>
                        <label htmlFor="patientid" className="label">Body Temperature :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="special" className="input-text" name="coronatest" value={patient.coronatest} onChange={handlePatientInput}/>
                        <label htmlFor="patientid" className="label">Rapid Corona Test :</label>
                    </div>
                    
                    {/* <div className="form-field col-lg-12">
                    <div className="form-field col-lg-12">
                        <input type="text" id="special" className="input-text"/>
                        <label htmlFor="patientid" className="label">Patient Id :</label>
                    </div>
                    {/* <div className="form-field col-lg-12">
                        <select className="choose-doc">
                            <option class="input-choice">Select doctor</option>
                            <option class="input-choice">Select doctor</option>
                            <option class="input-choice">Select doctor</option>
                        </select>
                        <label htmlFor="patientid" className="label">Doctor Appointed :</label>
                    </div> */}

                    <div className="form-field col-lg-12">
                        <input type="submit" class="submit-btn" value ="Add" onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </section>
    

    )
}

export default AddPatient;
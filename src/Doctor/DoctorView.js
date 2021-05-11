import React from 'react';
import { useHistory } from 'react-router';


const DoctorView = () => {
    const history= useHistory();
    return(
        
        <section className="heading">
            <h1 className="title">Add Patient</h1>

            <div className="container">
                <div className="add-doc-form row">
                    <div className="form-field col-lg-12">
                        <input type="text" id="name" className="input-text"/>
                        <label htmlFor="name" className="label">Name :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="reg" className="input-text"/>
                        <label htmlFor="reg" className="label">Age :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="reg" className="input-comments"/>
                        <label htmlFor="problems" className="label-comments">Problems :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <textarea className="input-comments" comments rows="10"></textarea>
                        <label htmlFor="comments" className="label-comments">Doctor Suggestion :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="special" className="input-comments"/>
                        <label htmlFor="medicines" className="label-comments">Medicines :</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input type="text" id="special" className="input-text"/>
                        <label htmlFor="patientid" className="label">Patient Id :</label>
                    </div>

                    <div className="form-field col-lg-12">
                        <input type="button" class="submit-btn" value ="Add" onClick={()=> history.push('/view')}/>
                    </div>
                </div>
            </div>
        </section>
    

    )
}

export default DoctorView;
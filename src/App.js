import React from 'react';
import Front from './Front';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login/Login';
import Page from './Admin/Page';
import View from './Doctor/View';
import DoctorHome from './Doctor/DoctorHome';
import AddDoctor from './Admin/AddDoctor/AddDoctor';
import Editdoctor from './Admin/AddDoctor/Editdoctor';
import AddPatient from './Admin/AddPatient/AddPatient';
import Editpatient from './Admin/AddPatient/Editpatient';

export default function App() {
    
    return (
        <div>
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={()=><Front/>}/>
                <Route exact path="/login" component={()=><Login/>}/>
                <Route exact path="/page" component={()=><Page/>}/>
                <Route exact path="/view" component={()=><View/>}/> 
                <Route exact path="/drview" component={()=><DoctorHome/>}/>
                <Route exact path="/adddoctor" component={()=><AddDoctor/>}/> 
                <Route exact path="/editdoctor" component={()=><Editdoctor/>}/>
                <Route exact path="/addpatient" component={()=><AddPatient/>}/>
                <Route exact path="/editpatient" component={()=><Editpatient/>}/>
                </Switch>
            </BrowserRouter> 
        </div>
    )
}


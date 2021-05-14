const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors");
const bodyparser=require("body-parser");
const nodemailer = require('nodemailer');


app.use(bodyparser.urlencoded({
    extended : true
}))
app.use(bodyparser.json())
app.use(cors());

const db = "mongodb+srv://admin:admin@cluster0.oavys.mongodb.net/vitaltracker?retryWrites=true&w=majority"

mongoose.connect(db,
    { useNewUrlParser: true ,
     useUnifiedTopology: true }).then(()=>{
    console.log("CONNECTED")
}).catch((err)=> console.log("NOT CONNECTED"))

const doctorSchema = new mongoose.Schema({
    "name":"",
    "registrationId":"",
    "email":"",
    "specialist":"",
    
})

const Doctor = mongoose.model("Doctors",doctorSchema)

app.post('/newDoctor',(req,res)=>{
    const doctor=new Doctor({
        name: req.body.name,
        registrationId: req.body.registrationId,
        email:req.body.email,
        specialist:req.body.specialist,
    })
    doctor.save().then(data=>{
        var smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secureConnection: false,
            port: 587,
            auth: {
                user: "indusnet.projectgroup1@gmail.com",// your actual email
                pass: "projectgroup1"        // your actual password
            }
        });
        var mailOptions = {
            from: "",
            to: req.body.email,
            bcc: "", // bcc is optional.
            subject:`Message from admin`,
            html: `
            <h2>Congrats You are registered doctor</h2>
            <p> Signin with your given google account </p>
            <p> This is  an automatically generated email - please do not reply to it. If you have any queries please contact our helpdesk</p>
            <p> Please use this Link to login http://localhost:3000/ </p>`
        }
        //console.log(mailOptions);
        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                res.end("error");
            } else {
                //console.log("Message sent: " + response.message);
                res.end("sent");
            }
        });
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

app.get('/doctorlist',(req,res)=>{
    Doctor.find().then(doctor=>{
        res.send(doctor)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});
app.get("/eachDoctor/:id", (req,res)=>{
    Doctor.findById(req.params.id).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})
app.get('/doctor/:email',(req,res)=>{
    Doctor.findOne({"email": req.params.email}).then(doctor=>{
        res.send(doctor)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});
app.put('/editdoctor/:id',(req,res)=>{
    Doctor.findByIdAndUpdate(req.params.id, {
        name :req.body.name,
        registrationId :req.body.registrationId,
        email :req.body.email,
        specialist :req.body.specialist,
         
    },{new : true}).then(doctor=>{
        res.send(doctor)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});


const PatientSchema = new mongoose.Schema({
    "name":"",
    "age":"",
    "date":"",
    "doctorid":"",
    "reasonForappointment":"",
    "heartRate":"",
    "oxygenLevel":"",
    "bloodPressure":"",
    "bodyTemp":"",
    "rapidCoronaTest":"" 
})
const Patient=mongoose.model("Patients" , PatientSchema)
app.post("/newpatientadd" ,(req,res)=>{
    const newpatient=new Patient({
         name :req.body.name,
         age :req.body.age,
         date :req.body.date,
         doctorid :req.body.doctorid,
         reasonForappointment :req.body.reasonForappointment,
         heartRate :req.body.heartRate,
         oxygenLevel :req.body.oxygenLevel,
         bloodPressure :req.body.bloodPressure,
         bodyTemp :req.body.bodyTemp,
         rapidCoronaTest :req.body.rapidCoronaTest 
    })
    newpatient.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
})
app.get('/patientlist',(req,res)=>{
    Patient.find().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});
app.get("/selectedpatient/:doctorid", (req,res)=>{
    Patient.find({doctorid : req.params.doctorid}).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})
app.get("/patient/:id", (req,res)=>{
    Patient.findById(req.params.id).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})
app.put('/editpatient/:id',(req,res)=>{
    Patient.findByIdAndUpdate(req.params.id, {
        name :req.body.name,
         age :req.body.age,
         date :req.body.date,
         doctorid :req.body.doctorid,
         reasonForappointment :req.body.reasonForappointment,
         heartRate :req.body.heartRate,
         oxygenLevel :req.body.oxygenLevel,
         bloodPressure :req.body.bloodPressure,
         bodyTemp :req.body.bodyTemp,
         rapidCoronaTest :req.body.rapidCoronaTest
    },{new : true}).then(patient=>{
        res.send(patient)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

app.put('/editpatientbydoctor/:id',(req,res)=>{
    Patient.findByIdAndUpdate(req.params.id, {
        name :req.body.name,
         age :req.body.age,
         reasonForappointment :req.body.reasonForappointment,
         heartRate :req.body.heartRate,
         oxygenLevel :req.body.oxygenLevel,
         bloodPressure :req.body.bloodPressure,
         bodyTemp :req.body.bodyTemp,
         rapidCoronaTest :req.body.rapidCoronaTest
    },{new : true}).then(patient=>{
        res.send(patient)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});






const dailyUpdatedPatientSchema = new mongoose.Schema({
    "patientid":"",
    "comments":"",
    "medicines":"",
    "date":"",
    "heartRate":"",
    "oxygenLevel":"",
    "bloodPressure":"",
    "bodyTemp":"",
    "rapidCoronaTest":""
    
})


const DailyPatient = mongoose.model("Daily Patients",dailyUpdatedPatientSchema)
app.post('/adddailyPatient',(req,res)=>{
    const dailypatient=new DailyPatient({
        
        patientid:req.body.patientid,
        comments:req.body.comments,
        medicines:req.body.medicines,
        date: req.body.date,
        heartRate :req.body.heartRate,
        oxygenLevel :req.body.oxygenLevel,
        bloodPressure :req.body.bloodPressure,
        bodyTemp :req.body.bodyTemp,
        rapidCoronaTest :req.body.rapidCoronaTest 

    })
    dailypatient.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});
app.get("/eachdaypatient/:id", (req,res)=>{
    DailyPatient.findById(req.params.id).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})
app.get('/dailypatientdetails/:patientid',(req,res)=>{
    DailyPatient.find({patientid : req.params.patientid}).then(dailypatient=>{
        res.send(dailypatient)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});





app.listen(4000, ()=>{
    console.log("LISTENING TO PORT 4000")
})
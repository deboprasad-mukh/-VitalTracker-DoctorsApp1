import  React, { useEffect, useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import axios from "axios";

const PrintPdf = (props) => {
  const pdfExportComponent = React.useRef(null);
  const {patientid}=props
  const [patient,setpatient]=useState({})
  const [patientd,setpatientd]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:4000/patient/${patientid}`).then(res=>{
        setpatient(res.data)
      })
  },[])
  useEffect(()=>{
    axios.get(`http://localhost:4000/dailypatientdetails/${patientid}`).then(res=>{
      setpatientd(res.data)
    })
  },[])
  return (
    <div className="container">
      <div className="example-config">
        <button
          className="k-button"
          style={{float: "right",marginTop:"2%" , transform: "scale(2)"}}
          onClick={() => {
            if (pdfExportComponent.current) {
              pdfExportComponent.current.save();
            }
          }}
        >
          <PictureAsPdfIcon/>
        </button>
      </div>

      <PDFExport paperSize="A4" margin="2cm" ref={pdfExportComponent}>
        <div style={{marginTop: "6%"}}>
          <center><h3>Pateint Details</h3></center> <br/><br/>
          <h4>Pateint Name : {patient.name} </h4><br/>
          <h5>Pateint Age : {patient.age} </h5><br/><br/>
          <h6>Heart Rate :   {patient.heartRate}</h6><br/>
          <h6>SpO2 Level :  {patient.oxygenLevel}</h6><br/>
          <h6>Blood Pressure :  {patient.bloodPressure}</h6><br/>
          <h6>Temperature :  {patient.bodyTemp}°F</h6><br/>
          <h6>RCT :  {patient.rapidCoronaTest}</h6><br/>
          <h6>Reason :  {patient.reasonForappointment}</h6><br/>
          <hr/>
          {patientd.map(item=>
            <div>
              <h5>Date: {item?.date}</h5><br/>
            <p>Medicines : {item?.medicines}</p>
            <p>Suggestions : {item?.comments}</p>
            </div>
            )}

        </div>

      </PDFExport>
    </div>
  );
};

export default PrintPdf;
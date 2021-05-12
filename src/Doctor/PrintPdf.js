import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport } from "@progress/kendo-react-pdf";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

const App = () => {
  const pdfExportComponent = React.useRef(null);
  return (
    <div>
      <div className="example-config">
        <button
          className="k-button"
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
        <div>
          <center><h3>Pateint Details</h3></center> <br/><br/>
          <h4>Pateint Name :  </h4><br/><br/>
          <h6>Heart Rate :   </h6><br/>
          <h6>SpO2 Level :  </h6><br/>
          <h6>Blood Pressure :  </h6><br/>
          <h6>Temperature :  </h6><br/>
          <h6>RCT :  </h6><br/>
          <hr/>
          <h5>Date: </h5><br/><br/>
          <h6>Medicines : </h6><br/>
          <h6>Suggestions : </h6>

        </div>

      </PDFExport>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("my-app"));
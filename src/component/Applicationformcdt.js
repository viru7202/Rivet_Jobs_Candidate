import Navbar from "./Navbar";
import React, { useState, useRef } from 'react';
import SignaturePad from 'react-signature-canvas';

function Applicationformcdt() {

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
  });

  const signaturePadRef = useRef(null);
  const [signature, setSignature] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    signaturePadRef.current.clear();
    setSignature(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignature(signaturePadRef.current.toDataURL());
    console.log('Form Submitted:', formData, signature);
  };

  return (
    <>
      <Navbar />
      <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div class="heding-profile" style={{ textAlign: 'center', margin: '25px 0px' }}><h3 style={{ textDecoration: 'underline solid #333333' }}>Application Form</h3></div>
        <div class="compliance-title"><h2 class="upload-title">Full Name :</h2></div>

        <div className='row'>
          <div className='col-md-4'>
            <div class="email-text"><h4>First Name</h4>
              <div class="email-input">
                <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="email-text"><h4>Middle Name</h4>
              <div class="email-input">
                <input name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="email-text"><h4>Last Name</h4>
              <div class="email-input">
                <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
          </div>
        </div>



        <div className="form-group" style={{ marginTop: '30px' }}>
          <div class="compliance-title"><h2 class="upload-title">Signature</h2></div>
          {/* {/ <label>Signature</label> /} */}
          <SignaturePad
            ref={signaturePadRef}
            canvasProps={{ className: 'signature-pad' }}
          />
        </div>

        <div className="edidprofile-buttons">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="editprofile-button">
              <button type="submit">Confirm</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="editprofile-button">
              <button type="button" onClick={handleClear}>
            Clear
          </button>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

     
      </form>
      </div>
    </>
  )
}
export default Applicationformcdt;



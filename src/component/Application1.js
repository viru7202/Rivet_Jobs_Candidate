import React, { useState } from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const ApplicationForm1 = () => {
    const [formData, setFormData] = useState({
        title: '',
        forename: '',
        surname: '',
        othernames: '',
        currentAddress: '',
        currentPostcode: '',
        postalAddress: '',
        postalPostcode: '',
        homePhone: '',
        mobile: '',
        email: '',
        availability: '',
        milesWillingToTravel: '',
        agencyDetails: '',
        referralSource: '',
        referral: {
            website: false,
            medicalStaffing: false,
            event: false,
            friend: false,
            advertise: false,
            other: false,
        },
        working: 'no', // 'yes' or 'no'
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                referral: { ...formData.referral, [name]: checked },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission
    };

    return (
        <>
        <Navbar />
        <section>
            <div className="container">
                <div className="form-wrap">
                    <h2 className="form-heading">Application Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-contain">
                            <h3 className="form-subheading">Section 1: Personal Information</h3>
                            <div className="form-fieldwrap">
                                <div className="form-containtbox">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="title">Title</label>
                                            <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                placeholder="Mr/Mrs/Miss"
                                                value={formData.title}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="forename">Forename</label>
                                            <input
                                                type="text"
                                                id="forename"
                                                name="forename"
                                                placeholder="Ipsum"
                                                value={formData.forename}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="surname">Surname</label>
                                            <input
                                                type="text"
                                                id="surname"
                                                name="surname"
                                                placeholder="Mxibiusx"
                                                value={formData.surname}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="othernames">Other names known by</label>
                                            <input
                                                type="text"
                                                id="othernames"
                                                name="othernames"
                                                placeholder="Mxibiusx"
                                                value={formData.othernames}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group is-add">
                                            <label htmlFor="currentAddress">Current Address</label>
                                            <input
                                                type="text"
                                                id="currentAddress"
                                                name="currentAddress"
                                                placeholder="Your Address"
                                                value={formData.currentAddress}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group is-post">
                                            <label htmlFor="currentPostcode">Post Code</label>
                                            <input
                                                type="text"
                                                id="currentPostcode"
                                                name="currentPostcode"
                                                placeholder="Post Code"
                                                value={formData.currentPostcode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group is-add">
                                            <label htmlFor="postalAddress">Permanent/Postal Address (If different)</label>
                                            <input
                                                type="text"
                                                id="postalAddress"
                                                name="postalAddress"
                                                placeholder="Your Postal Address"
                                                value={formData.postalAddress}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group is-post">
                                            <label htmlFor="postalPostcode">Post Code</label>
                                            <input
                                                type="text"
                                                id="postalPostcode"
                                                name="postalPostcode"
                                                placeholder="Post Code"
                                                value={formData.postalPostcode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="homePhone">Home Phone</label>
                                            <input
                                                type="tel"
                                                id="homePhone"
                                                name="homePhone"
                                                placeholder="Your Phone Number"
                                                value={formData.homePhone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mobile">Mobile</label>
                                            <input
                                                type="tel"
                                                id="mobile"
                                                name="mobile"
                                                placeholder="Your Mobile Number"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-line"></div>
                                    <h3 className="form-subheading">Section 2: Availability & Media Source</h3>
                                    <div className="form-row">
                                        <div className="form-group is-add">
                                            <label htmlFor="availability">How soon are you looking to undertake your first shift/placement?</label>
                                            <input
                                                type="text"
                                                id="availability"
                                                name="availability"
                                                placeholder="Xyz Abc"
                                                value={formData.availability}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group is-post">
                                            <label htmlFor="milesWillingToTravel">Miles willing to travel</label>
                                            <input
                                                type="text"
                                                id="milesWillingToTravel"
                                                name="milesWillingToTravel"
                                                placeholder="10"
                                                value={formData.milesWillingToTravel}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group" id="checkbox-group">
                                        <div className="checkbox-group">
                                            <input
                                                type="checkbox"
                                                id="full-time"
                                                name="employment"
                                                value="full-time"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="full-time">Full Time</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input
                                                type="checkbox"
                                                id="part-time"
                                                name="employment"
                                                value="part-time"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="part-time">3 Days per Week</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input
                                                type="checkbox"
                                                id="more-than-3"
                                                name="days"
                                                value=">3days"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="more-than-3">Local Only</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input
                                                type="checkbox"
                                                id="less-than-3"
                                                name="days"
                                                value="<3days"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="less-than-3">Weekends Only</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input
                                                type="checkbox"
                                                id="local-only"
                                                name="location"
                                                value="local"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="local-only">Part Time</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input
                                                type="checkbox"
                                                id="national"
                                                name="location"
                                                value="national"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="national">3 Days per Week</label>
                                        </div>
                                        <div className="checkbox-group">
                                            <input
                                                type="checkbox"
                                                id="weekends-only"
                                                name="days"
                                                value="weekends"
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="weekends-only">National</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox-group-three">
                                            <label className="is-add">Are you currently working or registered with any other agency or contracted to provide services to any organization? If yes, please provide details below. Please ensure to update RIVET JOBS if this changes.</label>
                                            <div className="checkbox-flex">
                                                <div className="checkbox-group">
                                                    <input
                                                        type="radio"
                                                        id="yes"
                                                        name="working"
                                                        value="yes"
                                                        checked={formData.working === 'yes'}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="yes">Yes</label>
                                                </div>
                                                <div className="checkbox-group">
                                                    <input
                                                        type="radio"
                                                        id="no"
                                                        name="working"
                                                        value="no"
                                                        checked={formData.working === 'no'}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="no">No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            type="text"
                                            id="agencyDetails"
                                            name="agencyDetails"
                                            placeholder="Provide details if applicable"
                                            value={formData.agencyDetails}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox-group-three">
                                            <label>How did you hear about us?</label>
                                            <div className="form-row">
                                                <div className="form-group" id="form-grid">
                                                    {Object.keys(formData.referral).map((key) => (
                                                        <div className="checkbox-group" key={key}>
                                                            <input
                                                                type="checkbox"
                                                                id={key}
                                                                name={key}
                                                                checked={formData.referral[key]}
                                                                onChange={handleChange}
                                                            />
                                                            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="referralSource">Name of the site/publication/event/person:</label>
                                                <input
                                                    type="text"
                                                    id="referralSource"
                                                    name="referralSource"
                                                    placeholder="Xyz Abc"
                                                    value={formData.referralSource}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="button-group">
                                            <button type="button" className="save">Save</button>
                                            <button type="button" className="next">Next</button>
                                        </div> */}
                                          <div className="edidprofile-buttons">
                        <div className="row">
                            {/* <div className="col-md-2"></div> */}
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                    <button>Save</button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="editprofile-button">
                                <Link to="/ApplicationForm2">

                                    <button>Next</button>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="col-md-2"></div> */}
                        </div>
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        
          <style jsx>{`
.container{
    width: 100%;
    max-width: 1200px;
    padding: 0 125px  0 125px;
    margin: 0 auto ;

}
.form{
    padding: 100px 0;
}
.form-wrap{
    padding-top: 25px;
}
.form-heading{
font-family: 'Roboto';
font-style: normal;
font-weight: 800;
font-size: 28px;
align-items: center;
text-decoration-line: underline;
color: #1D71B7;
}
.form-contain{
margin-top: 60px;
background: #FFFFFF;
border: 1px solid #ECECEC;
box-shadow: 0px 10px 10px rgba(104, 104, 104, 0.05);
border-radius: 20px;
padding: 60px 48px 90px 48px;
}
.form-subheading{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
align-items: center;
color: #1D71B7;
}
.form-container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form-containtbox{
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.form-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}
    .form-group  label {
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 14px;
display: flex;
align-items: center;
color: #303030;
}
label{
padding: 0
}

.form-group input {
    
    background: #F5F7FA;
    border-radius: 5px;
    border: none;
    padding: 10px  ;
    
    /* Mr/Mrs./Miss. */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #999999;
    }
    .form-row {
    display: flex;
    justify-content: space-between;
gap: 30px;

}
.form-group input[type="text"], 
.form-group input[type="email"], 
.form-group input[type="tel"] {
    width: 100%;
}

.form-line{
    border: 1.5px solid #B4D3E0;
    margin-top: 10px;
}
    #checkbox-group{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

}
    .is-add{
 width: 76% !important;
}
.is-post{
    width: 24% !important;
   }
    .checkbox-group{

display: flex;
flex-direction: row;
gap: 8px;
}


.checkbox-group label{
    padding-top: 7px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    color: #303030;
    }
    .checkbox-group-two{
        display: flex !important;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .checkbox-flex{
        display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    }
    
    .checkbox-group-three{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: start;
    }
    #form-grid{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    
    .button-group{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-top:  110px;
    }
    .save{
        /* button */
    
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5.73474px 7.64632px;
    gap: 4.78px;
    width: 290.93px;
    height: 45px;
    background: #1D71B7;
    border-radius: 5.73474px;
    border: 1px solid #1D71B7;
    
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 11px;
    display: flex;
    align-items: center;
    color: #FEFEFE;
    }
    
    .next{
        /* button */
    
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5.73474px 7.64632px;
    gap: 4.78px;
    width: 290.93px;
    height: 45px;
    
    background: #ECF3F8;
    border-radius: 5.73474px;
    border: 1px solid #ECF3F8;
    }
    
    
    @media (max-width: 996px) and (min-width:730px) {
        .form-row {
            display: flex;
            justify-content: space-between;
            gap: 30px;
            flex-direction: column;
        }
    
        .container {
            padding: 0 60px 0 60px;
        }
        .checkbox-group-three {
            flex-direction: column;
        }
        .checkbox-group-two {
            display: flex !important;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }
    
        .is-add{
            width: 100% !important;
           }
           
           .is-post{
               width: 50% !important;
              }
    }
    
    @media (max-width: 730px) {
    
        .form {
            padding: 50px 0;
        }
        .form-row {
            display: flex;
            justify-content: space-between;
            gap: 30px;
            flex-direction: column;
        }
    
        .container {
            padding: 0 20px 0 20px;
        }
        .checkbox-group-three {
            flex-direction: column;
        }
        .checkbox-group-two {
            display: flex !important;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }
    
        .is-add{
            width: 100% !important;
           }
           
           .is-post{
               width: 70% !important;
              }
    
              .form-contain {
                padding: 40px 28px 60px 28px;
            }
    
            #checkbox-group {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
            #form-grid {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
    
            .button-group {
                margin-top: 50px;
            }
    }


          `}</style>
        
        </>
    );
};

export default ApplicationForm1;

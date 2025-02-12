
import React from "react";
import { Link, NavLink } from "react-router-dom";
import AdminNav from './AdminNav';


export default function EditAdmin() {
 
  return (
    <>
    <AdminNav />
       <div className="page-wrapper">
             <div className="content">
               <form >
                 <div className="row">
                   <nav aria-label="breadcrumb" style={{ '--bs-breadcrumb-divider': 'none' }}>
                     <ol className="breadcrumb">
                       <li className="breadcrumb-item"><NavLink to="/">Dashboard </NavLink>/</li>
                       <li className="breadcrumb-item"><NavLink to="/admin">User </NavLink>/</li>
                       <li className="breadcrumb-item active" aria-current="page">Edit User</li>
                     </ol>
                   </nav>
                   <div className="col-lg-12 col-sm-12">
                     <div className="content-page-header">
                       <h5>Edit User</h5>
                     </div>
                     <h1 className='mt-5'>Basic Details :</h1>
                     <div className="row mt-4">
                       <div className="col-lg-4">
                         <div className="form-group">
                           <label>Name</label>
                           <input
                             type="text"
                             name="name"
                             className="form-control"
                             placeholder="Enter Name"
                             required
                           />
                         </div>
                       </div>
                       <div className="col-lg-4">
                         <div className="form-group">
                           <label>Email</label>
                           <input
                             type="mail"
                             name="email"
                             className="form-control"
                             placeholder="Enter Email"
                             required
                           />
                         </div>
                       </div>
                       <div className="col-lg-4">
                         <div className="form-group">
                           <label>Phone</label>
                           <input
                             type="number"
                             name="phone"
                             className="form-control"
                             placeholder="Enter Phone"
                             required
                           />
                         </div>
                       </div>
                       <div className="col-lg-4">
                         <div className="form-group">
                           <label>Password</label>
                           <input
                             type="password"
                             name="password"
                             className="form-control"
                             placeholder="Enter Password"
                             required
                           />
                         </div>
                       </div>
                       <div className="col-lg-4">
                         <div className="form-group">
                           <label>Joining Date</label>
                           <input
                             type="date"
                             name="joining_date"
                             className="form-control"
                             required
                           />
                         </div>
                       </div>
                       <div className="col-lg-4">
                         <div className="form-group">
                           <label>Subscription</label>
                           <div className="siderbar-toggle">
                             <label className="switch">
                               <input
                                 type="checkbox"
                                 name="subscription"
                                 defaultChecked={true}
                               />
                               <span className="slider round"></span>
                             </label>
                           </div>
                         </div>
                       </div>
                     </div>
                     <h1 className='mt-5'>Address Details :</h1>
                     <div className="row mt-4">
                       <div className="col-lg-2">
                         <div className="form-group">
                           <label>House Number</label>
                           <input
                             type="text"
                             name="house_number"
                             className="form-control"
                             placeholder="Enter House Number"
                             required
                           />
                         </div>
                       </div>
                       <div className="col-lg-1">
                         <div className="form-group">
                           <label>Floor</label>
                           <input
                             type="number"
                             name="floor"
                             className="form-control"
                             placeholder="Floor"
                           />
                         </div>
                       </div>
                       <div className="col-lg-3">
                         <div className="form-group">
                           <label>Building</label>
                           <input
                             type="text"
                             name="building"
                             className="form-control"
                             placeholder="Enter Building"
                             required
                           />
                         </div>
                       </div>
                       <div className="col-lg-3">
                         <div className="form-group">
                           <label>Street</label>
                           <input
                             type="text"
                             name="street"
                             className="form-control"
                             placeholder="Enter street"
                             required
                           />
                         </div>
                       </div>
                       <div className="col-lg-3">
                         <div className="form-group">
                           <label>Society</label>
                           <input
                             type="text"
                             name="society"
                             className="form-control"
                             placeholder='Enter Society'
                             required
                           />
                         </div>
                       </div>
                       <div className='col-lg-3'>
                         <div className="form-group">
                           <label>State</label>
                           <div>
                             <select
                               name="state"
                               id="state"
                               className="form-select"
                               required
                             >
                               <option selected >Select State</option>
                               <option value={'Gujarat'}>Gujarat</option>
                               <option value={'Rajasthan'}>Rajasthan</option>
                               <option value={'Delhi'}>Delhi</option>
                             </select>
                           </div>
                         </div>
                       </div>
     
     
     
                     </div>
                     <div className="btn-path">
                       <Link to={'/admin'} className="btn btn-cancel me-3">Back</Link>
                       <button type="submit" className="btn btn-submit">Submit</button>
                     </div>
                   </div>
                 </div>
               </form>
             </div>
           </div>
    </>
  )
}
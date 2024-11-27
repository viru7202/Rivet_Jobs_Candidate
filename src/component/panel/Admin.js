import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Swal from "sweetalert2";

const Admin = () => {
  const [data, setData] = useState([])

  const getUserData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/admins`
        );
        if (res.status === 200) {
          setData(res.data.data);
      } else {
          setData([]);
      }
      } catch (err) {
        console.log(err);
        Swal.fire({
          type: "error",
          icon: "error",
          title: "Something went wrong",
        });
      }
    };
  useEffect(() => {
    getUserData()
  }, []);
  const handleDelete = async (id) => {
      try {
          const result = await Swal.fire({
              title: 'Are you sure?',
              text: 'You will be delete this User',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#5000C0',
              cancelButtonColor: '#3085d6',
              confirmButtonText: 'Yes, delete it!'
          });
          if (result.isConfirmed) {
              const res = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/deleteAdmin/` + id);
              if (res.status === 200) {
                  getUserData()
                  Swal.fire({
                      title: 'Deleted!',
                      text: 'This User has been deleted.',
                      icon: 'success',
                      showConfirmButton: false,
                      timer: 1500
                  });
              } else {
                  Swal.fire({
                      title: 'Deleted failed!',
                      text: 'User deleted failed.',
                      icon: 'error',
                  });
              }
          }
      } catch (err) {
          console.error(err);
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
          });
      }
  };
 
  console.log(data);
return (
  <>
   <div className="page-wrapper page-settings">
              <div className="content">
                  <div className="content-page-header content-page-headersplit">
                      <h5>User</h5>
                      <div className="list-btn">
                          <ul> 
                              <li>
                                  <Link to={'/createadmin'} className="btn btn-primary"><i className="fa fa-plus me-2"></i>Create</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12 ">
                          <div className="table-resposnive">
                              <table className="table datatable">
                                  <thead>
                                      <tr>
                                          <th>Index</th>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>Password</th>
                                          <th>Contact </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {data.map((dataa, index) => (
                                          <tr key={index}>
                                              <td>{index + 1}</td>
                                              <td>{dataa.name}</td>
                                              <td>{dataa.email}</td>
                                              <td>{dataa.password}</td>
                                              <td>{dataa.phone}</td>
                                              <td>
                                                  <div className="table-actions d-flex">
                                                      <Link className="delete-table me-2" to={`/editadmin/${dataa.id}`}> <i className="fas fa-edit"></i> </Link>
                                                      <div className="delete-table" onClick={() => handleDelete(dataa.id)}><img src="assets/img/icons/delete.svg" alt="svg" /></div>
                                                  </div>
                                              </td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div> 
  </>
)
}

export default Admin
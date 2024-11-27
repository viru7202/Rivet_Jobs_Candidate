import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditAdmin() {
  const { id } = useParams();
  const [values, setValues] = useState({
    user_type_id: "",
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  const [userType, setUserType] = useState([]);
  console.log(values);
  const getUserType = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/usertype`
      );
      if (res.status === 200) {
        setUserType(res.data.data);
      } else {
        setUserType([]);
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
    getUserType();
  }, []);

  const getAdminData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/admins/${id}`
      );
      if (res.status === 200) {
        setValues({
          ...values,
          name: res.data.data.name,
          user_type_id: res.data.data.user_type_id,
          email: res.data.data.email,
          password: res.data.data.password,
          phone: res.data.data.phone
        })
      } else {
        Swal.fire({
          type: "error",
          icon: "error",
          title: "Admin not found",
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        type: "error",
        icon: "error",
        title: "something went wrong",
      });
    }
  };
  useEffect(() => {
    getAdminData()
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const contactRegex = /^\d{10}$/;
      const trimmedStudent = {
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
        phone: values.phone.trim()
      }

      if (
        !trimmedStudent.name ||
        !trimmedStudent.email ||
        !trimmedStudent.password ||
        !trimmedStudent.phone ||
        !values.name ||
        !values.user_type_id ||
        !values.email ||
        !values.password ||
        !values.phone
      ) {
        Swal.fire({
          title: "Please enter User Data",
          icon: "warning",
        });
      } else if (!contactRegex.test(values.phone)) {
        Swal.fire({
          title: "Invalid Contact Format",
          text: "Contact number must be exactly 10 digits",
          icon: "warning",
        });
      } else {
        const res = await axios.put(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/editAdmin/${id}`,
          values
        );

        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "User insertion successful",
            timer: 1500,
          }).then(() => {
            navigate("/admin");
          });
        } else {
          Swal.fire({
            title: "User insertion failed",
            icon: "error",
          });
        }
      }
    } catch (err) {
      console.error(err);

      Swal.fire({
        icon: "error",
        title: err.message || "Something went wrong",
        showConfirmButton: true,
      });
    }
  };
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <h1>Add User</h1>
            <div className="row">
              <div className="row">
                <div className="col-6">
                  <div className="add-form">
                    <label> User Type </label>
                    <select
                      name="user_type_id"
                      className="form-select"
                      required
                      value={values.user_type_id}
                      onChange={(e) => {
                        const { value } = e.target;
                        setValues((prevValues) => ({
                          ...prevValues,
                          user_type_id: value,
                        }));
                      }}
                    >
                      <option selected disabled>
                        Select Staff Type
                      </option>
                      {userType.map((data) => (
                        <option
                          key={data.id}
                          value={data.id}
                          data-key={data.id}
                        >
                          {data.user_type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-6">
                  <div className="add-form">
                    <label> User Name </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      value={values.name}
                      onChange={(e) =>
                        setValues({ ...values, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="add-form">
                    <label> User Email </label>
                    <input
                      type="text"
                      placeholder="User Email"
                      className="form-control"
                      value={values.email}
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="add-form">
                    <label> User Password </label>
                    <input
                      type="password"
                      placeholder="User Password"
                      className="form-control"
                      value={values.password}
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="add-form">
                    <label> User Contact </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Contact"
                      value={values.phone}
                      onChange={(e) =>
                        setValues({ ...values, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="btn-path mt-4">
                <Link to='/admin' className="btn btn-cancel me-3">
                  Back
                </Link>
                <button type="submit" className="btn btn-submit ">
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
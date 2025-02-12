import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav';

const Admin = () => {
    return (
        <>
            <AdminNav />
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
                                <table className="table datatable tablee">
                                    <thead>
                                        <tr>
                                            <th>Index</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Contact </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Jhon</td>
                                            <td>jhon@gmail.com</td>
                                            <td>askjdt</td>
                                            <td>321510</td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    {/* <Link className="delete-table me-2" to={`/editadmin/${dataa.id}`}> <i className="fas fa-edit"></i> </Link> */}
                                                    <Link className="delete-table me-2" to={`/editadmin/2`}> <i className="fas fa-edit"></i> </Link>
                                                    <div className="delete-table" ><img src="assets/img/icons/delete.svg" alt="svg" /></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Jhon</td>
                                            <td>jhon@gmail.com</td>
                                            <td>askjdt</td>
                                            <td>321510</td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    {/* <Link className="delete-table me-2" to={`/editadmin/${dataa.id}`}> <i className="fas fa-edit"></i> </Link> */}
                                                    <Link className="delete-table me-2" to={`/editadmin/2`}> <i className="fas fa-edit"></i> </Link>
                                                    <div className="delete-table" ><img src="assets/img/icons/delete.svg" alt="svg" /></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Jhon</td>
                                            <td>jhon@gmail.com</td>
                                            <td>askjdt</td>
                                            <td>321510</td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    {/* <Link className="delete-table me-2" to={`/editadmin/${dataa.id}`}> <i className="fas fa-edit"></i> </Link> */}
                                                    <Link className="delete-table me-2" to={`/editadmin/2`}> <i className="fas fa-edit"></i> </Link>
                                                    <div className="delete-table" ><img src="assets/img/icons/delete.svg" alt="svg" /></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Jhon</td>
                                            <td>jhon@gmail.com</td>
                                            <td>askjdt</td>
                                            <td>321510</td>
                                            <td>
                                                <div className="table-actions d-flex">
                                                    {/* <Link className="delete-table me-2" to={`/editadmin/${dataa.id}`}> <i className="fas fa-edit"></i> </Link> */}
                                                    <Link className="delete-table me-2" to={`/editadmin/2`}> <i className="fas fa-edit"></i> </Link>
                                                    <div className="delete-table" ><img src="assets/img/icons/delete.svg" alt="svg" /></div>
                                                </div>
                                            </td>
                                        </tr>
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
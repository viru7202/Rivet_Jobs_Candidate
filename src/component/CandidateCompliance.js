import React, { useState } from 'react'
import Navbar from './Navbar'

export default function CandidateCompliance() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h2 className='head-title'>Compliance-Documents</h2>
                </div>
            <div className='main'>

                <div className='con-main'>
                    <div className='compliance-title'>
                        <h2 className='upload-title'>Upload Your Compliance</h2>
                    </div>
                    <div className='row compliance-des'>
                        <div className='col-md-6'>
                            <div className="from-group">
                                <select name="id_board" id="id_board" className="form-select" required="">
                                    <option value="-- Select Board--">Application Form</option>
                                    <option>Pancard</option>
                                    <option>Adhar card</option>
                                </select>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-5'>
                                    <input type='date' placeholder="date" className="form-control" />
                                </div>
                                <div className='col-7'>
                                    <input type='number' placeholder='Enter DBS Number' className="form-control" />
                                </div>

                                <div className='col-12'>
                                    <div class='file-input'>
                                        <input type='file'/>
                                            <span class='button'><img src="assets/img/flileing.png" alt="" /></span>
                                            <span class='label' data-js-label>Browse Your Comp</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='upload-status'>Compliance Status</h2>
                            <div className='col-12'>
                                <div className='upload-detail'>
                                    <div className='doc-icon'>
                                        <i className="fa-solid fa-file-pdf" style={{ color: '#1D71B7' }}></i>
                                        <div className='doc-text'>
                                            <h6>Application Form</h6>
                                            <p>John Application Form.pdf</p>
                                            <p>Expiry Date 01/06/2024</p>
                                        </div>
                                    </div>
                                    <div className='upload-stat'>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='upload-detail'>
                                    <div className='doc-icon'>
                                        <i className="fa-solid fa-file-pdf" style={{ color: '#1D71B7' }}></i>
                                        <div className='doc-text'>
                                            <h6>Application Form</h6>
                                            <p>John Application Form.pdf</p>
                                            <p>Expiry Date 01/06/2024</p>
                                        </div>
                                    </div>
                                    <div className='upload-stat'>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='upload-detail'>
                                    <div className='doc-icon'>
                                        <i className="fa-solid fa-file-pdf" style={{ color: '#1D71B7' }}></i>
                                        <div className='doc-text'>
                                            <h6>Application Form</h6>
                                            <p>John Application Form.pdf</p>
                                            <p>Expiry Date 01/06/2024</p>
                                        </div>
                                    </div>
                                    <div className='upload-stat'>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='upload-detail'>
                                    <div className='doc-icon'>
                                        <i className="fa-solid fa-file-pdf" style={{ color: '#1D71B7' }}></i>
                                        <div className='doc-text'>
                                            <h6>Application Form</h6>
                                            <p>John Application Form.pdf</p>
                                            <p>Expiry Date 01/06/2024</p>
                                        </div>
                                    </div>
                                    <div className='upload-stat'>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='upload-detail'>
                                    <div className='doc-icon'>
                                        <i className="fa-solid fa-file-pdf" style={{ color: '#1D71B7' }}></i>
                                        <div className='doc-text'>
                                            <h6>Application Form</h6>
                                            <p>John Application Form.pdf</p>
                                            <p>Expiry Date 01/06/2024</p>
                                        </div>
                                    </div>
                                    <div className='upload-stat'>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='upload-detail'>
                                    <div className='doc-icon'>
                                        <i className="fa-solid fa-file-pdf" style={{ color: '#1D71B7' }}></i>
                                        <div className='doc-text'>
                                            <h6>Application Form</h6>
                                            <p>John Application Form.pdf</p>
                                            <p>Expiry Date 01/06/2024</p>
                                        </div>
                                    </div>
                                    <div className='upload-stat'>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

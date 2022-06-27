import React from 'react';
import { Link } from "react-router-dom";

import '../styles/Landio.css';

const Error404 = () => {
	return (
		 <section className="error-page p-t-130 p-b-120">
	        <div className="container">
	            <div className="row justify-content-center">
	                <div className="col-lg-8">
	                    <div className="error-page-content-wrapper text-center">
	                        <div className="error-image wow fadeInUp animated" data-wow-delay="0.1s" data-wow-duration="1500ms">
	                            <img src="assets/img/error-404.png" alt="error 404" />
	                        </div>
	                        <div className="error-page-content p-t-80  mt-5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms">
	                            <h2>OPPS!</h2>
	                            <p>This Page Are Can’t Be Found</p>
	                            <Link to="/" className="template-btn m-t-35 text-white">
	                                Back To Home <i className="fas fa-arrow-right"></i>
	                            </Link>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>
	)
}

export default Error404
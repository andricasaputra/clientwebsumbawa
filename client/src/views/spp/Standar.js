import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getDetailSppData } from '../../datas/spp.js';
import '../../styles/Landio.css';

const Standar = () => {

	let segment_str = window.location.pathname; 
	let segment_array = segment_str.split( '/' );
	let last_segment = segment_array.pop();

	const [spp, setSpp] = useState([]);

	useEffect(() => {
		getDetailSppData(last_segment).then(result => setSpp(result[0]));
	}, []);

	return (
		<section className="coming-soon-area">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-10">
                    <div className="coming-soon-content text-lg-left">
                        <h1 className="lh-base text-left">{spp.title}</h1>
                        <p style={ spp.body == null ? { display:'none' } : { display:'block' }}  className="newsletter-notice">{spp.body}</p>
                        <Link to="/spp" className="btn btn-dark rounded-pill bordered-btn m-t-40"><i className="fa fa-arrow-left"></i> Kembali ke halaman sebelumnya</Link>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-10">
                    <div className="coming-soon-image text-right m-t-md-50">
                        <img  style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} src={spp.image} alt="coming soon" />
                    </div>
                </div>
            </div>
        </div>
    </section>
	)
}

export default Standar
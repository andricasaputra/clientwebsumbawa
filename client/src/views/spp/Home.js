import React, { useState, useEffect } from 'react';
import List from './SppList';
import { getAllSppData } from '../../datas/spp.js';
import '../../styles/Landio.css';

const Home = () => {

	const [spp, setSpp] = useState([]);

	useEffect(() => {
		getAllSppData().then(result => setSpp(result));
	}, []);

	return (
		<div className="container position-relative">
			<div className="row align-items-center py-8 justify-content-center iconic-boxes-v1">

				<div className="about-us-content mb-5">
                    <div className="common-heading tagline-boxed m-b-30">
                        <span className="tagline">⚡ • Apa itu standar pelayanan publik?</span>
                        <h2 className="title">Standar Pelayanan Publik (SPP)<span className="font-weight-normal small">🐱‍🏍</span></h2>
                    </div>
                    <p>
                        Standard pelayanan publik adalah suatu tolak ukur yang dipergunakan sebagai pedoman penyelenggaraan pelayanan dan acuan penilaian kualitas pelayanan sebagai komitmen atau janji dari penyelenggara pelayanan kepada masyarakat untuk memberikan pelayanan yang berkualitas.
                    </p>
                    <a href="#" className="btn btn-dark rounded-pill bordered-btn m-t-40">Pilih salah satu menu dibawah untuk detil lebih lanjut <i className="fa fa-arrow-right"></i></a>
                </div>

	            { spp.map( layanan => {
	            	return <List key={layanan.id} layanan={layanan} />
	            }) }

	        </div>
       </div>
	)
}

export default Home
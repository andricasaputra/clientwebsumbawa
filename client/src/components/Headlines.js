import React, { useState, useEffect } from 'react'

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const Headlines  = () => {

	const [headlines, setHeadlines] = useState([]);

  	const fetchheadlines = async () => {
	    const response = await fetch('http://localhost:8000/api/headlines?per-page=6');
	    const { data } = await response.json();

	    setHeadlines(data);
  	}

  	useEffect(() => {
    	fetchheadlines()
  	}, []);

	return (
		<section className="py-6" id="pricing">
	      <div className="container">
		        <div className="row justify-content-center">
	          		<div className="col-12 text-center">
	          				<Splide
				          options={{
				            rewind: true,
				            autoplay: true,
				            type: "loop",
				            perPage: 3,
				            breakpoints: {
				              1300: {
				                perPage: 2,
				              },
				              500: {
				                perPage: 1,
				              },
				            },
				            gap: 15,
				          }}
				          aria-label="Tautan Terkait"
				        >
				          {headlines.map(headline => {
				          	return <SplideSlide  key={headline.id}>
				            		<img className="img-fluid"
						              style={{ borderRadius: "10px" }}
						              src={headline.image}
					
						            />
						          </SplideSlide>
				          })}
				    	</Splide>
	          		</div>
	          	</div>
          	</div>
         </section>
	)
}

export default Headlines
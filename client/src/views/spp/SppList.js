import React from 'react';
import { Link } from "react-router-dom";

const SppList = ({ layanan }) => {

    const url = `/spp/${layanan.url}`;

	return (
		<div className="col-xl-3 col-md-6 col-sm-10 text-center">
            <Link to={url}>
                <div className="iconic-box m-t-30">
                    <div className="icon-gradient-3 mb--3">
                        <img src={layanan.icon} alt="icon" width="50" />
                    </div>
                    <h5 className="title mt-3">{ layanan.title }</h5>
                    <p>
                        {layanan.body}
                    </p>
                </div>
            </Link>
        </div>
	)
}

export default SppList
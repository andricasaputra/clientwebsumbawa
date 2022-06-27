import React from 'react';
import { Link } from "react-router-dom";

const ArticleList = ({ article }) => {

	return (
		<div className="col-lg-4 col-md-6 col-sm-12">
		 <div className="card h-100 shadow-lg mb-4 border-0">
	      <img src={article.image} className="card-img-top"/>
	      <div className="card-body text-left" style={{ height: "250px"  }}>
	        <h5 className="card-title">{article.title.substr(0, 50)}...</h5>
	        <p>{article.body.substr(0, 100)}...</p>
	        <div style={{ position: "absolute", bottom: 0,  marginBottom : "20px", marginLeft : "auto", marginRight : "auto", left:0, right:0, textAlign:"center" }}>
	        	<Link to={`/articles/${article.id}`} className="btn btn-primary">Selengkapnya</Link>
	        </div>
	      </div>
	    </div>
      </div>
	)
}

export default ArticleList
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getLatestArticleData } from '../../datas/article.js';
import '../../styles/Landio.css';

const Latest = ({ articles }) => {
	return (
		<div className="widget latest-post-widget">
        	<h4 className="widget-title">Berita Terbaru</h4>
	        <div className="popular-posts-wrapper">
	          
	          {articles.map((article, index) => {
	          	return 	<div className="popular-posts-item" key={index}>
	            <div className="popular-posts-thumbnail">
	              <a href="blog-details.html">
	                <img
	                  src={article.image}
	                  width="10"
	                  alt={`latest post ${index}`}
	                />
	              </a>
	            </div>
	            <div className="popular-posts-item-content">
	              <h5 className="popular-posts-title">
	                <a href="blog-details.html">
	                  {article.title}
	                </a>
	              </h5>
	              <a href="#" className="posts-date">
	                <i className="far fa-calendar-alt" /> {article.created_at}
	              </a>
	            </div>
	          </div>
	          })}
	        </div>
	    </div>
	)
}

export default Latest
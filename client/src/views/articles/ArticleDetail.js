import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getDetailArticleData, getLatestArticleData } from '../../datas/article.js';
import '../../styles/Landio.css';
import Latest from './Latest';

const ArticleDetail = () => {

	let { articleId } = useParams();
	const [article, setArticle] = useState([]);
	const [latestArticle, setLatestArticle] = useState([]);
	const [latestTopFiveArticle, setLatestTopFiveArticle] = useState([]);
	const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

	useEffect(() => {
		getDetailArticleData(articleId).then(result => setArticle(result));
		getLatestArticleData(5).then(result => setLatestTopFiveArticle(result));
	}, []);

	return (
		<section className="blog-area p-t-130 p-b-130">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-lg-8">
		        {/* Blog Content */}
		        <div className="blog-details-content p-r-40 p-r-lg-0">
		          <div className="post-thumbnail">
		            <img
		              src={article.image}
		              alt="blog thumbnail one"
		            />
		          </div>
		          <div className="post-content">
		            <ul className="post-meta">
		              <li>
		                <a href="#" className="post-meta">
		                  <i className="far fa-user" />
		                  { capitalize(article.user) }
		                </a>
		              </li>
		              <li>
		                <a href="#" className="post-meta">
		                  <i className="far fa-calendar-alt" />
		                  { article.created_at }
		                </a>{" "}
		              </li>
		            </ul>
		            <h3 className="post-title">
		              <a href="blog-details.html">
		                { article.title }
		              </a>
		            </h3>
		            <p>
		              {article.body}
		            </p>
		          </div>
		          <div className="post-footer m-t-40">
		            <ul className="related-tags">
		              <li className="item-heading">Related Tags: </li>
		              <li>
		                <a href="#">Landing</a>
		              </li>
		              <li>
		                <a href="#">UI Design</a>
		              </li>
		              <li>
		                <a href="#">Development</a>
		              </li>
		              <li>
		                <a href="#">Mobile Apps</a>
		              </li>
		            </ul>
		            <ul className="social-links">
		              <li className="item-heading">Share :</li>
		              <li>
		                <a href="#">
		                  <i className="fab fa-facebook-f" />
		                </a>
		              </li>
		              <li>
		                <a href="#">
		                  <i className="fab fa-twitter" />
		                </a>
		              </li>
		              <li>
		                <a href="#">
		                  <i className="fab fa-instagram" />
		                </a>
		              </li>
		            </ul>
		            {/* <div className="post-author-box"> */}
		            {/*   <div className="author-thumbnail"> */}
		            {/*     @author: {capitalize(latestArticle.user)} */}
		            {/*   </div> */}
		            {/*   <div className="author-content"> */}
		            {/*     <h4 className="name">{latestArticle.title}</h4> */}
		            {/*     <p> */}
		            {/*       {latestArticle.body}... */}
		            {/*     </p> */}
		            {/*     <ul className="social-links"> */}
		            {/*       <li> */}
		            {/*         <a href="#"> */}
		            {/*           <i className="fab fa-facebook-f" /> */}
		            {/*         </a> */}
		            {/*       </li> */}
		            {/*       <li> */}
		            {/*         <a href="#"> */}
		            {/*           <i className="fab fa-twitter" /> */}
		            {/*         </a> */}
		            {/*       </li> */}
		            {/*       <li> */}
		            {/*         <a href="#"> */}
		            {/*           <i className="fab fa-instagram" /> */}
		            {/*         </a> */}
		            {/*       </li> */}
		            {/*     </ul> */}
		            {/*   </div> */}
		            {/* </div> */}
		          </div>
		        </div>
		        {/* Comments Template */}
		        
		      </div>
		      <div className="col-lg-4">
		        <div className="blog-sidebar m-t-md-80">
		          {/* <div className="widget search-widget"> */}
		          {/*   <h4>Search Here</h4> */}
		          {/*   <form> */}
		          {/*     <input type="search" placeholder="Search" name="search" /> */}
		          {/*     <button className="search-btn"> */}
		          {/*       <i className="far fa-search" /> */}
		          {/*     </button> */}
		          {/*   </form> */}
		          {/* </div> */}
		          <Latest articles={latestTopFiveArticle}/>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)
}

export default ArticleDetail
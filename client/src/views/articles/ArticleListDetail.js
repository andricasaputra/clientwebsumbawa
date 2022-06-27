import React from 'react';

const ArticleListDetail = () => {
	return (
		<section className="blog-area p-t-130 p-b-130">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="blog-post-items p-r-40 p-r-lg-0">
                        <div className="single-blog-post">
                            <div className="post-thumbnail">
                                <img src="assets/img/blog/blog-standard-thumbnail-1.jpg" alt="blog thumbnail one" />
                            </div>
                            <div className="post-content">
                                <ul className="post-meta">
                                    <li><a href="#" className="post-meta"><i className="far fa-user"></i>Nichel Jhon</a></li>
                                    <li><a href="#" className="post-meta"><i className="far fa-calendar-alt"></i>25 May 2021</a>
                                    </li>
                                    <li><a href="#" className="post-meta"><i className="far fa-comment-dots"></i>Comments
                                            (05)</a></li>
                                </ul>
                                <h4 className="post-title">
                                    <a href="blog-details.html">Multiplayer Text Adventure Engine In Node Game Engine
                                        Server Design Optimizing</a>
                                </h4>
                                <div className="post-excerpt">
                                    <p>But must explain to you how all this mistaken idea denouncing pleasure and
                                        praising pain was born and will give complete account of the system and expound
                                    </p>
                                </div>

                                <a href="blog-details.html" className="post-read-more">Learn More <i
                                        className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="single-blog-post">
                            <div className="post-thumbnail">
                                <img src="assets/img/blog/blog-standard-thumbnail-2.jpg" alt="blog thumbnail one" />
                            </div>
                            <div className="post-content">
                                <ul className="post-meta">
                                    <li><a href="#" className="post-meta"><i className="far fa-user"></i>Nichel Jhon</a></li>
                                    <li><a href="#" className="post-meta"><i className="far fa-calendar-alt"></i>25 May 2021</a>
                                    </li>
                                    <li><a href="#" className="post-meta"><i className="far fa-comment-dots"></i>Comments
                                            (05)</a></li>
                                </ul>
                                <h4 className="post-title">
                                    <a href="blog-details.html">Multiplayer Text Adventure Engine In Node Game Engine
                                        Server Design Optimizing</a>
                                </h4>
                                <div className="post-excerpt">
                                    <p>But must explain to you how all this mistaken idea denouncing pleasure and
                                        praising pain was born and will give complete account of the system and expound
                                    </p>
                                </div>

                                <a href="blog-details.html" className="post-read-more">Learn More <i
                                        className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="single-blog-post no-thumbnail">
                            <div className="post-content">
                                <ul className="post-meta">
                                    <li><a href="#" className="post-meta"><i className="far fa-user"></i>Nichel Jhon</a></li>
                                    <li><a href="#" className="post-meta"><i className="far fa-calendar-alt"></i>25 May 2021</a>
                                    </li>
                                    <li><a href="#" className="post-meta"><i className="far fa-comment-dots"></i>Comments
                                            (05)</a></li>
                                </ul>
                                <h4 className="post-title">
                                    <a href="blog-details.html">Postmortem Of Gutenberg The Launch So We Can Embrace
                                        Gutenberg The Product</a>
                                </h4>
                                <div className="post-excerpt">
                                    <p>
                                        But must explain to you how all this mistaken idea of denouncing pleasure and
                                        praising pain was born and complete account
                                    </p>
                                </div>

                                <a href="blog-details.html" className="post-read-more">Learn More <i
                                        className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="single-blog-post thumbnail-cover">
                            <div className="post-thumbnail">
                                <img src="assets/img/blog/blog-standard-thumbnail-3.jpg" alt="blog thumbnail one" />
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li><a href="#" className="post-meta"><i className="far fa-user"></i>Nichel Jhon</a></li>
                                    <li><a href="#" className="post-meta"><i className="far fa-calendar-alt"></i>25 May 2021</a>
                                    </li>
                                    <li><a href="#" className="post-meta"><i className="far fa-comment-dots"></i>Comments
                                            (05)</a></li>
                                </ul>
                                <h4 className="post-title">
                                    <a href="blog-details.html">Postmortem Of Gutenberg The Launch So We Can Embrace
                                        Gutenberg The Product</a>
                                </h4>
                                <a href="blog-details.html" className="post-read-more">Learn More <i
                                        className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <ul className="post-pagination">
                        <li>
                            <a href="#">
                                <i className="fas fa-angle-left"></i>
                            </a>
                        </li>
                        <li><a href="#" className="active">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li>
                            <a href="#">
                                <i className="fas fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <div className="blog-sidebar m-t-md-80">
                        <div className="widget search-widget">
                            <h4>Search Here</h4>
                            <form>
                                <input type="search" placeholder="Search" name="search" />
                                <button className="search-btn"><i className="far fa-search"></i></button>
                            </form>
                        </div>
                        <div className="widget category-widget">
                            <h4 className="widget-title">Category</h4>

                            <ul className="category-link">
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Email Marketing</a></li>
                                <li><a href="#">IT Consultancy</a></li>
                                <li><a href="#">Business Consulting</a></li>
                                <li><a href="#">Apps Development</a></li>
                                <li><a href="#">Media Marketing</a></li>
                                <li><a href="#">SEO Optimizations</a></li>
                            </ul>
                        </div>
                        <div className="widget latest-post-widget">
                            <h4 className="widget-title">Latest News</h4>
                            <div className="popular-posts-wrapper">
                                <div className="popular-posts-item">
                                    <div className="popular-posts-thumbnail">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/latest-post-thumbnail-1.jpg"
                                                alt="latest post one" />
                                        </a>
                                    </div>
                                    <div className="popular-posts-item-content">
                                        <h5 className="popular-posts-title"><a href="blog-details.html">Build Seamless
                                                Spreadshet Import Experience</a></h5>
                                        <a href="#" className="posts-date"><i className="far fa-calendar-alt"></i> 25 May
                                            2021</a>
                                    </div>
                                </div>
                                <div className="popular-posts-item">
                                    <div className="popular-posts-thumbnail">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/latest-post-thumbnail-2.jpg"
                                                alt="latest post two" />
                                        </a>
                                    </div>
                                    <div className="popular-posts-item-content">
                                        <h5 className="popular-posts-title"><a href="blog-details.html">Creating Online
                                                Environment Work Well Older</a></h5>
                                        <a href="#" className="posts-date"><i className="far fa-calendar-alt"></i> 25 May
                                            2021</a>
                                    </div>
                                </div>
                                <div className="popular-posts-item">
                                    <div className="popular-posts-thumbnail">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/latest-post-thumbnail-3.jpg"
                                                alt="latest post three" />
                                        </a>
                                    </div>
                                    <div className="popular-posts-item-content">
                                        <h5 className="popular-posts-title"><a href="blog-details.html">Signs Website Feels
                                                More Haunted House</a></h5>
                                        <a href="#" className="posts-date"><i className="far fa-calendar-alt"></i> 25 May
                                            2021</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget testimonial-widget">
                            <div className="testimonial-widget-active">
                                <div className="single-testimonial">
                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae conse quatur vellum rem</p>

                                    <div className="author">
                                        <img src="assets/img/testimonial/author-1.png" alt="Author" />
                                        <h6 className="name">
                                            Ricky L. Simpson
                                            <span className="position">Web designer</span>
                                        </h6>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae conse quatur vellum rem</p>

                                    <div className="author">
                                        <img src="assets/img/testimonial/author-2.png" alt="Author" />
                                        <h6 className="name" >
                                            Ricky L. Simpson
                                            <span className="position">Web designer</span>
                                        </h6>
                                    </div>
                                </div>

                                <div className="single-testimonial">
                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae conse quatur vellum rem</p>

                                    <div className="author">
                                        <img src="assets/img/testimonial/author-3.png" alt="Author" />
                                        <h6 className="name">
                                            Ricky L. Simpson
                                            <span className="position">Web designer</span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget-tag-cloud">
                            <h4 className="widget-title">Popular Tags</h4>
                            <div className="tags">
                                <a href="#">Landing</a>
                                <a href="#">UI Design</a>
                                <a href="#">Web</a>
                                <a href="#">SEO</a>
                                <a href="#">Development</a>
                                <a href="#">UX/UI</a>
                                <a href="#">Consulting</a>
                                <a href="#">Mobile Apps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	)
}

export default ArticleListDetail
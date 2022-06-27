import React from 'react'

const Comments = () => {
	return (
		<div className="comments-template">
          <h4 className="template-title">People Comments</h4>
          <ul className="comments-list">
            <li className="comment">
              <div className="comment-body">
                <div className="avatar">
                  <img
                    src="assets/img/blog/comment-avatar-1.jpg"
                    alt="comment author one"
                  />
                </div>
                <div className="comment-content">
                  <h5 className="author-name">
                    John F. Medina
                    <span className="date">25 May, 2021</span>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaquequasi
                  </p>
                  <a href="#comment-respond" className="reply">
                    Reply
                  </a>
                </div>
              </div>
              <ul className="children">
                <li>
                  <div className="comment-body">
                    <div className="avatar">
                      <img
                        src="assets/img/blog/comment-avatar-2.jpg"
                        alt="comment author two"
                      />
                    </div>
                    <div className="comment-content">
                      <h5 className="author-name">
                        Jeffrey T. Kelly
                        <span className="date">25 May, 2021</span>
                      </h5>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam eaquequasi
                      </p>
                      <a href="#comment-respond" className="reply">
                        Reply
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="comment">
              <div className="comment-body">
                <div className="avatar">
                  <img
                    src="assets/img/blog/comment-avatar-3.jpg"
                    alt="comment author three"
                  />
                </div>
                <div className="comment-content">
                  <h5 className="author-name">
                    Richard B. Zellmer
                    <span className="date">25 May, 2021</span>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaquequasi
                  </p>
                  <a href="#comment-respond" className="reply">
                    Reply
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="comments-respond" id="comment-respond">
            <h4 className="template-title">Leave A Reply</h4>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="input-field m-b-20">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      name="name"
                      required=""
                    />
                    <div className="icon">
                      <i className="far fa-user-alt" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-field m-b-20">
                    <input
                      type="email"
                      placeholder="Your Email "
                      name="email"
                      required=""
                    />
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-field textarea-field m-b-20">
                    <textarea
                      placeholder="Write Message"
                      name="message"
                      defaultValue={""}
                    />
                    <div className="icon">
                      <i className="far fa-pencil-alt" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-field">
                    <button className="template-btn">
                      Send Comments <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
	)
}

export default Comments
import React, { useState, useEffect } from "react";
import ArticleList from './ArticleList';

const Articles = () => {

  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const response = await fetch('http://localhost:8000/api/articles?per-page=6');
    const { data } = await response.json();

    setArticles(data);
  }

  useEffect(() => {
    fetchArticles()
  }, []);

  return (
    <section className="py-8" id="pricing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xxl-5 text-center mb-3">
            <h6 className="fw-bold fs-4 display-3 lh-sm mb-3">
              Sekilas Berita dan Artikel Menarik
            </h6>
            <p className="mb-4">
              Berikut ini merupakan kumpulan berita dan artikel terbaru dan menarik tentang 
              dunia perkarantinaan.
            </p>
          </div>
        </div>
        <div className="row flex-center">

          { articles.map((article) => {
            return <ArticleList key={article.id} article={article} />
           })}
          
        </div>
      </div>
      {/* end of .container*/}
    </section>
  );
};

export default Articles;

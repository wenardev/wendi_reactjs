import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    var apiKey = '19a0c95905a7480cb396a453ffd9ac09';

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const searchNews = (event) => {
    event.preventDefault();

    var apiKey = '19a0c95905a7480cb396a453ffd9ac09';
    var searchTerm = encodeURIComponent(document.getElementById('search-input').value);

    fetch('https://newsapi.org/v2/everything?q=' + searchTerm + '&apiKey=' + apiKey)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Portal Berita</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" onSubmit={searchNews}>
            <input className="form-control me-2" type="search" placeholder="Cari berita..." aria-label="Search" id="search-input" />
            <button className="btn btn-outline-primary" type="submit">Cari</button>
          </form>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row" id="news-container">
          {news.length > 0 ? (
            news.map((article, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={article.urlToImage} className="card-img-top" alt="Berita" />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <button onClick={() => window.open(article.url, '_blank')} className="btn btn-primary">Baca Selengkapnya</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Tidak ditemukan berita.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
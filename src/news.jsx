import React, { useEffect, useState } from 'react';

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    const apiKey = '19a0c95905a7480cb396a453ffd9ac09';

    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const searchNews = event => {
    event.preventDefault();

    const apiKey = '19a0c95905a7480cb396a453ffd9ac09';
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    fetch(`https://newsapi.org/v2/everything?q=${encodedSearchTerm}&apiKey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleImageError = image => {
    image.onerror = null;
    image.src = 'path/default.png';
    image.alt = 'Gambar tidak tersedia';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Portal Berita</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={searchNews}>
            <input className="form-control mr-sm-2" type="search" placeholder="Cari berita..." aria-label="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Cari</button>
          </form>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          {articles.length > 0 ? (
            articles.map(article => (
              <div className="col-md-4 mb-4" key={article.url}>
                <div className="card h-100">
                  <img src={article.urlToImage} className="card-img-top" alt="Berita" onError={e => handleImageError(e.target)} />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Baca Selengkapnya</a>
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

export default NewsApp;

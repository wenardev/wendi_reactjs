import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Nav } from "react-bootstrap";

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
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
          this.setState({ articles: data.articles });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchNews = event => {
    event.preventDefault();

    const apiKey = '19a0c95905a7480cb396a453ffd9ac09';
    const encodedSearchTerm = encodeURIComponent(this.state.searchTerm);

    fetch(`https://newsapi.org/v2/everything?q=${encodedSearchTerm}&apiKey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.articles && data.articles.length > 0) {
          this.setState({ articles: data.articles });
        } else {
          this.setState({ articles: [] });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleImageError = image => {
    image.onerror = null;
    image.src = 'path/default.png';
    image.alt = 'Gambar tidak tersedia';
  };

  render() {
    const { articles, searchTerm } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Portal Berita</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={this.searchNews}>
              <input className="form-control mr-sm-2" type="search" placeholder="Cari berita..." aria-label="Search" value={searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} />
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
                    <img src={article.urlToImage} className="card-img-top" alt="Berita" onError={e => this.handleImageError(e.target)} />
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
}

export default News;

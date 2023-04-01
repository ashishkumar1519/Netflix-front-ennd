import './App.css';
import Banner from './Banner';
import Nav from './nav';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
    <Nav />
      <Banner />
      <Row title = "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title = "Trending Now" fetchUrl= {requests.fetchTrending} />
      <Row title = "Top Rated" fetchUrl= {requests.fetchTopRated} />
      <Row title = "Action Movies" fetchUrl= {requests.fetchActionMovies} />
      <Row title = "Commedy Movies" fetchUrl= {requests.fetchComedyMovies} />
      <Row title = "Romance Movies" fetchUrl= {requests.FetchRomanceMovies} />
      <Row title = "Documentaries" fetchUrl= {requests.fetchDocumentaries} />
    <ul>

    </ul>

    </div>
  );
}

export default App;

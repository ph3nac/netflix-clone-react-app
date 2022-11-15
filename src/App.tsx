import "./App.css";
import { Row } from "./Row";
import { requests } from "./request";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}
      />
      <Row title="Anime" fetchUrl={requests.fetchAnime}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies}/>
    </div>
  );
}

export default App;

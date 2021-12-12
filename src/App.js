import { useState } from "react/cjs/react.development";
import "./App.css";
import Movielist from "./components/Movielist";
import moviesData from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Addmovie from "./components/Addmovie";
import { Filter } from "./components/Filter";

function App() {
  const [movie, setmovie] = useState(moviesData);
  const [text, settext] = useState("");
  const [rating, setrating] = useState(1);

  const handleAdd = (newmovie) => setmovie([newmovie, ...movie]);

  const handleText = (e) => settext(e.target.value);

  const handleRating = (x) => setrating(x);

  return (
    <div className="App">
      <div>
        <Filter
          handleRating={handleRating}
          rating={rating}
          text={text}
          handletext={handleText}
        />

        <Movielist
          film={movie.filter(
            (el) =>
              el.title.toLowerCase().includes(text.toLowerCase()) &&
              el.rating >= rating
          )}
        />

        <Addmovie add={handleAdd} />
      </div>
    </div>
  );
}

export default App;

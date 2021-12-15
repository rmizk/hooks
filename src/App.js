import { useState } from "react/cjs/react.development";
import "./App.css";
import Movielist from "./components/Movielist";
import moviesData from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Addmovie from "./components/Addmovie";
import { Filter } from "./components/Filter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
// import Edit from "./components/Edit";

function App() {
  const [movie, setmovie] = useState(moviesData);
  const [text, settext] = useState("");
  const [rating, setrating] = useState(1);

  const handleAdd = (newmovie) => setmovie([newmovie, ...movie]);

  const handleText = (e) => settext(e.target.value);

  const handleRating = (x) => setrating(x);

  const handleedit = (i, editedMovie) =>
    setmovie([...movie.map((el) => (el.id === i ? editedMovie : el))]);

  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Filter
                    handleRating={handleRating}
                    rating={rating}
                    text={text}
                    handletext={handleText}
                  />

                  <Movielist
                    edit={handleedit}
                    film={movie.filter(
                      (el) =>
                        el.title.toLowerCase().includes(text.toLowerCase()) &&
                        el.rating >= rating
                    )}
                  />
                </>
              )}
            />

            {/* <Route
              exact
              path="/"
              render={() => (
                <Movielist
                  edit={handleedit}
                  film={movie.filter(
                    (el) =>
                      el.title.toLowerCase().includes(text.toLowerCase()) &&
                      el.rating >= rating
                  )}
                />
              )}
            /> */}

            <Route
              exact
              path="/Addmovie"
              render={() => <Addmovie add={handleAdd} />}
            />

            <Route
              exact
              path="/Details/:id"
              render={(props) => <Details detail={moviesData} {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

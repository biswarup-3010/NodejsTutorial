import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((resp) => {
        setJokes(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Total jokes : {jokes.length}</h1>
      {jokes.map((joke, index) => {
        return (
          <div id={joke.id}>
            <h3>{joke.joke}</h3>
          </div>
        );
      })}
    </>
  );
}

export default App;

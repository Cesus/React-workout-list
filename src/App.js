import "./App.css";
import SingleWorkout from "./SingleWorkout";
import tempImage from "./kelly-sikkema-IZOAOjvwhaM-unsplash.jpg";
import { useState, useEffect } from "react";

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(""); // TODO: set categories for the data to filter

  useEffect(() => {
    getWorkouts();
  }, [query]);

  const getWorkouts = async () => {
    // const response = await fetch(TODO);
    // const data = await response.json();
    const raw_data = {
      0: {
        title: "Triathlon",
        duration: 180,
        exercises: ["Swim 500m", "Bike 20km", "Run 5km"],
      },
      1: {
        title: "Duathlon",
        duration: 120,
        exercises: ["Run 5km", "Bike 20km", "Run 2.5km"],
      },
      2: {
        title: "Marathon",
        duration: 260,
        exercises: ["Run 42km"],
      },
    };
    var data = Object.keys(raw_data).map((key) => [Number(key), raw_data[key]]);
    // console.log(data);
    setWorkouts(data);
  };

  const getSearch = (e) => {
    e.preventDefault();
    // setQuery(search);
    setSearch("");
    alert("Search currently does not work. Sorry! 😔");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <div className="recipes">
        {workouts.map((workout) => (
          <SingleWorkout
            key={workout}
            title={workout[1].title}
            duration={workout[1].duration}
            exercises={workout[1].exercises}
            img={tempImage} // TODO fetch unslpash api
          />
        ))}
      </div>
    </div>
  );
};

export default App;

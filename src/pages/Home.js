import  { useEffect, useState } from "react";
import "./home.css";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RecipeTile from "./RecipeTile";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import axios from "axios";

const Home = () => {
  const [recipeQuery, setRecipeQuery] = useState(""); // for searching of ingredients, dishes etc.
  const [Recipes, setRecipes] = useState([]); // getting the recipes of searched item

  // API  setting calling
  // EDAMAM api is used to build this project
  // to use the API,
  // 1)  user has to Login then select Recipe Search Api
  // 2)  under Developer section, click on Get Started
  // 3)  go to your dashboard then Application and click on View button
  // 4)  get the APP ID and APP Key and replace here
  const YOUR_APP_ID = "fea853ba"; // Enter the API id
  const YOUR_APP_KEY = "3a0226421c380a19d71ce380e1205698"; // Enter API key
  // API URL
  var url = `https://api.edamam.com/search?q=${recipeQuery}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`;
  // functon to fetch data from API
  async function getRecipes() {
    await axios
      .get(url)
      .then((res) => setRecipes(res.data.hits))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    // Get user's location using the Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Replace 'YOUR_WEATHERAPI_KEY' with your WeatherAPI key
        const apiKey = "681e37b2d8e44ca79ac184825231910";

        // Fetch weather data using WeatherAPI
        axios
          .get(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
          )
          .then((response) => {
            // Fetch recipe suggestions using Edamam Recipe API (replace with your API)
            axios
              .get(
                `https://api.edamam.com/search?q=${response.data.location.region}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
              )
              .then((response) => {
                setRecipes(response.data.hits);
              })
              .catch((error) => {
                console.error("Error fetching recipe suggestions:", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
          });
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  return (
    <div className="home">
      <h1 className="heading">Recipies Directory 🥗 </h1>
      {/* Search Tab */}
      <form className="Search_feature">
        <TextField
          id="Search"
          label="Enter Keyword"
          variant="outlined"
          value={recipeQuery}
          onChange={(e) => setRecipeQuery(e.target.value)}
          helperText="Keywords: name,ingredient,cuisine etc."
        />
        <Button
          variant="contained"
          style={{ marginBottom: "20px" }}
          onClick={() => {
            getRecipes();
          }}
        >
          <SearchIcon style={{ fontSize: "30px" }} />
        </Button>
      </form>
      {/* Displaying recipes of searched item */}
      {Recipes.length === 0 ? (
        <div className="empty_Container">
          <BrunchDiningIcon style={{ fontSize: "100px" }} />
          <p> Please enter specific keyword to get your desired Recipe</p>
        </div>
      ) : (
        <div className="recipes_Container">
          {Recipes.map((recipe, index) => {
            return <RecipeTile recipe={recipe} index={index} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;

import React from "react";
import axios from "axios";
import Form from "./Form";
import Weather from "./Weather";
import Movie from "./Movie";
import Location from "./location";
import Row from "react-bootstrap/Row";

var name;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      movieData: [],
      errFlag: "",
      errors: false,
    };
  }
  getWeatherData = async (event) => {
    event.preventDefault();
    name = event.target.cityName.value;

    const url = `${process.env.REACT_APP_URL}getWether?city=${name}`;

    axios
      .get(url)
      .then((result) => {
        this.setState({
          weatherData: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errFlag: true,
          errors: error,
        });
      });

    this.getMovieData(name);
  };
  getMovieData = async (name) => {
    const url2 = `${process.env.REACT_APP_URL}getMovie?city=${name}`;
    axios
      .get(url2)
      .then((result) => {
        this.setState({
          movieData: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errFlag: true,
          errors: error,
        });
      });
  };

  cityInfo(item) {
    if (item.cityName === name) {
      return (
        <>
          <h3>City Name: {item.cityName}</h3>
          <h3>Lon: {item.cityLon}</h3>

          <h3> Lat: {item.cityLat}</h3>
        </>
      );
    }
  }

  render() {
    return (
      <div>
        <Form getWeatherData={this.getWeatherData} />
        <Location
          weatherData={this.state.weatherData}
          cityInfo={this.cityInfo}
        />
        {this.state.errFlag && this.state.errors}
        <Row xs={1} md={4} className="g-4">
        <Movie movieData={this.state.movieData} />
        </Row> 
        <Weather weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default Main;

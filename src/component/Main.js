import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

var name;
var index = 0;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      movieData:[],
      errFlag: false,
    };
  }
  getWeatherData = async (event) => {
    event.preventDefault();
    name = event.target.cityName.value;
    const url = `${process.env.REACT_APP_URL}getWether?city=${name}`;
    const url2 = `${process.env.REACT_APP_URL}getMovie?city=${name}`;
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
        });
      });

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
        });
      });
  };
  

  info(item) {
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
    index = 0;
    return (
      <div>
        <Form onSubmit={this.getWeatherData}>
          <Form.Group>
            <Form.Label>Enter the name of the city: </Form.Label>
            <Form.Control name="cityName" type="text" placeholder="Ex:Amman" />
            <Form.Text className="text-muted">
              write correct name please
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <h2>City Data:</h2>
        {this.state.weatherData.map((item) => {
          return (
            <div>
              <h3>{this.info(item)}</h3>
            </div>
          );
      
        })}
        <h2>Movie Data:</h2>
        {this.state.movieData.map(item=>{
          return(
            <>
            <p>Movie Title: {item.Title} </p>
            <p>Overview: {item.overview} </p>
            {/* <p>Release date: {item.release_date}</p>
            <p>Rate : {item.vote_average} </p>
            <p>poster_path: {item.poster_path} </p> */}

            </>
          )
        })}
         <h2>Weather Data:</h2>
        {this.state.weatherData.map((item) => {
          return (
            <div>
              <h4>Day {index++}</h4>
              <p>date: {item.date}</p>
              <p>min Temp: {item.minTemp}</p>
              <p>max Temp: {item.maxTemp}</p>
              <p>description:{item.description}</p>
            </div>
          );
        })
        
        }
        
      </div>
    );
  }
}

export default Main;

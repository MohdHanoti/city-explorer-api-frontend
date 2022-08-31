import React from "react";

var index = 0;

class Weather extends React.Component{

    render(){
        index = 0;
        return(
            <>
            <h2>Weather Data:</h2>
        {this.props.weatherData.map((item) => {
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
            </>
        )
    }
}
export default Weather; 
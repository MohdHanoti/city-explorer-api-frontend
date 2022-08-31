import React from "react";

class Location extends React.Component{
    render(){
        return(
            <div>
                <h2>Location Information </h2>
        {this.props.weatherData.map((item) => {
          return (
            <div>
              <h3>{this.props.cityInfo(item)}</h3>
            </div>
          );
      
        })}
            </div>
        )
    }
}
export default Location;
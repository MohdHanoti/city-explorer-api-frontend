import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


class form extends React.Component {
  render() {
    return <>
    
    <Form onSubmit={this.props.getWeatherData}>
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
    
    </>;
  }
}

export default form;

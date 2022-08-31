import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class Movie extends React.Component{
    render(){
        return(
            <>
<h2>Movies Data:</h2>
{this.props.movieData.map(item=>{
          return(<div class="modal-body" >
          <Col>
          
<Card style={{ width: '18rem',height:"55rem"}}>
      <Card.Img variant="top" src={item.poster_path} alt="poster" />
      <Card.Body>
        <Card.Title>{item.Title}</Card.Title>
        <Card.Text>
        Release date: {item.release_date}
        <br></br>
        Rate : {item.vote_average}
        <br></br>
        Overview: {item.overview}

        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
</div>

          )
        })}
            
            </>
        )
    }
}
export default Movie;
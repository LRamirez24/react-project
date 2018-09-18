import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Details extends Component {
	constructor(props) {
		super(props);
		 this.state = {  
          selectedDish: null
        };
	}

onDishSelect(dish) {
	this.setState({ selectedDish: dish});
}

renderDish(dish) {
	if (dish != null) {
		return (
			<Card className="col-12 col-md-5 m-1">
			 	<CardImg width="100%" src={dish.image} alt={dish.name} />
			 	<CardBody>
			 	<CardTitle>{dish.name}</CardTitle>
			 	<CardText>{dish.description}</CardText>
			 	</CardBody>
				</Card>
			);
	}
	else {
		return(
			<div> </div>
			);
	}
}


    render() {
        return (
          <div className="container">
            <div className="row">
            <div className="col-12 col-md-5">
            {this.renderDish(this.state.selectedDish)}
            {this.renderComments(this.state.selectedDish)}
            </div>
            </div>
          </div>
        );
}

export default Details;
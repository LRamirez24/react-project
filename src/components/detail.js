import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {  
          selectedDish: null
        }
	}


	  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
    }


      renderDish(dish) {
      if (dish != null) {
        return(
       	<div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
          );
      }
      else {
        return(
          <div></div>
          );
      }
    }

     renderComments(dish) {
      if (dish != null) {
        return(
       	<div className="col-12 col-md-5 m-1">
       	<h4> Comments </h4> 
         <ul class="list-unstyled">
  			<li>Lorem ipsum dolor sit amet</li>
  			<li>Consectetur adipiscing elit</li>
  			<li>Integer molestie lorem at massa</li>
  			<li>Facilisis in pretium nisl aliquet</li>
  			<li>Nulla volutpat aliquam velit </li>
		</ul>
        </div>
          );
      }
      else {
        return(
          <div></div>
          );
      }
    }




	render() {
		const detail = this.props.dishes.map((dish) => {
			return(
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={() => this.onDishSelect(dish)}>
						<CardImg width="100%" src={dish.image} alt={dish.name}/>
						<CardBody>
						   <CardTitle>{dish.name}</CardTitle>
						   <CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
				);
		});


		return (
			<div className="container">
				<div className="row">
						{detail}
				</div>
				<div className="row">
					{this.renderDish(this.state.selectedDish)}
					{this.renderComments(this.state.selectedDish)}
				</div>
			</div>
			); 
	}
}

export default Detail;
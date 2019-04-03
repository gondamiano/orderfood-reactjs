import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button, Carousel } from 'react-bootstrap';

class StoreCarousel extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			selectedStore: {},
			stores: this.props.stores,
			index: PropTypes.INTEGER,
			direction: undefined,
		}
	}

	handleSelect = (selectIndex, e) => {
		this.setState({
			index: selectIndex,
			direction: e.direction
		})
	}

	render() {
		const { index, direction } = this.state;

		return (
			<Carousel
		        activeIndex={index}
		        direction={direction}
		        onSelect={this.handleSelect}
		      >
		        <Carousel.Item>
		          <img
		            className="d-block w-100"
		            src="holder.js/800x400?text=First slide&bg=373940"
		            alt="First slide"
		          />
		          <Carousel.Caption>
		            <h3>First slide label</h3>
		            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		          </Carousel.Caption>
		        </Carousel.Item>

		      </Carousel>
		)
	}
}

export default StoreCarousel;

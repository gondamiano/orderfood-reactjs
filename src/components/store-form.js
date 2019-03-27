import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from 'react-bootstrap';
import StoreCarousel from './StoreCarousel.js';


class Storeform extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			user: PropTypes.String,
			show: PropTypes.Boolean,
			store: [],
			loading: false
		};
	}

	componentDidMount() {
		try{
			fetch('http://localhost:2000/stores/names').then(response => response.json())
			.then(data => {
				this.setState({
					store: data,
				})
			})
		}
		catch (e){
			console.log("error");
		}

	}

	handleChange = (date) => {
		this.setState({
			startDate: date,
		})
	}

	handleClose = () => {
		this.setState({ show: false })
	}

	handleShow = () => {
		this.setState({ show: true })
	}

	render() {
		const storeList = this.state.store.map((store) => <option key={store.id}>{store.name}</option> );
		return (
			<>
			<Button variant="primary" onClick={this.handleShow}>
				Create new order
			</Button>
			<Modal show={this.state.show} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create Order</Modal.Title>
				 </Modal.Header>
				 <Modal.Body>
					 <form>
						 <div className="form-group">
							 <label htmlFor="exampleFormControlInput1">order title</label>
							 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ex: Adam's birthday" />
						 </div>
						 <div className="form-group">
							 <label htmlFor="exampleFormControlSelect1">Select the store you want to order</label>
							 <select className="form-control" id="exampleFormControlSelect1">
							 {storeList}
							 </select>
						 </div>
						 <div className="form-group">
						 <label htmlFor="exampleFormControlInput1">due date for order</label>
						 <br/>
							 <DatePicker
							   selected={this.state.startDate}
							   onChange={this.handleChange}
							   showTimeSelect
							   dateFormat="MMMM d, yyyy"
							 />
						 </div>
					 </form>
				 </Modal.Body>
				 <Modal.Footer>
				 	<Button variant="primary" onClick={this.handleClose}> close </Button>
				 </Modal.Footer>
			 </Modal>
			 </>
		);
	}
}

export default Storeform;

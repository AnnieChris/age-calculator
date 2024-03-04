import React, { useState } from 'react';
import { Form, Button, Image } from "react-bootstrap";
import Age from '../images/Age.jpg';
import agecalculator from '../images/agecalculator.png';

const CalculateAge = () => {
	const [birthDate, setBirthDate] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState("");


	const calculateAge = () => {
		if(birthDate == ""){
			setError("Please enter date of birth")
			setAge("")
		}
		else{
		const today = new Date();
		const birthDateObj = new Date(birthDate);
		let ageDifferenceInMilliseconds = today - birthDateObj;
		let ageDate = new Date(ageDifferenceInMilliseconds);
		let year = ageDate.getFullYear() - 1970;
		let month = ageDate.getMonth();
		let days = ageDate.getDate() - 1;
		setAge(`${year} years, ${month} months, ${days} days`);
		setError("")
		}
		
	};

	return (
		<Form>
			<h1>Enter Date of Birth</h1>
			<Form.Group className="mb-3">
				{/* <Form.Label>Birth Date</Form.Label> */}
				<Form.Control
					type="date"
					value={birthDate}
					onChange={(e) => setBirthDate(e.target.value)}
				/>
			</Form.Group>
			<Button variant="success" onClick={calculateAge}>
				Calculate Age
			</Button >
			{age && <h4 className="mt-3">Your age is: {age}</h4>}
			<p>{error}</p>
		</Form>
		
		
	);
};
export default CalculateAge
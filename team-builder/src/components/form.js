import React, { useState }  from 'react'; 



function Form(props) {
	const [newPerson, setPerson]= useState({
		name: "",
		email: "",
		role: ""
	});

	const handleChange = event => {
		setPerson({...newPerson, [event.target.name]: event.target.value})
	};



	const handleSubmit= event => {
		event.preventDefault();
		console.log(newPerson);
		props.setUser([
			...props.user, newPerson]);
	};

	const resetForm = event => {
		event.preventDefault();
		setPerson({
			name: "",
			email: "",
			role: ""
		});
	};

	return (
		<form onSubmit = {handleSubmit}>

			<label>
				<input name="name" type="text" onChange = { handleChange } placeholder="Name" value = {newPerson.name}/>
			</label><br/>

			<label>		
				<input name="email" type="email" onChange = { handleChange } placeholder="email" value={newPerson.email}/>
			</label><br/>

			<label>
				<select name="role" onChange = { handleChange } value={newPerson.role}>
					<option value="janitor"> Janitor </option>
					<option value="garbageman"> Garbage Man </option>
					<option value="taxidriver"> Taxi Driver </option>
					<option value="influencer"> Influencer </option>

				</select>
			</label>
			<br/>


			<button type="submit"> Submit Person</button> <br/><br/>
			<button type="button" onClick = {resetForm}> reset</button> <br/><br/> 

			Name: {newPerson.name} <br/>
			Email: {newPerson.email} <br/>
			Role: {newPerson.role} <br/>
			
		</form>
		)
}

export default Form;
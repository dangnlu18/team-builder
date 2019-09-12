import React, { useState } from 'react'; 

function Name(props) {
	const [name, setName] = useState();

	const handleNameChange = event => {
		setName(event.target.value)
	};

	return (
		<label>
			Name:  {name}
			<input type="text" onChange = { handleNameChange }/>

		</label>

		)
}

export default Name;
import React from 'react';

function Role() {
	return (
		<label>
			Role:
			<select name="role">
				<option value="janitor"> Janitor </option>
				<option value="garbageman"> Garbage Man </option>
				<option value="taxidriver"> Taxi Driver </option>
				<option value="influencer"> Influencer </option>

			</select>
		</label>

		)
}

export default Role; 
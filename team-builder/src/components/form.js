import React from 'react';
import  Name from './name';
import Role from './role';
import Email from './email';

function Form() {
	return (
		<form>
			<Name />
			<Email />
			<Role />
		</form>
		)
}

export default Form;
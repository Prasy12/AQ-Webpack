import React from 'react';

function Button({ label }) {
	console.log(label, 'label');
	return <button type="button">{label}</button>;
}

export default Button;

import React from 'react';

const Title = props => {
	
	return (
		<div>
			<h1>{props.title}({props.quantity})</h1>
		</div>
	)
}

export default Title;
import React from 'react';
import Info from './containers/Info';
import Descripton from './containers/Description';

function App() {
	console.log('ENV', `${process.env.REACT_APP_ENDPOINT_URL}`);
	return (
		<fragment>
			<Info />
			<Descripton />
		</fragment>
	);
}

export default App;

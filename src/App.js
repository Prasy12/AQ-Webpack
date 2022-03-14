import React from 'react';
import Info from './containers/homePage/info';
import Description from './containers/homePage/description';

function App() {
	console.log('ENVs', `${process.env.REACT_APP_ENDPOINT_URL}`);
	return (
		<>
			<Info />
			<Description />
		</>
	);
}

export default App;

import React from 'react';
import Info from './containers/homePage/info';
import Description from './containers/homePage/description';
import Login from './containers/homePage/login';

function App() {
	console.log('ENVs', `${process.env.REACT_APP_ENDPOINT_URL}`);
	return <Login />;
}

export default App;

import React from 'react';
import Login from './containers/login';

function App() {
	console.log('ENVs', `${process.env.REACT_APP_ENDPOINT_URL}`);
	return <Login />;
}

export default App;

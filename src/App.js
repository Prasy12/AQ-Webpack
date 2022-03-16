import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import theme from './theme';
import Projects from './containers/projects/index';

function App() {
	console.log('ENVs', `${process.env.REACT_APP_ENDPOINT_URL}`);
	return (
		<ThemeProvider theme={theme}>
			<Paper square>
				<Projects />
			</Paper>
		</ThemeProvider>
	);
}

export default App;

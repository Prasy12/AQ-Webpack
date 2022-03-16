import { createTheme } from '@mui/material/styles';

export default createTheme({
	palette: {
		mode: 'dark',
		text: {
			primary: '#FAFAFA',
			secondary: '#BEBEBE'
		}
	},
	typography: {
		fontFamily: 'Nunito',
		fontWeightLight: 200,
		fontWeightMedium: 300,
		fontWeightRegular: 400,
		h1: {
			fontSize: '2rem',
			fontWeight: 200,
			fontFamily: 'Nunito'
		}
	}
});

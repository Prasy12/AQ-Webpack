import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DispatchCard from '../../components/dispatchCard';

function Projects() {
	const [dispatch, setDispatch] = useState([
		{
			name: 'Dispatch Name',
			time: new Date(),
			pinned: true,
			date: '21/03/2022'
		},
		{
			name: 'Electron Package',
			time: new Date(),
			pinned: false,
			date: '22/03/2022'
		},
		{
			name: 'Agnostiq Package',
			time: new Date(),
			pinned: false,
			date: '31/03/2022'
		},
		{
			name: 'Covalent Package',
			time: new Date(),
			pinned: true,
			date: '22/09/2022'
		}
	]);

	const onClick = () => {
		console.log('Clicked');
	};

	return (
		<Grid container rowSpacing={8}>
			<Grid item xs={12}>
				<Typography variant="h1">Experiments</Typography>
			</Grid>
			{dispatch.map((dispatchItems, index) => (
				<Grid item xs={3} key={dispatchItems.name}>
					<DispatchCard key={dispatchItems.name} dispatch={dispatchItems} onClick={onClick} />
				</Grid>
			))}
		</Grid>
	);
}

export default Projects;

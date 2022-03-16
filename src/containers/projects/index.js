import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DispatchCard from '../../components/dispatchCard';
import CollapsibleTable from '../../components/table';
import { DISPATCH_HEADER } from '../../constants/tableHeaderConstants';

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

	const onChange = () => {
		console.log('Changed');
	};

	const onClick = () => {
		console.log('Clicked');
	};

	const createSortHandler = () => {
		console.log('Sort');
	};

	const onSelectAllClick = () => {
		console.log('Select All');
	};

	return (
		<>
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
			<Grid container>
				<CollapsibleTable
					header={DISPATCH_HEADER}
					onRequestSort={createSortHandler}
					onSelectAllClick={onSelectAllClick}
					onChange={onChange}
				/>
			</Grid>
		</>
	);
}

export default Projects;

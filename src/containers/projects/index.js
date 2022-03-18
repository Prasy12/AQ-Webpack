import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinIcon from '@mui/icons-material/PushPin';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinearProgress from '@mui/material/LinearProgress';
import { DISPATCH_HEADER } from '../../constants/tableHeaderConstants';
import CollapsibleTable from '../../components/table';
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

	const projects = [
		{
			name: 'Agnostiq',
			experiment: [
				{
					title: 'title',
					tags: 'tags',
					startTime: 'startTime',
					lastUpdated: 'lastUpdated',
					runTime: 'runTime',
					dispatches: [
						{
							title: 'title',
							tags: 'tags',
							startTime: 'startTime',
							lastUpdated: 'lastUpdated',
							runTime: 'runTime'
						},
						{
							title: 'title',
							tags: 'tags',
							startTime: 'startTime',
							lastUpdated: 'lastUpdated',
							runTime: 'runTime'
						}
					]
				}
			],
			dispatch: [
				{
					title: 'title',
					tags: 'tags',
					startTime: 'startTime',
					lastUpdated: 'lastUpdated',
					runTime: 'runTime'
				},
				{
					title: 'title',
					tags: 'tags',
					startTime: 'startTime',
					lastUpdated: 'lastUpdated',
					runTime: 'runTime'
				}
			]
		}
	];

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
				{/* <CustomizedMenus menu={menu} /> */}
				<CollapsibleTable
					projects={projects}
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

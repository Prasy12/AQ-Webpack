import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '@mui/material/Checkbox';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import CustomizedMenus from '../menu';

function ZeroRow(props) {
	const { header } = props;
	return (
		<TableRow key={1}>
			<TableCell align="center">
				<p>No dispatches found</p>
			</TableCell>
		</TableRow>
	);
}
ZeroRow.propTypes = {
	header: PropTypes.array.isRequired
};

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const menu = [
		{
			name: 'Edit',
			icon: <EditIcon />
		},
		{
			name: 'Archive',
			icon: <ArchiveIcon />
		}
	];

	return (
		<TableBody>
			{row.map(rowItems => (
				<TableRow sx={{ '& td': { border: 0 } }}>
					<TableCell width="200px">
						<Checkbox color="primary" />
						<IconButton
							aria-label="expand row"
							size="small"
							onClick={() => setOpenDispatch(!openDispatch)}
						>
							{openDispatch ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell>
					<TableCell width="200px" align="center">
						{rowItems.title}
					</TableCell>
					<TableCell align="center" width="200px">
						<LinearProgress />
					</TableCell>
					<TableCell align="center" width="200px">
						<Stack direction="row" spacing={1}>
							<Chip label="react" />
							<Chip label="python" />
							<Chip label="aws" />
							<Chip label="rust" />
						</Stack>
					</TableCell>
					<TableCell width="200px" align="center">
						{rowItems.runTime}
					</TableCell>
					<TableCell width="200px" align="center">
						{rowItems.startTime}
					</TableCell>
					<TableCell width="200px" align="center">
						{rowItems.lastUpdated}
					</TableCell>
					<TableCell width="200px">
						<CustomizedMenus menu={menu} />
					</TableCell>
					{/* {openDispatch && row.dispatch.map((dispatches) => (
					<Collapse in={openDispatch} timeout="auto" unmountOnExit>
						{dispatches.map((dispatch) => (
							<TableRow key={dispatch.title} sx={{ '& td': { border: 0 } }}>
								<TableCell align="center">
									{dispatch.title}
								</TableCell>
								<TableCell align="center" width="200px">
					<LinearProgress />
				</TableCell>
				<TableCell align="center" width="200px">
					<Stack direction="row" spacing={1}>
						<Chip label="react" />
						<Chip label="python" />
						<Chip label="aws" />
						<Chip label="rust" />
					</Stack>
				</TableCell>
								<TableCell align="center">{dispatch.runTime}</TableCell>
								<TableCell align="center">{dispatch.startTime}</TableCell>
								<TableCell align="center">{dispatch.lastUpdated}</TableCell>
							</TableRow>
						))}
					</Collapse>
				))} */}
				</TableRow>
			))}
		</TableBody>
	);
}

Row.propTypes = {
	row: PropTypes.array.isRequired
};

export default function CollapsibleTable(props) {
	const [open, setOpen] = React.useState(false);
	const [openDispatch, setOpenDispatch] = React.useState(false);
	const {
		id,
		height,
		width,
		header,
		noShadow,
		rowHeight,
		children,
		onClick,
		order,
		orderBy,
		onRequestSort,
		onSelectAllClick,
		onChange,
		projects
	} = props;
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	const menu = [
		{
			name: 'Edit',
			icon: <EditIcon />
		},
		{
			name: 'Archive',
			icon: <ArchiveIcon />
		}
	];

	return (
		<Table>
			<TableHead>
				{!!header.length && (
					<TableRow sx={{ '& td': { border: 0 } }}>
						<TableCell width="200px">
							<Checkbox color="primary" onChange={onSelectAllClick} />
						</TableCell>
						{header.map(h => (
							<TableCell
								width="200px"
								key={h.label}
								// colSpan={h.colSpan || 1}
								align={h.align || 'center'}
								sortDirection={orderBy === h.id ? order : false}
							>
								<TableSortLabel
									active={orderBy === h.id}
									direction={orderBy === h.id ? order : 'asc'}
									onClick={createSortHandler(h.id)}
								>
									{h.label}
									{orderBy === h.id ? (
										<span>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</span>
									) : null}
								</TableSortLabel>
							</TableCell>
						))}
						<TableCell width="200px">
							<CustomizedMenus menu={menu} />
						</TableCell>
					</TableRow>
				)}
			</TableHead>
			{projects &&
				projects.map(proj => (
					<TableBody key={[proj.name]}>
						<TableRow sx={{ '& td': { border: 0 } }} key={proj.name}>
							<TableCell colSpan={7}>
								<Typography>
									{proj.name ? proj.name : <input style={{ backgroundColor: 'black' }} />}
									<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
										{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
									</IconButton>
								</Typography>
							</TableCell>
							<TableCell width="200px">
								<CustomizedMenus menu={menu} />
							</TableCell>
						</TableRow>
						{open &&
							proj.dispatch.map(disp => (
								<TableRow>
									<TableCell width="200px">
										<Checkbox color="primary" />
									</TableCell>
									<TableCell align="center" width="200px">
										{disp.title}
									</TableCell>
									<TableCell align="center" width="200px">
										<LinearProgress />
									</TableCell>
									<TableCell align="center" width="200px">
										<Stack direction="row" spacing={1}>
											<Chip label="react" />
											<Chip label="python" />
											<Chip label="aws" />
											<Chip label="rust" />
										</Stack>
									</TableCell>
									<TableCell align="center" width="200px">
										{disp.runTime}
									</TableCell>
									<TableCell align="center" width="200px">
										{disp.startTime}
									</TableCell>
									<TableCell align="center" width="200px">
										{disp.lastUpdated}
									</TableCell>
									<TableCell width="200px">
										<CustomizedMenus menu={menu} />
									</TableCell>
								</TableRow>
							))}
						{open &&
							proj.experiment.map(row => (
								<TableRow sx={{ '& td': { border: 0 } }}>
									<TableCell width="200px">
										<Checkbox color="primary" />
										<IconButton
											aria-label="expand row"
											size="small"
											onClick={() => setOpenDispatch(!openDispatch)}
										>
											{openDispatch ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
										</IconButton>
									</TableCell>
									<TableCell width="200px" align="center">
										{row.title}
									</TableCell>
									<TableCell align="center" width="200px">
										<LinearProgress />
									</TableCell>
									<TableCell align="center" width="200px">
										<Stack direction="row" spacing={1}>
											<Chip label="react" />
											<Chip label="python" />
											<Chip label="aws" />
											<Chip label="rust" />
										</Stack>
									</TableCell>
									<TableCell width="200px" align="center">
										{row.runTime}
									</TableCell>
									<TableCell width="200px" align="center">
										{row.startTime}
									</TableCell>
									<TableCell width="200px" align="center">
										{row.lastUpdated}
									</TableCell>
									<TableCell width="200px">
										<CustomizedMenus menu={menu} />
									</TableCell>
									{/* {openDispatch && row.dispatch.map((dispatches) => (
									<Collapse in={openDispatch} timeout="auto" unmountOnExit>
										{dispatches.map((dispatch) => (
											<TableRow key={dispatch.title} sx={{ '& td': { border: 0 } }}>
												<TableCell align="center">
													{dispatch.title}
												</TableCell>
												<TableCell align="center" width="200px">
									<LinearProgress />
								</TableCell>
								<TableCell align="center" width="200px">
									<Stack direction="row" spacing={1}>
										<Chip label="react" />
										<Chip label="python" />
										<Chip label="aws" />
										<Chip label="rust" />
									</Stack>
								</TableCell>
												<TableCell align="center">{dispatch.runTime}</TableCell>
												<TableCell align="center">{dispatch.startTime}</TableCell>
												<TableCell align="center">{dispatch.lastUpdated}</TableCell>
											</TableRow>
										))}
									</Collapse>
								))} */}
								</TableRow>
							))}
					</TableBody>
				))}
		</Table>
	);
}

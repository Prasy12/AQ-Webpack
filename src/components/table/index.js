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

function createData(name, calories, fat, carbs, protein, price) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price
	};
}
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
	return (
		<TableRow key={row.date} sx={{ '& td': { border: 0 } }}>
			<TableCell width="100px">
				<Checkbox color="primary" />
			</TableCell>
			<TableCell align="center" width="200px">
				{row.name}
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
				{row.carbs}
			</TableCell>
			<TableCell align="center" width="200px">
				{row.protein}
			</TableCell>
			<TableCell align="center" width="200px">
				{row.price}
			</TableCell>
		</TableRow>
	);
}

Row.propTypes = {
	row: PropTypes.object.isRequired
};

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
	createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
	createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
	createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5)
];
// const rows = [];

export default function CollapsibleTable(props) {
	const [open, setOpen] = React.useState(false);
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
		onChange
	} = props;
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};
	return (
		<Table>
			<TableHead>
				{!!header.length && (
					<TableRow sx={{ '& td': { border: 0 } }}>
						<TableCell width="100px">
							<Checkbox color="primary" onChange={onSelectAllClick} />
						</TableCell>
						{header.map(h => (
							<TableCell
								scope="row"
								width="200px"
								key={h.label}
								colSpan={h.colSpan || 1}
								align={h.align || 'left'}
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
					</TableRow>
				)}
			</TableHead>
			<TableBody>
				<TableRow sx={{ '& td': { border: 0 } }}>
					<TableCell colSpan={6}>
						<Typography>
							Project Alpha
							<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
								{' '}
								{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
							</IconButton>
						</Typography>
					</TableCell>
				</TableRow>
				{open && rows && rows.map(row => <Row key={row.name} row={row} open={open} />)}
			</TableBody>
		</Table>
	);
}

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function CustomizedMenus(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const { menu } = props;

	return (
		<div>
			<MoreVertIcon onClick={handleClick} style={{ cursor: 'pointer' }} />
			<Menu variant="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
				{menu.map(menuItems => (
					<MenuItem
						onClick={handleClose}
						disableRipple
						key={menuItems.name}
						style={{ width: '170px' }}
					>
						<IconButton>{menuItems.icon}</IconButton>
						<Typography>{menuItems.name}</Typography>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}

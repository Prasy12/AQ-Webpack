import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinIcon from '@mui/icons-material/PushPin';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';

function DispatchCard(props) {
	const { dispatch, onClick, width, height } = props;

	return (
		<div>
			<Card style={{ width, height }}>
				<CardHeader
					avatar={<GitHubIcon />}
					action={
						<>
							{dispatch.pinned && (
								<IconButton onClick={onClick}>
									<PushPinIcon style={{ color: '#99DAFF' }} />
								</IconButton>
							)}
							{!dispatch.pinned && (
								<IconButton onClick={onClick}>
									<PushPinIcon style={{ color: '#BEBEBE' }} />
								</IconButton>
							)}
							{!dispatch.pinned && (
								<IconButton onClick={onClick}>
									<MoreVertIcon style={{ color: '#99DAFF' }} />
								</IconButton>
							)}
							{dispatch.pinned && (
								<IconButton onClick={onClick}>
									<MoreVertIcon style={{ color: '#BEBEBE' }} />
								</IconButton>
							)}
						</>
					}
					title={
						<Typography fontWeight="fontWeightRegular" color="textSecondary">
							{dispatch.name}
						</Typography>
					}
				/>
				<CardContent>
					<Typography fontWeight="fontWeightRegular" color="textSecondary">
						{dispatch.date}
					</Typography>
					<LinearProgress variant="determinate" value={25} sx={{ width: '50%' }} />
				</CardContent>
			</Card>
		</div>
	);
}

DispatchCard.defaultProps = {
	width: '300px',
	height: '114px'
};

DispatchCard.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string
};

export default DispatchCard;

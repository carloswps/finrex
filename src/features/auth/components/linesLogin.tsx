import { Box, Typography } from '@mui/material';

const LinesLogin = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 160,
				left: 800,
				width: 384,
				borderRadius: '6px',
				bgcolor: 'background.default',
				p: 2.5,
				boxShadow: 3,
			}}
		>
			<img src="/linesAnalytics-removebg-preview.png" alt="" />
			<Typography fontWeight={700} color="primary.main">
				Get your personal analitics
			</Typography>
		</Box>
	);
};

export default LinesLogin;

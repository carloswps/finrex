import TripleUpArrow from '@/features/profit/components/icons/TripleUpArrow.svg';
import { Stack, Typography } from '@mui/material';

type Props = {
	month: string;
	percentage: number;
};

const GrowthIndicator = ({ month, percentage }: Props) => {
	return (
		<Stack direction={'row'} alignItems={'center'} spacing={1}>
			<Typography variant="h6">{month}</Typography>
			<Typography variant="h5">+{percentage}%</Typography>
			<TripleUpArrow sx={{ width: 32, height: 32, color: 'primary.main' }} />
		</Stack>
	);
};

export default GrowthIndicator;

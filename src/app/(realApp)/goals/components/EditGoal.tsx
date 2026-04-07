import React from 'react';
import EditIcon from '@/app/(realApp)/goals/components/icons/EditIcon.svg';

type Props = {
	onClick: () => void;
};

const EditGoal = ({ onClick }: Props) => {
	return (
		<button onClick={onClick}>
			<EditIcon />
		</button>
	);
};

export default EditGoal;

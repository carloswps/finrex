'use client';
import ProfilePic from '@/app/(realApp)/profile/components/ProfilePic';
import UsageTimeIcon from '@/app/(realApp)/profile/components/UsageTimeIcon';
import UserDatas from '@/app/(realApp)/profile/components/UserDatas';
import PersonalFormInput from '@/app/(realApp)/profile/components/PersonalFormInput';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	ProfileFormValues,
	profileSchema,
} from '@/app/(realApp)/profile/schemas/profileSchema';
import { useProfileData } from '@/app/(realApp)/profile/utils/mutations';

const PersonalForm = () => {
	const { handleSubmit, control } = useForm<ProfileFormValues>({
		resolver: zodResolver(profileSchema),
	});

	const profileMutation = useProfileData();

	const handleFormSubmit = (data: ProfileFormValues) => {
		profileMutation.mutateAsync(data);
	};

	return (
		<div
			className={
				'flex w-2/3 flex-col justify-center gap-4 rounded-md border border-[var(--green-theme)] px-6 py-2'
			}
		>
			<UsageTimeIcon monthsUsed={6} positionY={45} positionX={210} />
			<div className={'flex gap-4 pt-5'}>
				<ProfilePic />
				<UserDatas />
			</div>
			<form onSubmit={handleSubmit(handleFormSubmit)}>
				<div className={'mb-3 flex flex-col'}>
					<PersonalFormInput
						control={control}
						name={'username'}
						placeholder={'Name'}
					/>
					<PersonalFormInput
						control={control}
						name={'age'}
						placeholder={'Age'}
						isNumeric={true}
					/>
					<PersonalFormInput
						control={control}
						name={'business'}
						placeholder={'Business'}
					/>
					<PersonalFormInput
						control={control}
						name={'salary'}
						placeholder={'Salary'}
						isNumeric={true}
					/>
					<PersonalFormInput
						control={control}
						name={'jobTitle'}
						placeholder={'Job Title'}
					/>
					<PersonalFormInput
						control={control}
						name={'financesGoal'}
						placeholder={'Finances Goal'}
					/>
				</div>

				<button
					className={
						'relative left-15 self-center rounded-lg bg-[var(--green-theme)] p-3 text-white ' +
						'transition hover:bg-[var(--green-theme)]/90'
					}
					type={'submit'}
				>
					Save Profile
				</button>
			</form>
		</div>
	);
};

export default PersonalForm;

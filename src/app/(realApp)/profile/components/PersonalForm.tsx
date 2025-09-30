'use client';
import ProfilePic from "@/app/(realApp)/profile/components/ProfilePic";
import UsageTimeIcon from "@/app/(realApp)/profile/components/UsageTimeIcon";
import {useState} from "react";
import UserDatas from "@/app/(realApp)/profile/components/UserDatas";
import PersonalFormInput from "@/app/(realApp)/profile/components/PersonalFormInput";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProfileFormValues, profileSchema} from "@/app/(realApp)/profile/schemas/profileSchema";
import {useProfileData} from "@/app/(realApp)/profile/utils/mutations";

const PersonalForm = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('username');

    const {handleSubmit, control} = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema)
    })

    const profileMutation = useProfileData();

    const handleBlur = () => {
        setIsEditing(false);
    }

    const handleFormSubmit = (data: ProfileFormValues) => {
        profileMutation.mutateAsync(data)
    }

    return (
        <div className={'flex flex-col justify-center px-6 py-2 border border-[var(--green-theme)] rounded-md gap-4 w-2/3'}>
            <UsageTimeIcon
                monthsUsed={6}
                positionY={50}
                positionX={230}
            />
            <div className={'flex gap-4 items-center'}>
                <ProfilePic/>
                <UserDatas/>
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
                    type={"submit"}
                >
                    Save Profile
                </button>
            </form>
        </div>
    )
}

export default PersonalForm;
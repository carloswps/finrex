'use client'
import BookMarkIcon from "@/app/(realApp)/goals/components/icons/BookMarkIcon.svg";

type Props = {
    onAddGoal: () => void;
}

const AddNewGoal = ({ onAddGoal }: Props) => {

    return (
        <div className={'border-2 border-[var(--green-theme)] rounded-md w-64 h-108 flex flex-col items-center justify-center px-5 py-6 mb-8'}>
            <div
                className={'rounded-full bg-[var(--green-theme)]/40 p-7 mb-9'}
                onClick={onAddGoal}
            >
                <BookMarkIcon className={'w-16 h-16'}/>
            </div>
            <h2 className={'text-2xl text-[var(--green-theme)]'}>Add new goal</h2>
        </div>
    )
}

export default AddNewGoal;
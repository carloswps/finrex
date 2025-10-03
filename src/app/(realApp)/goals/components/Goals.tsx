'use client'
import { useEffect, useRef, useState } from 'react';
import EditGoal from '@/app/(realApp)/goals/components/EditGoal';
import GoalIcon from '@/app/(realApp)/goals/components/GoalIcon';
import GoalGraph from '@/app/(realApp)/goals/components/GoalGraph';
import GoalInfo from '@/app/(realApp)/goals/components/GoalInfo';
import { usePersistedState } from '@/app/(realApp)/goals/hooks/usePersistedState';
import ExcludeGoal from "@/app/(realApp)/goals/components/ExcludeGoal";

type Props = {
    goalId: number;
    onExclude: (id: number) => void;
    goalName: string;
}

const Goals = ({ goalId, onExclude, goalName }: Props) => {
    const [goalNameState, setGoalNameState] = usePersistedState(`${goalName}-goalName`, goalName);
    const [price, setPrice] = usePersistedState(`${goalName}-price`, 100);
    const [savedPrice, setSavedPrice] = usePersistedState(`${goalName}-savedPrice`, 0);

    const remainingPrice:number = Number(price - savedPrice);
    const completePercent:number = Number(Math.min((savedPrice / price) * 100, 100).toFixed(2));
    const remainingPercent:number = Number((100 - Number(completePercent)).toFixed(2));

    const [isEditing, setIsEditing] = useState(false);

    const customOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '0%'
    }
    const customData = {
        labels: ['Completed', 'Remaining'],
        datasets: [
            {
                data: [completePercent, 100 - completePercent],
                backgroundColor: ['rgba(93, 188, 117)', 'rgba(93, 188, 117, 0.3)'],
                borderWidth: 0,
                hoverOffset: 4
            }
        ]
    }

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if(ref.current && !ref.current.contains(event.target as Node)) {
                setIsEditing(false);
            }
        }

        if (isEditing) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isEditing])

    return (
        <div className={'border-2 border-[var(--green-theme)] rounded-md w-64 h-108 flex flex-col px-5 py-6 mb-8'} ref={ref}>
            <div className={'flex gap-4 items-center relative'}>
                <GoalIcon goalId={goalId}/>
                {isEditing ? (
                    <input
                        type="text"
                        maxLength={8}
                        value={goalNameState}
                        onChange={e => setGoalNameState(e.target.value)}
                        autoFocus
                        className="font-bold text-[var(--text-color)] text-xl bg-transparent outline-none"
                    />
                ) : (
                    <>
                        <h3 className="font-bold text-[var(--text-color)] text-xl">
                            {goalNameState}
                        </h3>
                    </>
                )}
                <div className={'mb-4 ml-2 absolute right-3 top-1'}>
                    {isEditing &&
                        <ExcludeGoal
                            onClick={() => onExclude(goalId)}
                        />
                    }
                        <EditGoal
                            onClick={() => setIsEditing(true)}
                        />
                </div>
            </div>
            <GoalGraph
                completePercent={completePercent}
                remainingPercent={remainingPercent}
                customOptions={customOptions}
                customData={customData}
            />
           <GoalInfo
               isEditing={isEditing}
               setIsEditing={setIsEditing}
               remainingPrice={remainingPrice}
               price={price}
               setPrice={setPrice}
               savedPrice={savedPrice}
               setSavedPrice={setSavedPrice}
           />
        </div>
    )
}

export default Goals;
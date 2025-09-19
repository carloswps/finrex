type Props = {
    isEditing: boolean;
    setIsEditing: (value: boolean) => void;
    remainingPrice: number;
    price: number;
    setPrice: (value: number) => void;
    savedPrice: number;
    setSavedPrice: (value: number) => void;
}

const GoalInfo = ({ isEditing, setIsEditing, remainingPrice, price, setPrice, savedPrice, setSavedPrice }: Props) => {
    return (
        <div className={'flex flex-col items-center'}>
            <div className={'flex gap-12'}>
                {isEditing ? (
                    <div className={'flex gap-12'}>
                        <div className={'flex flex-col'}>
                            <label
                                className={'text-[var(--yellow-theme)] text-md font-semibold'}
                            >
                                Price:
                            </label>
                            <div className={'relative'}>
                                <span className={'font-bold text-[var(--text-color)] text-xl invisible'}>
                                    {price}
                                </span>
                                <input
                                    type="text"
                                    className={'font-bold text-[var(--text-color)] text-xl outline-none absolute inset-0 w-full'}
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className={'text-[var(--purple-theme)] text-md font-semibold'}>Remaining:</h3>
                            <p className={'font-bold text-[var(--text-color)] text-xl'}>${remainingPrice}</p>
                        </div>
                    </div>
                ) : (
                    <div className={'flex gap-12'}>
                        <div>
                            <h3 className={'text-[var(--yellow-theme)] text-md font-semibold'}>Price:</h3>
                            <p className={'font-bold text-[var(--text-color)] text-xl'}>${price}</p>
                        </div>
                        <div>
                            <h3 className={'text-[var(--purple-theme)] text-md font-semibold'}>Remaining:</h3>
                            <p className={'font-bold text-[var(--text-color)] text-xl'}>${remainingPrice}</p>
                        </div>
                    </div>
                )}
            </div>
            {isEditing ? (
                <div className={'mt-3 flex flex-col items-center'}>
                    <label
                        className={'text-[var(--purple-theme)] text-md font-semibold'}
                    >
                        Total saved:
                    </label>
                    <input
                        type="text"
                        className={'font-bold text-[var(--text-color)] text-xl outline-none text-center'}
                        value={savedPrice}
                        onChange={e => setSavedPrice(Number(e.target.value))}
                    />
                </div>
            ) : (
                <div className={'mt-3'}>
                    <h3 className={'text-[var(--purple-theme)] text-md font-semibold'}>Total saved:</h3>
                    <p className={'font-bold text-[var(--text-color)] text-xl text-center'}>${savedPrice}</p>
                </div>
            )}
        </div>
    )
}

export default GoalInfo;
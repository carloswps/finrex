import {useState} from "react";

const UserDatas = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('username');

    const handleBlur = () => {
        setIsEditing(false);
    }

    return (
        <div>
            {isEditing ? (
                <input
                    type="text"
                    className={'font-bold text-xl text-[var(--text-color)]'}
                    onChange={event => setUsername(event.target.value)}
                    autoFocus
                    onBlur={handleBlur}
                />
            ) : (
                <h2
                    className={'font-bold text-xl text-[var(--text-color)]'}
                    onClick={() => setIsEditing(true)}
                >
                    {username}
                </h2>
            )}
            <p className={'text-[var(--lines-color)] text-sm'}>Elijah@gmail.com</p>
        </div>
    )
}

export default UserDatas;
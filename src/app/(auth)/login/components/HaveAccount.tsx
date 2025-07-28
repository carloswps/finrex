type Props = {
    hasLoggedIn: boolean;
    toggleLogged: () => void;
}
const HaveAccount = ({hasLoggedIn, toggleLogged}: Props) => {
    return (
        <p onClick={toggleLogged} className={'text-[0.77rem] font-bold cursor-pointer'}>
            {!hasLoggedIn ? `Don't have an account?` : 'Already have an account?'}
            <span className={'text-[var(--purple-theme)] ml-1'}>
                {!hasLoggedIn ? `Sign Up` : 'Login'}
            </span>
        </p>
    )
}

export default HaveAccount;
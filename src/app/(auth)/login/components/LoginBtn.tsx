type Props = {
    hasLoggedIn: boolean;
    disabled?: boolean;
}

const LoginBtn = ({ hasLoggedIn, disabled }: Props) => {
    return (
        <button
            type={"submit"}
            disabled={disabled}
            className={`p-4 font-bold text-[var(--text-color)] 
            ${disabled
                ? 'bg-gradient-to-r from-[var(--green-end)] via-[var(--btngreen-middle)] to-[var(--btngreen-end)] opacity-70 cursor-not-allowed'
                : 'bg-gradient-to-r from-[var(--green-end)] via-[var(--btngreen-middle)] to-[var(--btngreen-end)] cursor-pointer'
            }
            rounded-md w-1/2 text-xl`
            }
        >
            {!hasLoggedIn ? 'Login' : 'Sign up'}
        </button>
    )
}

export default LoginBtn;
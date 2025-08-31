type Props = {
    message: string;
}
const ErrorAlert = ({ message }: Props) => {
    return (
        <div
            className={'bg-[var(--red-theme)] w-44 h-12 absolute top-100 left-160' +
                ' text-nowrap text-center flex items-center justify-center border rounded-md'}>
            {message}
        </div>
    )
}

export default ErrorAlert;
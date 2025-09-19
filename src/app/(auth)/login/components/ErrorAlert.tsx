type Props = {
    message: string;
}
const ErrorAlert = ({ message }: Props) => {
    return (
        <div
            className={'bg-[var(--red-theme)] w-48 h-12 absolute top-90 left-130' +
                ' text-nowrap text-center flex items-center justify-center border rounded-md font-bold'}>
            {message}
        </div>
    )
}

export default ErrorAlert;
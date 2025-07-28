type Props = {
    label: string;
}
const LoginLoad = ({ label }: Props) => {
    return (
        <div className={'fixed inset-0 bg-white/80 z-50 flex items-center justify-center'}>
            <div>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-6 border-t-transparent border-[var(--green-theme)] border-dotted rounded-full animate-spin" />
                    <p className="text-[var(--green-theme)] text-sm">{label}</p>
                </div>
            </div>
        </div>
    )
}

export default LoginLoad;
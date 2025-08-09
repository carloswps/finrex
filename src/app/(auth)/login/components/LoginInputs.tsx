import {useController, UseControllerProps} from "react-hook-form";
import {loginSchemaType} from "@/app/(auth)/login/schemas/loginSchema";
import {useState} from "react";
import HideIcon from './icons/HideIcon.svg';
import ShowIcon from './icons/ShowIcon.svg';

type LoginInputProps = UseControllerProps<loginSchemaType> & {
    label: string;
    placeholder: string;
    inputType: "text" | "password";
}

export const LoginInputs = (props: LoginInputProps) => {
    const { field, fieldState } = useController({
        ...props,
        defaultValue: '',
    });

    const [isHidden, setIsHidden] = useState(props.inputType === 'password');

    const toggleHide = () => {
        setIsHidden(prevState => !prevState)
    }

    return (
        <div>
            <label htmlFor="email" className={'font-bold text-lg'}>{props.label}</label>
            <div className={'relative flex items-center'}>
                <input
                    type={isHidden? 'password' : 'text'}
                    {...field}
                    placeholder={props.placeholder}
                    className={'border border-[var(--green-theme)] max-w-sm rounded-md p-3 outline-none font-bold mb-6 w-full'}
                />
                {props.inputType === 'password' && (
                    isHidden ? (
                        <HideIcon
                            onClick={toggleHide}
                            className={'absolute w-6 h-6 right-3 bottom-9 cursor-pointer text-[var(--lines-color)]'}
                        />
                    ) : (
                        <ShowIcon
                            onClick={toggleHide}
                            className={'absolute w-6 h-6 right-3 bottom-9 cursor-pointer text-[var(--lines-color)]'}
                        />
                    )
                )}
            </div>
            {fieldState.error && <p className='-mt-6 font-semibold'>{fieldState.error.message}</p>}
        </div>
    )
}
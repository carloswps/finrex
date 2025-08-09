import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema, loginSchemaType } from "../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddData } from "../utils/mutations";
import { LoginInputs } from "./LoginInputs";
import LoginBtn from "./LoginBtn";
import HaveAccount from "./HaveAccount";
import LoginLoad from "./LoginLoad";

const FormAction = () => {
    const [hasLoggedIn, setHasLoggedIn] = useState(false);
    const { handleSubmit, control } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const addNewData = useAddData()

    const [disabledBtn, setDisableBtn] = useState(false);


    const handleAlreadyLogged = () => {
        {
            setHasLoggedIn(prevMode => !prevMode);
            console.log(hasLoggedIn)
        }
    }

    const handleFormSubmit = async (data: loginSchemaType) => {
        setDisableBtn(true)
        setTimeout(() => setDisableBtn(false), 1500);

        try {
            await addNewData.mutateAsync(data);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className={' border-b-1 border-[var(--lines-color)] pb-4 w-sm'}>
                    <h2 className={'text-[var(--text-color)] font-bold text-3xl'}>
                        {!hasLoggedIn ? 'Welcome Back' : 'Welcome to Finrex'}
                    </h2>
                    <h4 className={'text-[var(--green-theme)] font-bold -mt-2'}>
                        {!hasLoggedIn ? 'Glad to see you again!' : `Let's create your account`}
                    </h4>
            </div>

            <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className={'text-[var(--text-color)] flex flex-col mt-8 max-w-sm'}
            >
                <LoginInputs
                    name={'email'}
                    control={control}
                    label={'E-mail'}
                    placeholder={'your@email.com'}
                    inputType={'text'}
                />
                <LoginInputs
                    name={'password'}
                    control={control}
                    label={'Password'}
                    placeholder={'Your password'}
                    inputType={'password'}
                />
                <div className={'flex flex-col items-center gap-4'}>
                    <LoginBtn
                        hasLoggedIn={hasLoggedIn}
                        disabled={addNewData.isPending || disabledBtn}
                    />
                    {(addNewData.isPending || disabledBtn) && <LoginLoad label={!hasLoggedIn ? 'Login' : 'Sign Up'} />}
                    <HaveAccount
                        hasLoggedIn={hasLoggedIn}
                        toggleLogged={handleAlreadyLogged}
                    />
                </div>
            </form>
        </div>
    )
}

export default FormAction;
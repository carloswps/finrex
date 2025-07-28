"use client"
import LoginBtn from "@/app/(auth)/login/components/LoginBtn";
import HaveAccount from "@/app/(auth)/login/components/HaveAccount";
import {useState} from "react";
import Cubes from "@/app/(auth)/login/components/Cubes";
import LinesLogin from "@/app/(auth)/login/components/linesLogin";
import BarsLogin from "@/app/(auth)/login/components/barsLogin";
import {useForm} from "react-hook-form";
import {loginSchema, loginSchemaType} from "@/app/(auth)/login/schemas/loginSchema";
import {LoginInputs} from "@/app/(auth)/login/components/LoginInputs";
import {zodResolver} from "@hookform/resolvers/zod";
import {useAddData} from "@/app/(auth)/login/utils/mutations";
import LoginLoad from "@/app/(auth)/login/components/LoginLoad";

const LoginForm = () => {
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

    const handleFormSubmit =  async (data: loginSchemaType) => {
        setDisableBtn(true)
        setTimeout(() => setDisableBtn(false), 1500);
        try {
             await addNewData.mutateAsync(data);
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className={'h-screen w-screen flex justify-center'}>
            <div className={'bg-white w-1/2 p-8'}>
                <div>
                    <img src="/darkLogo.png" alt="" className={'w-40'}/>
                </div>
                <div className={'mt-24'}>
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
                            {(addNewData.isPending || disabledBtn) && <LoginLoad label={!hasLoggedIn ? 'Login' : 'Sign Up'}/>}
                            <HaveAccount
                                hasLoggedIn={hasLoggedIn}
                                toggleLogged={handleAlreadyLogged}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className={'btn-gradient w-full flex flex-col'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <Cubes
                        position={'fixed'}
                        relativeY={'-top-1'}
                        relativeX={'left-132'}
                    />
                    <LinesLogin/>
                    <BarsLogin/>
                    <Cubes
                        position={'fixed'}
                        relativeY={'top-178'}
                        relativeX={'left-384'}
                        rotate={'rotate-180'}
                    />
                </div>
                <div className={'flex flex-col justify-center items-center relative top-143'}>
                    <h3 className={'font-bold text-xl mb-2'}>Change the way you Manage Your Money</h3>
                    <p className={'text-center w-60'}>Welcome to Finrex — your smart tool for organizing and tracking your finances with ease.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
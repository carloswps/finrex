import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema, loginSchemaType, registerSchema, registerSchemaType } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginInputs } from './LoginInputs';
import LoginBtn from './LoginBtn';
import HaveAccount from './HaveAccount';
import LoginLoad from './LoginLoad';
import { useAddRegister, useLogin } from '@/app/(auth)/login/utils/mutations';
import { useRouter } from 'next/navigation';
import ErrorAlert from "@/app/(auth)/login/components/ErrorAlert";

type FormData = loginSchemaType | registerSchemaType;

const FormAction = () => {
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const router = useRouter();
  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(hasLoggedIn ? registerSchema : loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const addNewRegister = useAddRegister();
  const loginUser = useLogin();

  const [disabledBtn, setDisableBtn] = useState(false);

  const handleAlreadyLogged = () => {
    setHasLoggedIn(!hasLoggedIn);
    reset();
  };

  const handleFormSubmit = async (data: FormData) => {
    setDisableBtn(true);

    try {
      if (hasLoggedIn) {
        await addNewRegister.mutateAsync(data as registerSchemaType);
        console.log('Registro realizado', data);
        setHasLoggedIn(false);
        reset();
      } else {
        await loginUser.mutateAsync(data as loginSchemaType);
        console.log('Login realizado', data);
        router.push('/revenue');
      }
    } catch (error) {
      console.log('Erro:', error);
    } finally {
      setDisableBtn(false);
    }
  };

  return (
    <div>
      <div className={'w-sm border-b-1 border-[var(--lines-color)] pb-4'}>
        <h2 className={'text-3xl font-bold text-[var(--text-color)]'}>
          {!hasLoggedIn ? 'Welcome Back' : 'Welcome to Finrex'}
        </h2>
        <h4 className={'-mt-2 font-bold text-[var(--green-theme)]'}>
          {!hasLoggedIn ? 'Glad to see you again!' : `Let's create your account`}
        </h4>
      </div>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={'mt-8 flex max-w-sm flex-col text-[var(--text-color)]'}
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
            disabled={disabledBtn || (hasLoggedIn ? addNewRegister.isPending : loginUser.isPending)}
          />

          {(hasLoggedIn ? addNewRegister.isPending : loginUser.isPending) && (
            <LoginLoad label={!hasLoggedIn ? 'Login' : 'Sign Up'} />
          )}
          <HaveAccount hasLoggedIn={hasLoggedIn} toggleLogged={handleAlreadyLogged} />
        </div>
      </form>
        {(loginUser.isError || addNewRegister.isError) && (
            <ErrorAlert message={String(loginUser.error ?? addNewRegister.error)} />
        )}
    </div>
  );
};

export default FormAction;

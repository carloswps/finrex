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
import ErrorAlert from '@/app/(auth)/login/components/ErrorAlert';

type FormData = loginSchemaType | registerSchemaType;

const FormAction = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const router = useRouter();

  const schema = isRegisterMode ? registerSchema : loginSchema;

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const registerMutation = useAddRegister({
    onSuccess: () => {
      setIsRegisterMode(false);
      reset();
    },
  });
  const loginMutation = useLogin({
    onSuccess: () => {
      router.push('/revenue');
    },
  });

  const mutation = isRegisterMode ? registerMutation : loginMutation;

  const toggleFormMode = () => {
    setIsRegisterMode(prev => !prev);
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    mutation.mutate(data as any);
  };

  return (
    <div>
      <div className={'w-sm border-b-1 border-[var(--lines-color)] pb-4'}>
        <h2 className={'text-3xl font-bold text-[var(--text-color)]'}>
          {!isRegisterMode ? 'Welcome Back' : 'Welcome to Finrex'}
        </h2>
        <h4 className={'-mt-2 font-bold text-[var(--green-theme)]'}>
          {!isRegisterMode ? 'Glad to see you again!' : `Let's create your account`}
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
          <LoginBtn hasLoggedIn={isRegisterMode} disabled={mutation.isPending} />

          {mutation.isPending && <LoginLoad label={isRegisterMode ? 'Sign Up' : 'Login'} />}
          <HaveAccount hasLoggedIn={isRegisterMode} toggleLogged={toggleFormMode} />
        </div>
      </form>
      {mutation.isError && mutation.error && <ErrorAlert message={mutation.error.message} />}
    </div>
  );
};

export default FormAction;

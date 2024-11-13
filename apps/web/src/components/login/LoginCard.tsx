import React from 'react';
import TextInput from './TextInput';
import Button from '../buttons/Button';

interface LoginCardProps {}

const LoginCard: React.FC<LoginCardProps> = () => {
  return (
    <main className="flex sm:w-[435px] w-full overflow-hidden flex-col justify-center p-4 sm:p-8 rounded-2xl border border-solid bg-stone-900 border-stone-800 ">
      <div className="flex flex-col w-full">
        <header className="flex flex-col items-start w-full text-center text-stone-50">
          <h1 className="text-3xl font-bold leading-tight">Welcome</h1>
          <p className="mt-2 text-base">Login to access all your classes</p>
        </header>
        <form className="flex flex-col mt-6 w-full">
          <TextInput label="Email" placeholder="Email address" type="email" />
          <TextInput label="Password" placeholder="Password" type="password" showPasswordToggle />
          <Button variant="text" className="self-start mt-2">
            Forgot password?
          </Button>
          <div className="flex flex-col mt-6 w-full leading-none">
            <Button variant="primary" className="w-full">
              Continue
            </Button>
            <div className="flex gap-2 items-center mt-2 w-full">
              <p className="self-stretch my-auto text-base text-stone-300">
                Don't have an account?
              </p>
              <Button variant="text">Sign up</Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginCard;
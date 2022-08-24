import LogoIcon from 'components/icons/LogoIcon';
import LoginForm from 'components/forms/LoginForm';

const LoginPage = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between px-8 py-5 font-mont mx-auto">
        <div className="flex items-center text-white mr-6">
          <LogoIcon />
          <span className="font-semibold text-xl tracking-tight">Splitwise</span>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div>
            <a
              href="/signup"
              className="inline-block text-sm font-bold px-3 py-2 sm:px-6 sm:py-4 rounded shadow-lg leading-none bg-teal-500 border text-white hover:shadow-none hover:mt-1"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
      <div className="lg:flex align-center justify-center items-center">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default LoginPage;

import LogoIcon from 'components/icons/LogoIcon';

const LoginPage = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">
        <div className="flex items-center text-white mr-6">
          <LogoIcon />
          <span className="font-semibold text-xl tracking-tight">Splitwise</span>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="float-right">
            <a
              href="/signup"
              className="inline-block text-sm px-4 py-2 leading-none bg-teal-500 border rounded text-white border-white hover:border-transparent mt-4 lg:mt-0"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoginPage;

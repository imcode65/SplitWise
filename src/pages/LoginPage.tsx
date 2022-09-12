import LoginForm from 'components/forms/LoginForm';

const LoginPage = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="lg:flex align-center justify-center items-center mt-4 mb-20 p-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

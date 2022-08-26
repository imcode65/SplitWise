import LoginForm from 'components/forms/LoginForm';
import LoginNavbar from 'components/navbars/LoginNavbar';
import FooterBar from 'components/layouts/FooterBar';

const LoginPage = () => {
  return (
    <div className="">
      <LoginNavbar />
      <div className="container mx-auto">
        <div className="lg:flex align-center justify-center items-center mt-16 mb-20">
          <LoginForm />
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default LoginPage;

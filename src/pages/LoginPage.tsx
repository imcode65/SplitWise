import LoginForm from 'components/forms/LoginForm';
import FooterBar from 'components/layouts/FooterBar';
import Navbar from 'components/layouts/Navbar';

const LoginPage = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="lg:flex align-center justify-center items-center mt-16 mb-20">
        <LoginForm></LoginForm>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
};

export default LoginPage;

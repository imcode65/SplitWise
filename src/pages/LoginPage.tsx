import LoginForm from 'components/forms/LoginForm';
import Footer from 'components/layouts/Footer';
import Navbar from 'components/layouts/Navbar';

const LoginPage = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="lg:flex align-center justify-center items-center mt-16 mb-20">
        <LoginForm></LoginForm>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;

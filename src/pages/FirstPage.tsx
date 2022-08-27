import LoginForm from 'components/forms/LoginForm';
import SignUpForm from 'components/forms/SignUpForm';
import LoginNavbar from 'components/navbars/LoginNavbar';
import FooterBar from 'components/footers/FooterBar';

const FirstPage = () => {
  return (
    <div className="">
      <LoginNavbar />
      <div className="container mx-auto">
        <div
          className="lg:flex align-center justify-center items-center mt-4 mb-20 p-4"
          style={{ backgroundImage: `url("background.png")` }}
        >
          <SignUpForm />
        </div>
      </div>
      <FooterBar />
    </div>
  );
};

export default FirstPage;

import FooterBar from 'components/footers/FooterBar';
import SignUpForm from 'components/forms/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="">
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

export default SignUpPage;

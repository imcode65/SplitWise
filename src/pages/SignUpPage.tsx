import SignUpForm from 'components/forms/SignUpForm';
// import LoginModal from 'components/modals/SignUpModal';

const SignUpPage = () => {
  return (
    <div className="mx-auto">
      <div className="lg:flex align-center justify-center items-center mb-20">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;

const LoginForm = () => {
  return (
    <div className="lg:w-1/2 xl:w-1/2 modal_box px-4 md:px-16">
      <div className="text-3xl font-mont mb-4">Log in</div>
      <form className="font-mont" action="/authentication" accept-charset="UTF-8" method="post">
        <label>Email address</label>
        <div className="mb-4 w-full">
          <input
            type="email"
            className="w-full"
            name="credentials[identity]"
            id="credentials_identity"
          />
        </div>
        <label>Password</label>
        <div className="mb-4 w-full">
          <input
            type="password"
            className="w-full"
            name="credentials[password]"
            id="credentials_password"
          />
        </div>
        <div>
          <input
            value="c30d1295-c431-42b2-9822-5c7caa6c1660"
            type="hidden"
            name="sequence[token]"
            id="sequence_token"
          />
        </div>
        <div className="py-4">
          <input
            type="submit"
            name="commit"
            value="Log in"
            className="cta-button block font-mont rounded bg-teal-darker text-white shadow px-4 py-2 text-center w-full"
            data-disable-with="Log in"
          />
        </div>
      </form>
      <a
        className="block text-center font-mont font-semibold text-teal-darker py-2"
        href="/password_reset"
      >
        Forgot your password?
      </a>
      <div className="mt-6 text-grey-lightest font-mont font-semibold text-center">
        <hr className="inline-block" />
        <div className="inline-block px-2">or</div>
        <hr className="inline-block" />
      </div>
      <div className="pt-4 pb-6">
        <a
          className="block cta-button font-mont rounded bg-white border border-grey-lightest shadow px-4 py-2 text-center"
          rel="nofollow"
          data-method="post"
          href="/auth/google_oauth2?redirect_uri=https%3A%2F%2Fsecure.splitwise.com%2Fauth%2Fv4%2Fcallback"
        >
          <img
            className="inline-block mr-2 h-6 w-6"
            src="https://assets.splitwise.com/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png"
          />
          Sign in with Google
        </a>
      </div>
    </div>
  );
};

export default LoginForm;

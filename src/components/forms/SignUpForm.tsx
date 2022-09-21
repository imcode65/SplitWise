import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from 'store/hooks';
import { registerUser } from 'store/actions';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { ACTION } from '../../store/types';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errors } = useAppSelector((state) => state);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const onSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch({
      type: ACTION.GET_ERRORS,
      payload: {}
    });
    event.preventDefault();
    if (email === '') {
      toast.error('Please input email');
      return;
    }
    if (name === '') {
      toast.error('Please input name');
      return;
    }
    if (password === '') {
      toast.error('Please input password');
      return;
    }
    if (confirmPassword === '') {
      toast.error('Please input confirm password');
      return;
    }
    const data = {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword,
      currency: 'USDT',
      language: 'English',
      timezone: 'EST'
    };
    registerUser(data, navigate)(dispatch);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center bg-gray-100 px-2">
        <div className="px-8 py-6 mx-4 my-4 text-left bg-white shadow-lg sm:w-1/2 w-full">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-teal-color"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-center">Join us</h3>
          <form onSubmit={onSignUp}>
            <div className="flex justify-center mt-2">
              <span className="text-red-600 font-semibold">{errors.email}</span>
            </div>
            <div className="mt-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-color"
                />
              </div>
              <div className="mt-4">
                <label className="block">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-color"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-color"
                />
              </div>
              <div className="mt-4">
                <label className="block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-color"
                />
                <label className="text-red-500">{errors.password}</label>
              </div>
              {/* <span className="text-xs text-red-400">Password must be same!</span> */}
              <div className="flex">
                <button
                  type="submit"
                  className="w-full px-6 py-2 mt-4 text-white bg-teal-color rounded-lg hover:bg-teal-500"
                >
                  Create Account
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <NavLink className="text-teal-color hover:underline" to="/login">
                  Log in
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;

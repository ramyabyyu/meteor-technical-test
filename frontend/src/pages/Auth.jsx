import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import meteorLogo from '../images/meteorLogo.png';
import Path from '../routes/name';
import API from '../config/api';
import serverRoute from '../config/serverRoutes';
import animate from '../misc/animateClass';

const initialUserData = {
  fullName: '',
  email: '',
  password: '',
};

const SignIn = () => {
  const [isRegister, setIsRegister] = useState(false); // default false -> login
  const [showPassword, setShowPassword] = useState(false);

  // SweetAlert2
  const MySwal = withReactContent(Swal);

  // Navigate
  const navigate = useNavigate();

  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let response;
      let inputErrMsg;

      if (isRegister) {
        response = await API.post(serverRoute.SignUp, userData, config);
      } else {
        response = await API.post(serverRoute.SignIn, userData, config);
      }

      if (response.status === 200) {
        MySwal.fire({
          title: isRegister ? (
            <p>Register Success! Please Login</p>
          ) : (
            <p>Login Success!</p>
          ),
          icon: 'success',
          showClass: {
            popup: animate.pulse,
          },
        }).then(() => {
          if (isRegister) {
            setIsRegister(false);
            setUserData(initialUserData);
          } else {
            navigate(Path.Home);
          }
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: `<p>${error.response.data.error}</p>`,
        showClass: {
          popup: animate.handShake,
        },
      });
    }
  };

  const switchAuth = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-slate-100 py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
          <img
            src={meteorLogo}
            alt="Meteor Technical Test"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {isRegister ? (
              <>
                Create <span className="text-red-400">new</span> account
              </>
            ) : (
              <>
                Sign <span className="text-red-400">in</span> to your account
              </>
            )}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or &nbsp;
            <div
              className="inline cursor-pointer border border-transparent transition-all duration-150 hover:border-b-red-400"
              onClick={switchAuth}
            >
              {isRegister ? (
                <>
                  Sign <span className="text-red-400">In</span>
                </>
              ) : (
                <>
                  Create new <span className="text-red-400">account</span>
                </>
              )}
            </div>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* FullName */}
              {isRegister && (
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="fullName"
                      id="fullName"
                      name="fullName"
                      autoComplete="fullName"
                      required
                      className="form-input"
                      placeholder="Full Name"
                      onChange={handleChange}
                      value={userData.fullName}
                    />
                    <small
                      className="text-red-500 hidden"
                      id="fullNameInfo"
                    ></small>
                  </div>
                </div>
              )}
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="form-input"
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={userData.email}
                  />
                  <small className="text-red-500 hidden" id="emailInfo"></small>
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    required
                    className="form-input"
                    placeholder="Password"
                    onChange={handleChange}
                    value={userData.password}
                  />
                  <small
                    className="text-red-500 hidden"
                    id="passwordInfo"
                  ></small>
                </div>
              </div>

              {/* Show Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="show-password"
                    name="show-password"
                    className="h-4 w-4 rounded-lg border-gray-300 text-gray-600 focus:ring-gray-500 cursor-pointer"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label
                    htmlFor="show-password"
                    className="ml-2 block text-sm text-gray-900 cursor-pointer"
                  >
                    {showPassword ? 'Hide' : 'Show'} Password
                  </label>
                </div>
              </div>

              {/* Button */}
              <div>
                <button type="submit" className="button-primary">
                  {isRegister ? <>Sign Up</> : <>Sign In</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

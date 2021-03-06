import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Facebook from '../../../images/Facebook.png';
import Twitter from '../../../images/Twitter.png';
import Google from '../../../images/Google.png';

const SignUp: React.FC = () => {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState<string | null>(null);
  const [lengthPassed, setLengthPassed] = useState(false);
  const [casesPassed, setCasesPassed] = useState(false);
  const [numberPassed, setNumberPassed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    password.length >= 8 ? setLengthPassed(true) : setLengthPassed(false);
    password.match('.*\\d.*') ? setNumberPassed(true) : setNumberPassed(false);
    password.match('^(?=.*[a-z])(?=.*[A-Z])')
      ? setCasesPassed(true)
      : setCasesPassed(false);
  }, [lengthPassed, casesPassed, numberPassed, password]);

  const continueRegistration = () => {
    if (lengthPassed && casesPassed && numberPassed && password === password2) {
      const userData = {
        email,
        password,
      };
      sessionStorage.setItem('userData', JSON.stringify(userData));
      return setRedirect('/continue-signup');
    }
  };
  if (redirect) return <Redirect push to={redirect} />;
  return (
    <div className="signup container d-flex flex-column align-items-center">
      <h2 className="text-center">Sign Up</h2>

      <form id="sign-up-form" className="d-flex flex-column align-items-center">
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            defaultValue={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="false"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="false"
            defaultValue={password}
            ref={inputRef}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {inputRef.current?.focus && (
          <div id="password-validation">
            <div>
              <i
                className={lengthPassed ? 'fa fa-check passed' : 'fa fa-check'}
              ></i>
              <span id="password-length">8 characters minimum</span>
            </div>
            <div>
              <i
                className={casesPassed ? 'fa fa-check passed' : 'fa fa-check'}
              ></i>
              <span id="uppercase-lowercase">
                One uppercase and one lowercase
              </span>
            </div>
            <div>
              <i
                className={numberPassed ? 'fa fa-check passed' : 'fa fa-check'}
              ></i>
              <span id="includes-number">One number</span>
            </div>
          </div>
        )}
        <div>
          <input
            name="confirm-password"
            type="password"
            placeholder="Confirm Password"
            autoComplete="false"
            defaultValue={password2}
            onChange={e => setPassword2(e.target.value)}
          />
        </div>
        {password !== password2 && (
          <div id="passwords-unmatched">
            <p className="text-right text-danger">Passwords do not match!</p>
          </div>
        )}
      </form>

      <button className="myBtn" onClick={continueRegistration}>
        Continue
      </button>

      <div className="m-4">
        <p className="m-4">
          Go back to <a href="/login">Login</a>
        </p>
      </div>
      <div className="d-flex w-100 justify-content-center m-4">
        <div className="underline"></div>
        <h6>OR</h6>
        <div className="underline"></div>
      </div>

      <div className="mb-4">
        <p>Social Media Sign Up</p>
        <div className="mb-4 d-flex justify-content-between">
          <a href="https://facebook.com">
            <img src={Facebook} alt="" />
          </a>
          <a href="https://twitter.com">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://facebook.com">
            <img src={Google} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

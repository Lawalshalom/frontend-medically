import React from 'react';
import arrowRight from '../../../images/arrow-right.png';

const ContinueSignUp: React.FC = () => {
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    const form = e.target;
    const formData = new FormData(form);
    const storedData = sessionStorage.getItem('userData');
    const { email, password } =
      storedData !== null ? JSON.parse(storedData) : null;

    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const phoneNumber = formData.get('phone-number');
    const birthDate = formData.get('DOB');
    const genotype = formData.get('genotype');
    const bloodGroup = formData.get('blood-group');
    const gender = formData.get('gender');

    const regData = {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      genotype,
      bloodGroup,
      birthDate,
      gender,
    };
    console.log(regData);
  };

  return (
    <div className="continue-sign-up container">
      <div className="header">
        <a href="/signup">
          <img src={arrowRight} alt="arrow-right" />
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <p className="text-center form-text">
          Just a few more questions to help serve you better.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        id="continue-sign-up-form"
        className="d-flex flex-column align-items-center"
      >
        <div>
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone-number"
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <input type="date" name="DOB" placeholder="Date of Birth" required />
        </div>
        <div>
          <select>
            <option value="">Genotype (Optional)</option>
            <option value="AA">AA</option>
            <option value="AS">AS</option>
            <option value="SS">SS</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <select>
            <option value="">Blood Group (Optional)</option>
            {bloodGroups.map((group, i) => {
              return (
                <option value={group} key={i}>
                  {group}
                </option>
              );
            })}
          </select>
        </div>

        <div className="radio">
          <p className="radio-label">GENDER</p>
          <div>
            <label htmlFor="gender">Male</label>
            <input type="radio" name="gender" value="male" required />
          </div>
          <div>
            <label htmlFor="gender">Female</label>
            <input type="radio" name="gender" value="female" required />
          </div>
          <div>
            <label htmlFor="gender">Other</label>
            <input type="radio" name="gender" value="other" required />
          </div>
        </div>
        <button className="myBtn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default ContinueSignUp;

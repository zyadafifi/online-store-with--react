function SignUp() {
  return (
    <div className="container text-center my_form">
      <h3>Create your new account</h3> <br />
      <input type="text" placeholder="Name" />
      <br />
      <br />
      <input type="email" placeholder="E-mail address" />
      <br />
      <br />
      <input type="password" placeholder="Password" /> <br />
      <br />
      <input type="number" placeholder="Mobile-number" />
      <br />
      <br />
      <input type="text" placeholder="Address" />
      <br />
      <br />
      <input type="number" placeholder="ID" /> <br /> <br />
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="radio1"
          name="optradio"
          value="option1"
          checked
        ></input>
        <span id="g-male">Male</span>
        <label className="form-check-label" for="radio1"></label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="radio2"
          name="optradio"
          value="option2"
        ></input>
        <span id="g-female">Female</span>

        <label className="form-check-label" for="radio2"></label>
      </div>
      <br />
      <button className="btn btn-primary log-btn" type="button">
        Sign Up
      </button>
    </div>
  );
}
export default SignUp;
// made by ZYAD AHMED AFIFI

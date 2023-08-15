import "./LoginForm.css";
function LoginForm() {
  return (
    <>
      <div className="container text-center my_form">
        <h3>Log in with your account</h3> <br />
        <input type="email" placeholder="E-mail address" /><br /><br /><input type="password" placeholder="Password"/> <br /><br />
        <button className="btn btn-primary log-btn" type="button">Log in</button>
      </div>
      <br />
    </>
  );
}
export default LoginForm;
// made by ZYAD AHMED AFIFI

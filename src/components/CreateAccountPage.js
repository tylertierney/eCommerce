import "./createAccountPage.css";

const CreateAccountPage = () => {
  return (
    <div className="loginPage">
      <h3>Log In to your account</h3>
      <form>
        <input type="text" placeholder="Username"></input>
        <br />
        <input type="text" placeholder="Email"></input>
        <br />
        <p>
          Don't have an account yet? Click <Link to="/createaccount">here</Link>{" "}
          to get started!
        </p>
      </form>
    </div>
  );
};

export default CreateAccountPage;

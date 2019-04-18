import React from "react";
import SignupForm from "./SignupForm";

class RegisterPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md4.col-md-offset-4">
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default RegisterPage;

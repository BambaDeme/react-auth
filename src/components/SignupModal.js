import React from "react";

const SignupModal = () => {
  return (
    <>
      <div className="position-fixed top-0 vw-100 vh-100">
        <div className="w-100 h-100 bg-dark bg-opacity-75">
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign up</h5>
                  <button className="btn-close"></button>
                </div>

                <div className="modal-body">
                  <form className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Email adress
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">
                        Password
                      </label>
                      <input
                        required
                        type="password"
                        id="signUpPwd"
                        className="form-control"
                        name="pwd"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="RepeatPwd" className="form-label">
                        Repeat Password
                      </label>
                      <input
                        required
                        type="password"
                        id="RepeatPwd"
                        className="form-control"
                        name="pwd"
                      />
                      <p className="text-danger mt-1"></p>
                    </div>

                    <button className="btn btn-primary"> Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
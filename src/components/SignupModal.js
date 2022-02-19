import React, { useContext, useRef, useState } from "react";

import { UserContext } from "../context/userContext";
const SignupModal = () => {
  const { modalState, toggleModals, signUp } = useContext(UserContext);

  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();

  const [validation, setValidation] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    if (
      inputs.current[1].value.length < 6 ||
      inputs.current[2].value.length < 6
    ) {
      setValidation("6 character minimum for the password");
      return;
    }
    if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match");
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      console.log(cred);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }
      if (error.code === "auth/email-already-in-use") {
        setValidation("Email already in use");
      }
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };
  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="w-100 h-100 bg-dark bg-opacity-75"
            onClick={closeModal}
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "400px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Sign up</h5>
                  <button className="btn-close" onClick={closeModal}></button>
                </div>

                <div className="modal-body">
                  <form
                    className="sign-up-form"
                    onSubmit={handleForm}
                    ref={formRef}
                  >
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Email adress
                      </label>
                      <input
                        ref={addInputs}
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
                        ref={addInputs}
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
                        ref={addInputs}
                        required
                        type="password"
                        id="RepeatPwd"
                        className="form-control"
                        name="pwd"
                      />
                      <p className="text-danger mt-1">{validation}</p>
                    </div>

                    <button className="btn btn-primary"> Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupModal;

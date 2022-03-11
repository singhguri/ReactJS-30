import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./loginForm.css";

const LoginForm = () => {
  const { register, handleSubmit, reset, formState, submittedData } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [formState, submittedData, reset]);

  return (
    <div className="main">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit(onSubmit)}>
              <div className="login__field">
                <i className="login__icon fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  className="login__input"
                  name="email"
                  placeholder="User name / Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fa fa-lock" aria-hidden="true"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  name="password"
                  {...register("password", { required: true })}
                />
              </div>

              {formState.errors.email && formState.errors.password && (
                <p>field is required...</p>
              )}

              <button type="submit" className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i
                  className="button__icon fa fa-chevron-right"
                  aria-hidden="true"
                ></i>
              </button>
            </form>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com"
                  className="social-login__icon "
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.facebook.com"
                  className="social-login__icon"
                >
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  className="social-login__icon"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

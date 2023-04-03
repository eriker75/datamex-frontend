import { useLogInMutation } from "@/redux/api/authApi";
import { useForm, SubmitHandler } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useState } from 'react';

interface Inputs {
  email: string;
  password: string;
}

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [logIn, {isError, error}] = useLogInMutation();

  const [httpError, setHttpError] = useState<string[]>([]);

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      const payload = await logIn({
        email,
        password,
      }).unwrap();
      console.log("fulfilled", payload);
    } catch (error: any) {
      setHttpError(error.data.message);
    }
  };

  return (
    <>
      {/*<!-- Sign in view-->*/}
      <div className="view show" id="signin-view">
        <h1 className="h2">Sign in</h1>
        <p className="fs-ms text-muted mb-4">
          Sign in to your account using email and password provided during
          registration.
        </p>
        <form
          className="needs-validation"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-group mb-3">
            <i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input
              className="form-control rounded"
              type="email"
              placeholder="Email"
              required
              {...register("email")}
            />
          </div>
          <div className="input-group mb-3">
            <i className="ai-lock position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <div className="password-toggle w-100">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required
                {...register("password")}
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator"></span>
              </label>
            </div>
          </div>
          <div className="d-flex flex-column gap-1">
            {httpError.map((httpe) => {
              return <div key={httpe} className="text-danger rounded-3">
                {httpe}
              </div>
            })}
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3 pb-1">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="keep-signed-2"
              />
              <label className="form-check-label" htmlFor="keep-signed-2">
                Keep me signed in
              </label>
            </div>
            <a className="nav-link-style fs-ms" href="password-recovery.html">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-primary d-block w-100" type="submit">
            Sign in
          </button>
          <p className="fs-sm pt-3 mb-0">
            Don&apos;t have an account?{" "}
            <a href="#" className="fw-medium" data-view="#signup-view">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export { SignInForm };

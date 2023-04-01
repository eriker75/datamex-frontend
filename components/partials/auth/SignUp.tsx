import { useSingInMutation } from "@/redux/api/authApi";
import { authorize } from '@/redux/slices/authSlice';
import { useForm, SubmitHandler } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useAppDispatch } from '../../../hooks/redux';

interface Inputs {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [signIn] = useSingInMutation();

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
    password_confirmation,
  }) => {
    try {
      const payload = await signIn({
        email,
        password,
        password_confirmation,
      }).unwrap();
      const user = jwt_decode(payload.token);
      dispatch(authorize({user: '', token: 'asda'}));
    } catch (error) {
      console.error("rejected", error);
    }
  };

  return (
    <>
      {/*<!-- Sign up view-->*/}
      <div className="view" id="signup-view">
        <h1 className="h2">Sign up</h1>
        <p className="fs-ms text-muted mb-4">
          Registration takes less than a minute but gives you full control over
          your orders.
        </p>
        <form
          className="needs-validation"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Full name"
              required
              {...register("name")}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              required
              {...register("email")}
            />
          </div>
          <div className="input-group mb-3">
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
          <div className="input-group mb-3">
            <div className="password-toggle w-100">
              <input
                className="form-control"
                type="password"
                placeholder="Confirm password"
                required
                {...register("password_confirmation")}
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
          <button className="btn btn-primary d-block w-100" type="submit">
            Sign up
          </button>
          <p className="fs-sm pt-3 mb-0">
            Already have an account?{" "}
            <a href="#" className="fw-medium" data-view="#signin-view">
              Sign in
            </a>
          </p>
        </form>
      </div>
      <div className="border-top text-center mt-4 pt-4">
        <p className="fs-sm fw-medium text-heading">Or sign in with</p>
        <a
          className="btn-social bs-facebook bs-outline bs-lg mx-1 mb-2"
          href="#"
        >
          <i className="ai-facebook"></i>
        </a>
        <a
          className="btn-social bs-twitter bs-outline bs-lg mx-1 mb-2"
          href="#"
        >
          <i className="ai-twitter"></i>
        </a>
        <a
          className="btn-social bs-instagram bs-outline bs-lg mx-1 mb-2"
          href="#"
        >
          <i className="ai-instagram"></i>
        </a>
        <a className="btn-social bs-google bs-outline bs-lg mx-1 mb-2" href="#">
          <i className="ai-google"></i>
        </a>
      </div>
    </>
  );
};

export default SignUpForm;

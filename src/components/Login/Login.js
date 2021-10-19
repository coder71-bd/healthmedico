import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div style={{ minHeight: 'calc(100vh - 200px)' }}>
      <h3 className="d-3 my-3 text-center text-primary fw-bold">Login</h3>
      <form
        className="w-50 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 600 }}
      >
        {/* email of the user */}
        <input
          className="w-75 d-block mx-auto form-control"
          placeholder="Email"
          {...register('email', {
            required: 'this is a required field',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Please provide correct email address.',
            },
          })}
        />
        {errors.email && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.email.message}
          </p>
        )}

        {/* password of the user */}
        <input
          placeholder="password"
          className="mt-3 w-75 mx-auto d-block form-control"
          {...register('password', {
            required: 'this field is required',
            pattern: {
              value: /(?=.*[!@#$&*])/,
              message:
                'please provide atleast one special charaters (@, # etc.)',
            },
            minLength: {
              value: 6,
              message: 'Your password should be at least 6 characters',
            },
          })}
        />
        {errors.password && (
          <p className="text-danger mb-3 w-75 mx-auto">
            {errors.password.message}
          </p>
        )}

        {/* go to register page */}
        <div className="w-75 mx-auto mb-3 mt-2">
          <Link to="/register">create a new Account</Link>
        </div>

        <input
          className="btn btn-primary text-white w-50 d-block mx-auto"
          type="submit"
        />

        <p className="text-center my-2 fw-bold">or</p>

        <Button variant="success" className="text-white w-50 d-block mx-auto">
          Login With Google
        </Button>
      </form>
    </div>
  );
};

export default Login;

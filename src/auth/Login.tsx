import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface LoginProps {
  onModeChange: (mode: 'login' | 'signup' | 'forgot') => void
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

export default function Login({ onModeChange }: LoginProps) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
          
          <div className="space-y-4">
            <div>
              <Field
                name="email"
                type="email"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm"
                placeholder="Email"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <Field
                name="password"
                type="password"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm"
                placeholder="Password"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>
          </div>

          <button type="submit" className="w-full p-3 rounded-lg bg-purple-600 text-white">
            Login
          </button>

          <div className="text-center space-y-2">
            <button type="button" onClick={() => onModeChange('forgot')} className="text-sm">
              Forgot Password?
            </button>
            <p className="text-sm">
              Don't have an account?{' '}
              <button type="button" onClick={() => onModeChange('signup')} className="text-purple-600">
                Sign Up
              </button>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}

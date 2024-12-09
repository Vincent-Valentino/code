import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
});

interface ForgotPasswordProps {
  onModeChange: (mode: 'login' | 'signup' | 'forgot') => void
}

export default function ForgotPassword({ onModeChange }: ForgotPasswordProps) {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={(values) => {
        console.log('Reset password for:', values.email);
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Reset Password</h2>
          <p className="text-center text-gray-600">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          
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

          <button type="submit" className="w-full p-3 rounded-lg bg-purple-600 text-white">
            Send Reset Link
          </button>

          <button
            type="button"
            onClick={() => onModeChange('login')}
            className="w-full text-sm text-purple-600"
          >
            Back to Login
          </button>
        </Form>
      )}
    </Formik>
  );
}
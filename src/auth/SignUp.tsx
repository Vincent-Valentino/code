import { useState } from 'react';
import { Formik, Form, Field, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
  birthdate: Yup.date()
    .max(new Date(), 'Cannot be in the future')
    .required('Required'),
  country: Yup.string().required('Required'),
  job: Yup.string().required('Required')
});

const jobOptions = [
  'Software Developer',
  'Designer',
  'Product Manager',
  'Data Scientist',
  'Other'
];

interface SignUpProps {
  onModeChange: (mode: 'login' | 'signup' | 'forgot') => void
}

interface SignUpValues {
  name: string;
  email: string;
  password: string;
  birthdate: string;
  country: string;
  job: string;
}

export default function SignUp({ onModeChange }: SignUpProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const renderStep = (errors: any, touched: any) => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            {(['name', 'email', 'password'] as const).map((field) => (
              <div key={field}>
                <Field
                  name={field}
                  type={field === 'password' ? 'password' : 'text'}
                  className="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                />
                {errors[field] && touched[field] && (
                  <div className="text-red-500 text-sm mt-1">{errors[field]}</div>
                )}
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Field
              name="birthdate"
              type="date"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm"
            />
            <Field
              name="country"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm"
              placeholder="Country"
            />
            {/* Error messages */}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Field
              as="select"
              name="job"
              className="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm"
            >
              <option value="">Select Job Role</option>
              {jobOptions.map(job => (
                <option key={job} value={job}>{job}</option>
              ))}
            </Field>
            {/* Error message */}
          </div>
        );
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        birthdate: '',
        country: '',
        job: ''
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        if (step < totalSteps) {
          setStep(step + 1);
        } else {
          console.log(values);
        }
      }}
    >
      {({ errors, touched }: { 
        errors: FormikErrors<SignUpValues>; 
        touched: FormikTouched<SignUpValues>;
      }) => (
        <Form className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>
          <p className="text-xs text-center text-gray-500">Step {step} of {totalSteps}</p>
          
          {renderStep(errors, touched)}

          <div className="flex gap-2">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="w-full p-2.5 rounded-lg bg-gray-200 dark:bg-neutral-800"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="w-full p-2.5 rounded-lg bg-purple-600 text-white"
            >
              {step === totalSteps ? 'Sign Up' : 'Next'}
            </button>
          </div>

          {step === 1 && (
            <p className="text-center text-sm">
              Already have an account?{' '}
              <button type="button" onClick={() => onModeChange('login')} className="text-purple-600">
                Login
              </button>
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}

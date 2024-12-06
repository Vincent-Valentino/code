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
        console.log(values);
      }}
    >
      {({ errors, touched }: { 
        errors: FormikErrors<SignUpValues>; 
        touched: FormikTouched<SignUpValues>;
      }) => (
        <Form className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Create Account</h2>
          
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

            <div>
              <Field
                name="birthdate"
                type="date"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm"
              />
              {errors.birthdate && touched.birthdate && (
                <div className="text-red-500 text-sm mt-1">{errors.birthdate}</div>
              )}
            </div>

            <div>
              <Field
                name="country"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm"
                placeholder="Country"
              />
              {errors.country && touched.country && (
                <div className="text-red-500 text-sm mt-1">{errors.country}</div>
              )}
            </div>

            <div>
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
              {errors.job && touched.job && (
                <div className="text-red-500 text-sm mt-1">{errors.job}</div>
              )}
            </div>
          </div>

          <button type="submit" className="w-full p-3 rounded-lg bg-purple-600 text-white">
            Sign Up
          </button>

          <p className="text-center text-sm">
            Already have an account?{' '}
            <button type="button" onClick={() => onModeChange('login')} className="text-purple-600">
              Login
            </button>
          </p>
        </Form>
      )}
    </Formik>
  );
}

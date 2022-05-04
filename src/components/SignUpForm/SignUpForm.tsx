import { Formik, Form, FormikHelpers } from 'formik'
import {
  createAuthUserwithEmailAndPassword,
  createUseDocumentFormAuth,
} from '../../utils/firebase/firebase'
import { FirebaseError } from '@firebase/util'
import { FormInput } from 'components/FormInput'
import { Button } from 'components/Button'
import './SignUpForm.scss'
interface Values {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export const SignUpForm = () => {
  const hanldeSubmit = async (
    values: Values,
    actions: FormikHelpers<Values>,
  ) => {
    const { displayName, email, password, confirmPassword } = values

    if (password !== confirmPassword) {
      alert('Password not match')
      return
    }

    try {
      const response = await createAuthUserwithEmailAndPassword(email, password)
      if (response) {
        await createUseDocumentFormAuth(response.user, { displayName })
        actions.resetForm()
      }
    } catch (error) {
      if (
        error instanceof FirebaseError &&
        error.code === 'auth/email-already-in-use'
      ) {
        alert('Cannot create user, email already in use')
      } else {
        console.log('error', error)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account</h2>
      <span>Sign up with your email and password</span>
      <Formik<Values>
        initialValues={{
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values: Values, actions: FormikHelpers<Values>) =>
          hanldeSubmit(values, actions)
        }
      >
        {({ values }) => {
          return (
            <Form>
              <FormInput
                label="Display Name"
                name="displayName"
                value={values.displayName}
              />
              <FormInput label="Email" name="email" value={values.email} />
              <FormInput
                label="Password"
                name="password"
                type="password"
                value={values.password}
              />
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
              />
              <Button type="submit">Sign Up</Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

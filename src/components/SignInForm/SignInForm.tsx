import { Formik, Form, FormikHelpers } from 'formik'
import {
  signInWithGooglePopup,
  signInAuthUserwithEmailAndPassword,
} from '../../utils/firebase/firebase'
import { FirebaseError } from '@firebase/util'
import { FormInput } from 'components/FormInput'
import { Button, ButtonTypes } from 'components/Button'
import { SignInContainer, ButtonsContainer } from  './SignInForm.styles'

interface Values {
  email: string
  password: string
}

export const SignInForm = () => {
  const hanldeSubmit = async (
    values: Values,
    actions: FormikHelpers<Values>,
  ) => {
    const { email, password } = values

    try {
      const response = await signInAuthUserwithEmailAndPassword(email, password)
      if (response) {
        actions.resetForm()
      }
    } catch (error) {
      if (
        error instanceof FirebaseError &&
        error.code === 'auth/wrong-password'
      ) {
        alert('Incorrect password')
      } else if (
        error instanceof FirebaseError &&
        error.code === 'auth/user-not-found'
      ) {
        alert('Not email found')
      } else {
        console.log('error', error)
      }
    }
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
    
  }

  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <Formik<Values>
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values: Values, actions: FormikHelpers<Values>) =>
          hanldeSubmit(values, actions)
        }
      >
        {({ values }) => {
          return (
            <Form>
              <FormInput label="Email" name="email" value={values.email} />
              <FormInput
                label="Password"
                name="password"
                type="password"
                value={values.password}
              />
              <ButtonsContainer>
                <Button type="submit">Sign In</Button>
                <Button
                  type="button"
                  buttonType={ButtonTypes.google}
                  onClick={signInWithGoogle}
                >
                  Google Sign In
                </Button>
              </ButtonsContainer>
            </Form>
          )
        }}
      </Formik>
    </SignInContainer>
  )
}

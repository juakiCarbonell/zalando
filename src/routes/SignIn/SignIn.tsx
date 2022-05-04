import React from 'react'
import {
  signInWithGooglePopup,
  createUseDocumentFormAuth,
} from '../../utils/firebase/firebase'
import { SignUpForm } from 'components/SignUpForm'

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUseDocumentFormAuth(user)
    console.log('userDocRef', userDocRef)
  }

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sing in with google Popup</button>
      <SignUpForm />
    </>
  )
}

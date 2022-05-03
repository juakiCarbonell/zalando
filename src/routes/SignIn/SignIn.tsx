import {
  signInWithGooglePopup,
  createUseDocumentFormAuth,
} from 'utils/firebase/firebase'

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUseDocumentFormAuth(user)
  }
  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sing in with google</button>
    </>
  )
}

import { SignUpForm } from 'components/SignUpForm'
import { SignInForm } from 'components/SignInForm'

import './Authentication.scss'

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

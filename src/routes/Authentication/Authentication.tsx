import { SignUpForm } from 'components/SignUpForm'
import { SignInForm } from 'components/SignInForm'

import { AuthenticationContainer } from './Authentication.styles'

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

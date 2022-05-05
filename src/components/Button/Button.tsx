import { BaseButton, GoogleSignInButton, InvertedButton } from './Button.styles'

export enum ButtonTypes {
  base = 'base',
  google = 'google',
  inverted = 'inverted',
}

type ButtonType =  'base' | 'google' | 'inverted'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  buttonType?: ButtonType
  onClickHandler?: () => void
}

const getButton = (buttonType: string) =>
  ({
    [ButtonTypes.base]: BaseButton,
    [ButtonTypes.google]: GoogleSignInButton,
    [ButtonTypes.inverted]: InvertedButton,
  }[buttonType])

export const Button = ({
  children,
  buttonType = ButtonTypes.base,
  type,
  onClickHandler,
}: Props) => {
  const CustomButton = getButton(buttonType)
  if (!CustomButton) {
    return null
  }
  return (
    <CustomButton type={type} onClick={onClickHandler}>
      {children}
    </CustomButton>
  )
}

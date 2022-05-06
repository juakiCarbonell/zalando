import { BaseButton, GoogleSignInButton, InvertedButton } from './Button.styles'

export enum ButtonTypes {
  base = 'base',
  google = 'google',
  inverted = 'inverted',
}

type Props = {
  buttonType?: ButtonTypes
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const getButton = (buttonType = ButtonTypes.base): typeof BaseButton =>
  ({
    [ButtonTypes.base]: BaseButton,
    [ButtonTypes.google]: GoogleSignInButton,
    [ButtonTypes.inverted]: InvertedButton,
  }[buttonType])

export const Button = ({
  children,
  buttonType = ButtonTypes.base,
  ...otherProps
}: Props) => {
  const CustomButton = getButton(buttonType)
  if (!CustomButton) {
    return null
  }
  return <CustomButton {...otherProps}>{children}</CustomButton>
}

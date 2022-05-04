import './Button.scss'

type ButtonTypes = {
  google: string
  inverted: string
}
type ButtonType = keyof ButtonTypes

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  buttonType?: ButtonType
}

const BUTTON_TYPE_CLASSES: ButtonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

export const Button: React.FC<Props> = ({
  children,
  buttonType,
  type,
}: Props) => {
  return (
    <button
      type={type}
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''
      }`}
    >
      {children}
    </button>
  )
}

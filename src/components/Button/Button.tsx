import './Button.scss'

type ButtonTypes = {
  google: string
  inverted: string
}
type ButtonType = keyof ButtonTypes

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  buttonType?: ButtonType
  onClickHandler?: () => void
}

const BUTTON_TYPE_CLASSES: ButtonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

export const Button = ({
  children,
  buttonType,
  type,
  onClickHandler,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''
      }`}
    >
      {children}
    </button>
  )
}

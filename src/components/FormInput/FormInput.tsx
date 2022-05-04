import { Field } from 'formik'
import './FormInput.scss'

interface Props {
  label: string
  name: string
  value: string
  type?: string
}

export const FormInput = ({ label, name, value, type = "text" }: Props) => {
  return (
    <div className="group">
      <Field className="form-input" id={name} name={name} required type={type} />
      {label && (
        <label
          className={`${value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
    </div>
  )
}

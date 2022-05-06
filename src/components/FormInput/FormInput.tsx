import { FormInputLabel, Input, Group } from './FormInput.styles'

interface Props {
  label: string
  name: string
  value: string
  type?: string
}

export const FormInput = ({ label, name, value, type = 'text' }: Props) => {
  return (
    <Group>
      <Input
        className="form-input"
        id={name}
        name={name}
        required
        type={type}
      />
      {label && (
        <FormInputLabel shrink={value.length > 0} htmlFor={name}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

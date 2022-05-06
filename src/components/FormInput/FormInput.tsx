import { FormInputLabel, Input, Group } from './FormInput.styles'

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const FormInput = ({ label, ...inputProps }: Props) => {
  return (
    <Group>
      <Input {...inputProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            inputProps.value &&
              typeof inputProps.value === 'string' &&
              inputProps.value.length,
          )}
          htmlFor={label}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

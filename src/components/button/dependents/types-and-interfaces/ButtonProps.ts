// Library Imports
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type ButtonColorVariant =
  | 'primary'
  | 'primary-outline'
  | 'warning'
  | 'info'
  | 'neutral'
  | 'neutral-outline'
  | 'success'
  | 'error'
  | 'google'
  | 'facebook'
  | 'apple'

export interface ButtonProps {
  text?: string
  variant: ButtonColorVariant
  icon?: IconProp
  customIcon?: React.ReactNode
  leftIcon?: boolean
  rightIcon?: boolean
  loading?: boolean
  disabled?: boolean
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  url?: string
  buttonId?: string | undefined
  additionalClassNames?: string | undefined
  buttonSize?: 'small' | 'medium' | 'large'
}

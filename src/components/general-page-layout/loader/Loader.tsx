// Interfaces and Types
import LoaderProps from './dependents/types-and-interfaces/LoaderProps'
// CSS
import './dependents/css/loader.scss'

export const Loader: React.FC<LoaderProps> = ({ variant }) => {
  return (
    <div className={`container loader-${variant}`} id="loaderElement" data-testid="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

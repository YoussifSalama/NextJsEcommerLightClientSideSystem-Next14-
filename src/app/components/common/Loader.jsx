import { LoaderCircleIcon } from "lucide-react"

const Loader = ({pClassName,cClassName}) => {
  return (
    <div className={pClassName}>
      <LoaderCircleIcon className={cClassName}/>
    </div>
  )
}

export default Loader

const Button = ({title, className="",onClick}) => {
  return (
    <button
    onClick={onClick}
    className={`bg-white border rounded-full p-2 px-6 capitalize  text-center font-semibold ${className}`}>
      {title}
    </button>
  )
}

export default Button

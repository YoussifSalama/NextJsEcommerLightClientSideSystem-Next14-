const SectionHead = ({title,className}) => {
  return (
    <h2 className={`font-extrabold text-center w-full text-[2rem] uppercase
    ${className}
    `}>
      {title}
    </h2>
  )
}

export default SectionHead

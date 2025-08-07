const LandingPageButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white bg-black rounded-full hover:bg-[#EBD1AE] ${className}`}
    >
      {children}
    </button>
  )
}

export default LandingPageButton;
const ServicesCard = ({ icon, title, isBlackBackground}) => {
  return (
    <div className="flex flex-col items-center  p-4  rounded-lg  hover:shadow-lg transition-shadow duration-300">
        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full">
            <img src={icon} alt={title} className="w-8 h-8" />
        </div>
        <h3 className={`text-lg font-bold ${isBlackBackground ? "text-white" : "text-black"}`}>{title}</h3>
    </div>
  );
};

export default ServicesCard;

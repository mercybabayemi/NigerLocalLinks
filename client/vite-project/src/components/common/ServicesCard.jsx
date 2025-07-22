const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="">
        <div className="">
            <img src={icon} alt={title} className="" />
        </div>
        <h3 className="">{title}</h3>
    </div>
  );
};

export default ServicesCard;

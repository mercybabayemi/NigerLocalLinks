import ServicesCard from "../common/ServicesCard";

const ServicesSection = () => {
  const services = [
    {
      icon: "/path/to/Menu.png",
      title: "Register Businesses",
    },
    {
      icon: "/path/to/Activity.png",
      title: "Register Projects"
    },
    {
      icon: "/path/to/Tool.png",
      title: "Handle Registered Businesses Complaints"
    },
    {
      icon: "/path/to/Monitor.png",
      title: "Records of Businesses and Projects"
    },
    {
      icon: "/path/to/Sliders.png",
      title: "Verify Uploaded Payment Receipts"
    }
  ];

  return (
    <section className="">
        <h1 className="">Our Services</h1>
        <div className="">
            {services.map((service, index) => (
                <ServicesCard 
                    key={index} 
                    icon={service.icon} 
                    title={service.title}
                />
            ))}
        </div>
    </section>
  );
}

export default ServicesSection;
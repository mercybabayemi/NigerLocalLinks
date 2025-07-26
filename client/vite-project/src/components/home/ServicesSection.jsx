import ServicesCard from "../common/ServicesCard";
import Menu from "../../assets/Menu.png";
import Activity from "../../assets/Activity.png";
import Tool from "../../assets/Tool.png";
import Monitor from "../../assets/Monitor.png";
import Sliders from "../../assets/Sliders (1).png";

const ServicesSection = () => {
  const services = [
    {
      icon: Menu ,
      title: "Register Businesses",
    },
    {
      icon: Activity,
      title: "Register Projects"
    },
    {
      icon: Tool,
      title: "Handle Registered Businesses Complaints"
    },
    {
      icon: Monitor,
      title: "Records of Businesses and Projects"
    },
    {
      icon: Sliders,
      title: "Verify Uploaded Payment Receipts"
    }
  ];

  return (
    <section className="bg-[#F2F0EF] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-[#EBD1AE] mb-8">Our Services</h1>
          <div className="flex flex-wrap justify-center -mx-4 gap-5">
              {services.map((service, index) => (
                  <div className= {`w-full md:w-1/3 xl:w-1/4 px-4 mb-8 ${ index % 2 === 0 ? "bg-white" : "bg-black"}`} key={index}>
                    <ServicesCard 
                      icon={service.icon} 
                      title={service.title}
                      isBlackBackground={index % 2 !== 0}
                  />
                  </div>
              ))}
          </div>
        </div>
    </section>
  );
}

export default ServicesSection;
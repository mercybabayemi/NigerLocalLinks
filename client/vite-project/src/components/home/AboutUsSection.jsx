const AboutUsSection = () => {
  return (
    <section className="bg-[#F2F0EF] flex flex-col justify-center items-center p-12">
        <div className="items-center text-center mb-8">
          <h2 className="text-2xl font-bold font-inter text-[#E2725B]">ABOUT US</h2>
          <p className="mt-2 text-lg font-inter text-black p-7">The platform is designed to improve how businesses and citizens interact with their local government.</p>
        </div>
        <div className="items-center text-center mb-8">
            <h2 className="text-2xl font-bold font-inter text-[#02542D]">OUR MISSION</h2>
            <p className="mt-2 text-lg font-inter text-black p-7">To bridge communication gap, streamline public services and empower communities through technology</p>
        </div>
    </section>
  );
};

export default AboutUsSection;

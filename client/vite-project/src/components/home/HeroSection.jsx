import heropic from '../../assets/heropic.jpg'

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0EF] w-full flex flex-col items-center p-12 mx-auto md:flex-row">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold font-inter text-center text-black md:text-5xl">
          Digital Documentation for Nigerian LGAs
        </h1>
        <p className="mt-4 text-lg text-center font-inter text-black">
          Streamline paperwork with our secure platform
        </p>
      </div>
      <div className="mt-8 md:w-1/2 md:mt-0 flex justify-center">
        <img
          src={heropic}
          alt="Hero"
          className="w-full h-301 w-470.71 rounded-lg shadow-xl my-auto"
        />
      </div>
    </section>
  )
}

export default HeroSection;

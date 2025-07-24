import heropic from '../../assets/heropic.jpg'

const HeroSection = () => {
  return (
    <section className="container flex flex-col items-center px-4 mx-auto md:flex-row">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-center text-gray-900 md:text-5xl">
          Digital Documentation for Nigerian LGAs
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          'Streamline paperwork with our secure platform'
        </p>
      </div>
      <div className="mt-8 md:w-1/2 md:mt-0">
        <img
          src={heropic}
          alt="Hero"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    </section>
  )
}

export default HeroSection;

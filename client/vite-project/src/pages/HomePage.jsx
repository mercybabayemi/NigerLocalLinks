import HeroSection from '../components/home/HeroSection.jsx';
import AboutSection from '../components/home/AboutUsSection.jsx';
import ServicesSection from '../components/home/ServicesSection.jsx';
// import { useGetHomePageDataQuery } from '../store/slices/HomePageApiSlice.jsx';

const HomePage = () => {
  // const { data, error, isLoading } = useGetHomePageDataQuery();

  //if (isLoading) return <div>Loading...</div>;
  //if (error) return <div>Error loading home page data</div>;
    // console.log(data); 


  return (
    <div >
        <HeroSection />
        <div id='about'>
          <AboutSection />
        </div>
        <div id='services'>
          <ServicesSection />
        </div>
    </div>
  );
};

export default HomePage;

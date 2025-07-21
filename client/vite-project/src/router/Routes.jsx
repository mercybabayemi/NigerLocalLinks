import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Homepage";
import AboutUsSection from "../components/home/AboutUsSection";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    ],
  },
  {
    path: "/login",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      }
    ],
  },
  {
    path: "/register",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      }
    ],
  },
  {
    path: "/about",
    element: <AboutUsSection />,
  },
  {
    path: "/home",
    element: <HeroSection />,
  },
  {
    path: "/services",
    element: <ServicesSection />,
  },
]);

export default router;


//  <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Layout />}>
//             <Route index element={<HomePage />} />
//             <Route path='/home' element={<HeroSection />} />
//             <Route path='/about' element={<AboutUs />} />
//             <Route path='/services' element={<Services />} />
//             <Route path='/login' element={<LoginPage />} />
//             <Route path='/register' element={<RegisterPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
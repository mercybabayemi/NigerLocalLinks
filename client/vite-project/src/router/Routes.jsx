import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage.jsx'
import Layout from "../components/layout/Layout.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      }
      // {
      //   path: 'about',
      //   element: <AboutPage />,
      // },
      // {
      //   path: 'services',
      //   element: <ServicesPage />,
      // },
    ],
  },
]);

export default router;

//     ],
//   },
//   {
//     path: "/login",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <LoginPage />,
//       }
//     ],
//   },
//   {
//     path: "/register",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <RegisterPage />,
//       }
//     ],
//   },
//   {
//     path: "/about",
//     element: <AboutUsSection />,
//   },
//   {
//     path: "/home",
//     element: <HeroSection />,
//   },
//   {
//     path: "/services",
//     element: <ServicesSection />,
//   },
// ]);

// export default router;


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
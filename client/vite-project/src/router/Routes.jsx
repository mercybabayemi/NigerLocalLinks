import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage.jsx'
import Layout from "../components/layout/Layout.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import AdminLandingPage from "../pages/AdminLandingPage.jsx";
import LocalLandingPage from "../pages/LocalLandingPage.jsx";
import OfficerLandingPage from "../pages/OfficerLandingPage.jsx";
import CreateRecord from "../pages/CreateRecord.jsx";
import FindLocal from "../pages/FindLocal.jsx";
import RegisterLocal from "../pages/RegisterLocal.jsx";
import CreateDispute from "../pages/CreateDispute.jsx";
import SettleDispute from "../pages/SettleDispute.jsx";
import SeePaymentOutstanding from "../pages/SeePaymentOutstanding.jsx";
import UploadProofOfPayment from "../pages/UploadProofOfPayment.jsx";


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
    ],
  },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <AdminLandingPage />, 
      },
      { 
        path: 'createrecord', 
        element: <CreateRecord /> 
      },
      { 
        path: 'findlocal', 
        element: <FindLocal /> 
      },
      { 
        path: 'settledispute', 
        element: <SettleDispute /> 
      },
      { 
        path: 'registerlocal', 
        element: <RegisterLocal /> 
      },
    ],
  },
  {
    path: "/local",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <LocalLandingPage />, 
      },
      { 
        path: 'seepaymentoutstanding', 
        element: <SeePaymentOutstanding /> 
      },
      { 
        path: 'createdispute', 
        element: <CreateDispute /> 
      },
      { 
        path: 'uploadproofofpayment', 
        element: <UploadProofOfPayment /> 
      },
    ],
  },
  {
    path: "/officer",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <OfficerLandingPage />, 
      },
      { 
        path: 'createRecord', 
        element: <CreateRecord /> 
      },
      { 
        path: 'findlocal', 
        element: <FindLocal /> 
      },
      { 
        path: 'registerlocal', 
        element: <RegisterLocal /> 
      },
    ],
  }
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
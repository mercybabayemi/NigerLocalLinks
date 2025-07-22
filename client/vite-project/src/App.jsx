import { RouterProvider } from "react-router-dom";
import router from './router/Routes.jsx';


function App() {

  return <RouterProvider router={router} /> 

  // return (
  //  <div className="min-h-screen bg-[#f2f0ef]">
  //     <h1 className="text-3xl font-bold text-center py-8 text-black-600">
  //       NigerLocalLink - Base Setup Working
  //     </h1>
  //   </div>
  // )
}

export default App

{/* <RouterProvider router={router} ></RouterProvider> */}

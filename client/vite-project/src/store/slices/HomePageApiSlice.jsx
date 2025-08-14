// import { apiSlice } from './ApiSlice'; // your shared base apiSlice



// export const HomePageApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getHomePageData: builder.query({
//       query: () => ({
//         url: '/homepage.json', // file in /public folder
//         baseUrl: '' // stops API base URL from being prepended
//       }),
//     }),
//   }),
//   overrideExisting: false,
// });



// // export const HomePageApiSlice = apiSlice.injectEndpoints({
// //   endpoints: (builder) => ({
// //     getHomePageData: builder.query({
// //       query: () => '/homepage', // backend relative path
// //     }),
// //   }),
// //   overrideExisting: false, // optional
// // });

// export const { useGetHomePageDataQuery } = HomePageApiSlice;

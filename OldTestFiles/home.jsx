import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {render} from 'react-dom';

const Home = () => {
  return (
    <div>
      {/* Navbar */}


      {/* Jumbotron */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome to MyMediaList!</h1>
          <p className="lead">Keep track of all the movies, TV shows, books, and video games you've watched, read, or played.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Create Your Media List</h2>
            <p>Add all the movies, TV shows, books, and video games you've watched, read, or played to your Media List.</p>
            <p><a className="btn btn-secondary" href="#" role="button">Learn More</a></p>
          </div>
          <div className="col-md-4">
            <h2>Compare Your Media List</h2>
            <p>Compare your Media List with a friend or celebrity and see what media you have in common.</p>
            <p><a className="btn btn-secondary" href="#" role="button">Learn More</a></p>
          </div>
          <div className="col-md-4">
            <h2>Discover New Media</h2>
            <p>Browse recommendations and discover new movies, TV shows, books, and video games to add to your Media List.</p>
            <p><a className="btn btn-secondary" href="#" role="button">Learn More</a></p>
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">&copy; 2021 MyMediaList</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Create Your Media List</a></li>
              <li><a className="text-muted" href="#">Compare Your Media List</a></li>
              <li><a className="text-muted" href="#">Discover New Media</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Support</a></li>
              <li><a className="text-muted" href="#">Privacy Policy</a></li>
              <li><a className="text-muted" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Team</a></li>
              <li><a className="text-muted" href="#">Locations</a></li>
              <li><a className="text-muted" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

render(<Home />, document.getElementById('app'));


export default Home;


// import React from 'react';


// const App = () => {
//   return (
//     <div className="bg-gray-100 h-screen flex flex-col justify-between">
//       {/* Navbar */}
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold leading-7 text-gray-900">
//             MyMediaList
//           </h1>
//           <nav className="hidden sm:flex">
//             <a
//               href="#"
//               className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//             >
//               My List
//             </a>
//             <div className="relative inline-block">
//               <a
//                 href="#"
//                 className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//               >
//                 Compare
//               </a>
//               <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg mt-1">
//               <a
//                   href="#"
//                   className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
//                 >
//                   Compare with a Friend
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
//                 >
//                   Compare with a Celebrity
//                 </a>
//               </div>
//             </div>
//           </nav>
//           <div className="flex items-center">
//             <a
//               href="#"
//               className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//             >
//               Sign Up
//             </a>
//             <a
//               href="#"
//               className="ml-4 px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//             >
//               Log In
//             </a>
//           </div>
//           </div>
//       </header>

//       {/* Jumbotron */}
//       <div className="container mx-auto px-6 py-12 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/jumbotron.jpg)" }}>
//         <div className="max-w-lg mx-auto text-center">
//           <h2 className="text-4xl font-bold leading-tight text-white mb-4">
//             Welcome to MyMediaList!
//           </h2>
//           <p className="text-xl font-medium text-gray-200 mb-8">
//             Keep track of all the movies, TV shows, books, and video games you've watched, read, or played.
//           </p>
//           <a
//             href="#"
//             className="px-8 py-3 font-medium rounded-full text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
//           >
//             Sign Up
//           </a>
//         </div>
//       </div>

//       {/* Features */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="max-w-lg mx-auto">
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
//               <div className="rounded-lg bg-white shadow-lg p-8">
//                 <h2 className="text-2xl font-bold leading-tight mb-4">
//                   Create Your Media List
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   Add all the movies, TV shows, books, and video games you've watched, read, or played to your Media List.
//                 </p>
//                 <a
//                   href="#"
//                   className="text-purple-600 font-medium underline"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
//               <div className="rounded-lg bg-white shadow-lg p-8">
//                 <h2 className="text-2xl font-bold leading-tight mb-4">
//                   Compare Your Media List
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   Compare your Media List with another user's Media List to see what you have in common.
//                 </p>
//                 <a
//                   href="#"
//                   className="text-purple-600 font-medium underline"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
//               <div className="rounded-lg bg-white shadow-lg p-8">
//                 <h2 className="text-2xl font-bold leading-tight mb-4">
//                   Discover New Media
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   Find new movies, TV shows, books, and video games to add to your Media List.
//                 </p>
//                 <a
//                   href="#"
//                   className="text-purple-600 font-medium underline"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // render the Home component to the DOM

// render(<App />, document.getElementById("app"));

// export default Home;






// const Homepage = () => (
//   <div className="container" style={{width: "100%"}}>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">MyMediaList</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Profile</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Compare</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Logout</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     <div className="jumbotron mt-5">
//       <h1 className="display-4">Welcome to MyMediaList!</h1>
//       <p className="lead">Keep track of all the media you've watched, read, and played. Compare your list with your friends and discover new content to enjoy!</p>
//       <hr className="my-4" />
//       <p>Sign up or login to get started.</p>
//       <a className="btn btn-primary btn-lg" href="#" role="button">Sign up</a>
//       <a className="btn btn-secondary btn-lg" href="#" role="button">Login</a>
//     </div>
//     <div className="row mt-5">
//       <div className="col-sm-4">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Track your media</h5>
//             <p className="card-text">Add all the movies, TV shows, books, and video games you've watched, read, and played to your media list.</p>
//             <a href="#" className="btn btn-primary">Learn more</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-4">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Compare with friends</h5>
//             <p className="card-text">See what media you have in common with your friends and discover new content to enjoy together.</p>
//             <a href="#" className="btn btn-primary">Learn more</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-4">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="card-title">Discover new media</h5>
//             <p className="card-text">Use our recommendation engine to find new movies, TV shows, books, and video games based on your interests and past media consumption.</p>
//             <a href="#" className="btn btn-primary">Learn more</a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <footer className="bg-light py-3 mt-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-4">
//             <h5>Contact</h5>
//             <ul className="list-unstyled">
//               <li>Email: info@mymedialist.com</li>
//               <li>Phone: (123) 456-7890</li>
//             </ul>
//           </div>
//           <div className="col-sm-4">
//             <h5>About</h5>
//             <ul className="list-unstyled">
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">Privacy Policy</a></li>
//             </ul>
//           </div>
//           <div className="col-sm-4">
//             <h5>Follow Us</h5>
//             <ul className="list-unstyled d-flex justify-content-between">
//               <li><a href="#"><i className="fab fa-facebook fa-lg" /></a></li>
//               <li><a href="#"><i className="fab fa-twitter fa-lg" /></a></li>
//               <li><a href="#"><i className="fab fa-instagram fa-lg" /></a></li>
//             </ul>
//           </div>
//           </div>
//         </div>
//       </footer>
//     </div>
// );

// render(<Homepage />, document.getElementById('app'));

// export default Homepage;




// const App = () => {
//   return (
//     <div className="bg-gray-100 h-screen flex flex-col justify-between">
//       {/* Navbar */}
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold leading-7 text-gray-900">
//             MyMediaList
//           </h1>
//           <nav className="hidden sm:flex">
//             <a
//               href="#"
//               className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//             >
//               My List
//             </a>
//             <div className="relative inline-block">
//               <a
//                 href="#"
//                 className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//               >
//                 Compare
//               </a>
//               <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg mt-1">
//               <a
//                   href="#"
//                   className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
//                 >
//                   Compare with a Friend
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
//                 >
//                   Compare with a Celebrity
//                 </a>
//               </div>
//             </div>
//           </nav>
//           <div className="flex items-center">
//             <a
//               href="#"
//               className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//             >
//               Sign Up
//             </a>
//             <a
//               href="#"
//               className="ml-4 px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
//             >
//               Log In
//             </a>
//           </div>
//           </div>
//       </header>

//       {/* Jumbotron */}
//       <div className="container mx-auto px-6 py-12 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/jumbotron.jpg)" }}>
//         <div className="max-w-lg mx-auto text-center">
//           <h2 className="text-4xl font-bold leading-tight text-white mb-4">
//             Welcome to MyMediaList!
//           </h2>
//           <p className="text-xl font-medium text-gray-200 mb-8">
//             Keep track of all the movies, TV shows, books, and video games you've watched, read, or played.
//           </p>
//           <a
//             href="#"
//             className="px-8 py-3 font-medium rounded-full text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
//           >
//             Sign Up
//           </a>
//         </div>
//       </div>

//       {/* Features */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="max-w-lg mx-auto">
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
//               <div className="rounded-lg bg-white shadow-lg p-8">
//                 <h2 className="text-2xl font-bold leading-tight mb-4">
//                   Create Your Media List
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   Add all the movies, TV shows, books, and video games you've watched, read, or played to your Media List.
//                 </p>
//                 <a
//                   href="#"
//                   className="text-purple-600 font-medium underline"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
//               <div className="rounded-lg bg-white shadow-lg p-8">
//                 <h2 className="text-2xl font-bold leading-tight mb-4">
//                   Compare Your Media List
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   Compare your Media List with another user's Media List to see what you have in common.
//                 </p>
//                 <a
//                   href="#"
//                   className="text-purple-600 font-medium underline"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
//               <div className="rounded-lg bg-white shadow-lg p-8">
//                 <h2 className="text-2xl font-bold leading-tight mb-4">
//                   Discover New Media
//                 </h2>
//                 <p className="text-gray-700 mb-4">
//                   Find new movies, TV shows, books, and video games to add to your Media List.
//                 </p>
//                 <a
//                   href="#"
//                   className="text-purple-600 font-medium underline"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white shadow-md">
//         <div className="container mx-auto px-6 py-8 flex flex-wrap items-center">
//           <div className="w-full md:w-1/4 text-center md:text-left">
//             <p className="text-gray-600 text-base font-medium">
//               &copy; 2021 MyMediaList
//             </p>
//           </div>
//           <div className="w-full md:w-1/4 text-center md:text-left">
//             <h3 className="text-gray-600 text-xl font-bold">Features</h3>
//             <ul className="mt-4 text-gray-600 text-sm font-medium">
//               <li className="mb-2">
//                 <a href="#" className="hover:text-purple-600">
//                   Create Your Media List
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-purple-600">
//                   Compare Your Media List
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-purple-600">
//                   Discover New Media
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 text-center md:text-left">
//             <h3 className="text-gray-600 text-xl font-bold">About</h3>
//             <ul className="mt-4 text-gray-600 text-sm font-medium">
//               <li className="mb-2">
//                 <a href="#" className="hover:text-purple-600">
//                   Team
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-purple-600">
//                   Locations
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-purple-600">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 text-center md:text-left">
//             <h3 className="text-gray-600 text-xl font-bold">Legal</h3>
//             <ul className="mt-4 text-gray-600 text-sm font-medium">
//               <li className="mb-2">
//                 <a href="#" className="hover:text-purple-600">
//                   Terms of Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// // render the Home component to the DOM

// render(<App />, document.getElementById("app"));

// export default Home;





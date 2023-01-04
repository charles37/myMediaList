import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold leading-7 text-gray-900">
            MyMediaList
          </h1>
          <nav className="hidden sm:flex">
            <a
              href="#"
              className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              My List
            </a>
            <div className="relative inline-block">
              <a
                href="#"
                className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                Compare
              </a>
              <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg mt-1">
              <a
                  href="#"
                  className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                >
                  Compare with a Friend
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                >
                  Compare with a Celebrity
                </a>
              </div>
            </div>
          </nav>
          <div className="flex items-center">
            <a
              href="#"
              className="px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="ml-4 px-3 py-2 font-medium text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              Log In
            </a>
          </div>
          </div>
      </header>

      {/* Jumbotron */}
      <div className="container mx-auto px-6 py-12 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/jumbotron.jpg)" }}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold leading-tight text-white mb-4">
            Welcome to MyMediaList!
          </h2>
          <p className="text-xl font-medium text-gray-200 mb-8">
            Keep track of all the movies, TV shows, books, and video games you've watched, read, or played.
          </p>
          <a
            href="#"
            className="px-8 py-3 font-medium rounded-full text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="rounded-lg bg-white shadow-lg p-8">
                <h2 className="text-2xl font-bold leading-tight mb-4">
                  Create Your Media List
                </h2>
                <p className="text-gray-700 mb-4">
                  Add all the movies, TV shows, books, and video games you've watched, read, or played to your Media List.
                </p>
                <a
                  href="#"
                  className="text-purple-600 font-medium underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="rounded-lg bg-white shadow-lg p-8">
                <h2 className="text-2xl font-bold leading-tight mb-4">
                  Compare Your Media List
                </h2>
                <p className="text-gray-700 mb-4">
                  Compare your Media List with another user's Media List to see what you have in common.
                </p>
                <a
                  href="#"
                  className="text-purple-600 font-medium underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
              <div className="rounded-lg bg-white shadow-lg p-8">
                <h2 className="text-2xl font-bold leading-tight mb-4">
                  Discover New Media
                </h2>
                <p className="text-gray-700 mb-4">
                  Find new movies, TV shows, books, and video games to add to your Media List.
                </p>
                <a
                  href="#"
                  className="text-purple-600 font-medium underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-8 flex flex-wrap items-center">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <p className="text-gray-600 text-base font-medium">
              &copy; 2021 MyMediaList
            </p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-gray-600 text-xl font-bold">Features</h3>
            <ul className="mt-4 text-gray-600 text-sm font-medium">
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Create Your Media List
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Compare Your Media List
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Discover New Media
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-gray-600 text-xl font-bold">About</h3>
            <ul className="mt-4 text-gray-600 text-sm font-medium">
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Locations
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-gray-600 text-xl font-bold">Legal</h3>
            <ul className="mt-4 text-gray-600 text-sm font-medium">
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

// render the Home component to the DOM

ReactDOM.render(<App />, document.getElementById("app"));

export default Home;





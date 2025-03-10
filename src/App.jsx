// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from "./HomePage";
// import SongsPage from  './SongsPage';
// import AboutPage from './AboutPage';
// import NavBar from './NavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // App.jsx imports.  Route configurations for react router. 


// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/songs" element={<SongsPage />} />
//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import SimpleComponent from './SimpleComponent';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <SimpleComponent />
    </div>
  );
}

export default App;

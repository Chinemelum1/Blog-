// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import PostDetails, { BlogContext } from "./Components/BlogContext";
// import BlogList from "./Components/BlogList";
// import PostDetail from "./Components/PostDetail";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <BlogContext />
//       <PostDetail />
//       <BlogList />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import { BlogProvider } from "./Components/BlogContext";
import BlogForm from "./Components/BlogForm";
import BlogList from "./Components/BlogList";

const App = () => {
  return (
    <BlogProvider>
      <div>
        <h1>Simple Blog Platform</h1>
        <BlogForm />
        <BlogList />
      </div>
    </BlogProvider>
  );
};

export default App;

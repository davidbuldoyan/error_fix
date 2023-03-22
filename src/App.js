import './App.css';
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
// import React from 'react';
// function MyButton() {
//   return (
//     <button className="button">I'm a button</button>
//   );
// }
// export default function MyApp() {
//   return (
//     <div>
//       <h1 className="header">Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const profile = {
//   firstName: 'Марья',
//   lastName: 'Моревна'
// };

// export default function MyFunction() {
//   return(
//     <>  
//       <h1>Hello {formatName(profile)}</h1>
//     </>
//   );
// }

import React from 'react';

function MyButton() {
  function handleClick(){
    alert('You clicked me');
  }
  return(
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default function Button() {
  return <MyButton />;
}

// const products = [
//   { title: 'David', isBoy: true, id: 1 },
//   { title: 'Anna', isBoy: false, id: 2 },
//   { title: 'Ashot', isBoy: true, id: 3 },
//   { title: 'Karine', isBoy: false, id: 4 },
//   { title: 'Narek', isBoy: true, id: 5 },
// ];

// export default function MyList() {
//   const listItems = products.map(product => 
//     <li 
//       key={product.id}
//       style={{
//         color: product.isBoy ? 'lightblue': 'pink'
//       }}
//     >
//       {product.title}
//     </li>
//   );
//   return(
//     <ul>{listItems}</ul>
//   );
// }

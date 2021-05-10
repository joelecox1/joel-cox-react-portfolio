import React from "react";

function Nav(props) {
  const pages = ['About', 'Portfolio', 'Resume', 'Contact'];

  return (
    <header>
      <h1>
        <a href="/">Joel Cox</a>
      </h1>
      <nav>
        <ul>
          {pages.map(page => (
            <li key={page}>
              <a href={`# ${page.toLowerCase()}`}
                onClick={() => props.handlePageChange(page)}
              >
                <h2>{page}</h2>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

// const {
//   pages = ['About', 'Portfolio', 'Resume', 'Contact'], 
//   setCurrentPage,
//   currentPage,
// } = props;

// return (
//   <header>
//     <h1>
//       <a href="/">Joel Cox</a>
//     </h1>
//     <nav>
//       <ul>
//         {pages.map(Page => (
//           <li key={Page.name}
//           className={`${currentPage.name === Page.name && 'nav-active'}`}
//           >
//             <a href={`# ${Page.toLowerCase()}`} className='current'
//               onClick={() => setCurrentPage(Page)}
//             >
//               <h2>{Page}</h2>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   </header>
// );
// }

export default Nav;

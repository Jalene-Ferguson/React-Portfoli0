import { Link } from 'react-router-dom';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation({ currentPage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>Page</Link>
          </li>
          
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
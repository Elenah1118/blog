import { Link, useLocation } from "react-router-dom";
import routes from "../routes/routes";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumbs">
      <Link to="/" className="breadcrumbs-home">
        <img src="/favicon.svg" alt="Inicio" className="breadcrumbs-icon" />
        <span>Inicio</span>
      </Link>
      {paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        const route = routes.find((r) => r.path === url);
        const name = route ? route.name : path.charAt(0).toUpperCase() + path.slice(1);
        const isLast = index === paths.length - 1;

        return route ? (
          <span key={url} className="breadcrumbs-separator">
            <span className="separator">›</span>
            {isLast ? (
              <span className="breadcrumbs-current">{name}</span>
            ) : (
              <Link to={url}>{name}</Link>
            )}
          </span>
        ) : null;
      })}
    </nav>
  );
};

export default Breadcrumbs;

import { Link, useLocation } from "react-router-dom";
import routes from "../routes/routes"; // Asegura la correcta importación de las rutas
import "./Breadcrumbs.css"; // Importa los estilos de Breadcrumbs

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumbs"> {/* Se aplica la clase "breadcrumbs" */}
      <Link to="/">Inicio</Link>
      {paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        const route = routes.find((r) => r.path === url);
        const name = route ? route.name : path.charAt(0).toUpperCase() + path.slice(1);
        const isLast = index === paths.length - 1;

        return route ? (
          <span key={url}>
            {" > "}
            {isLast ? (
              <span>{name}</span>
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

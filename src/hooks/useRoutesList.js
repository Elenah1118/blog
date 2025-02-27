import routes from "../routes/routes";

const useRoutesList = () => {
  return routes.map((route) => route.path);
};

export default useRoutesList;

import Router from "next/router";

import { useSelector } from "react-redux";


function PrivateRoute({ children }) {
  const { data } = useSelector((store) => store.user);

  if (!data.username) {
    return Router.push("/signin");
  }

  return children;
}

export default PrivateRoute;

import React from "react";
import { Route } from 'react-router-dom';

import About from "./pages/about";
import Home from "./pages/home";
import Secured from "./pages/secured";

const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/about', name: 'About', Component: About},
  {path: '/secured', name: 'Secured', Component: Secured}
]

const App: React.FC = () => {
  return (
    <div>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          <Component />
        </Route>
      ))}
    </div>
  )
}

export default App;
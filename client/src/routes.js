import App from "./App";
import Error from "./views/error";
import Home from "./views/home";
import Authentication from "./features/user/auth";
import Dashboard from "./views/dashboard";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
      //   {
      //     path: "/premier-league",
      //     element: <PremierLeague />,
      //   },
      //   {
      //     path: "/fantasy",
      //     element: <Fantasy />,
      //   },
      {
        path: "/users/:id/dashboard",
        element: <Dashboard />,
      },
      //   {
      //     path: "/leagues/new",
      //     element: <LeagueForm />,
      //   },
      //   {
      //     path: "/leagues/:id/edit",
      //     element: <LeagueForm />,
      //   },
      //   {
      //     path: "/leagues/:id/teams/new",
      //     element: <TeamForm />,
      //   },
      //   {
      //     path: "/teams/:id/edit",
      //     element: <TeamView />,
      //   },
    ],
  },
];

export default routes;

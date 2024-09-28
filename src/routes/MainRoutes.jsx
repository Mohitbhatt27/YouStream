import App from "../App";
import NowPlaying from "../components/NowPlaying";
import BodyContainer from "../components/BodyContainer";

export const MainRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyContainer />,
      },
      {
        path: "/watch",
        element: <NowPlaying />,
      },
    ],
  },
];

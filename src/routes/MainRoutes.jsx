import App from "../App";
import NowPlaying from "../components/NowPlaying";
import BodyContainer from "../components/BodyContainer";
import ResultsContainer from "../components/ResultsContainer";

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
      {
        path: "/results",
        element: <ResultsContainer />,
      },
    ],
  },
];

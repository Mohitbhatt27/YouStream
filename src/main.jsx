import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./redux/appStore.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes.jsx";

const router = createBrowserRouter(MainRoutes);

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);

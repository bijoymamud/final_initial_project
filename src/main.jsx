import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/routes.jsx";
import { RouterProvider } from "react-router";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import LoadingScreen from "./LoadingPages/LoadingScreen";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  </Provider>
);

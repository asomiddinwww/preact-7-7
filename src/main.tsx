import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ProviderConf from "./router/provider-conf";
import { Provider } from "react-redux";
import { store } from "./redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConf>
      <GoogleOAuthProvider clientId="577638283566-18qcr29sl5ckh1a8fh921hhlah4eoj5g.apps.googleusercontent.com">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </GoogleOAuthProvider>
    </ProviderConf>
  </StrictMode>,
);

import * as React from "react";
import { ErrorBoundary } from "./ErrorBoundary";

// @ts-ignore
const RemoteButton = React.lazy(() => import("house/Button"));

const App = () => (
  <div>
    <h2>application</h2>
    <ErrorBoundary>
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default App;

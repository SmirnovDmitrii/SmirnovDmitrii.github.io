import * as React from "react";
import { ErrorBoundary } from "./ErrorBoundary";

// @ts-ignore
const House = React.lazy(() => import("house/App"));

const App = () => (
  <div>
    <h2>application</h2>
    <ErrorBoundary>
      <React.Suspense fallback="Loading Button">
        <House />
      </React.Suspense>
    </ErrorBoundary>
  </div>
);

export default App;

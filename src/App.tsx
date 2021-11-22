import * as React from "react";
import { ErrorBoundary } from "./ErrorBoundary";

// @ts-ignore
const House = React.lazy(() => import("house/App"));

const App = () => (
  <>
    <h2>application</h2>
    <ErrorBoundary>
      <React.Suspense fallback="Loading House application">
        <House />
      </React.Suspense>
    </ErrorBoundary>
  </>
);

export default App;

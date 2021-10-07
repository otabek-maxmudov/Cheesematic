import React, { Suspense } from "react";

const MainPage = React.lazy(() => import("./Pages/MainPage"));

const App = () => (
  <Suspense fallback={<div className={"h-screen"}></div>}>
    <MainPage />
  </Suspense>
);

export default App;

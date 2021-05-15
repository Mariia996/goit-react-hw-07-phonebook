import React, { lazy, Suspense } from 'react';

import Loading from './shared/components/Loading';
const AppPhonebook = lazy(() => import('./client/Phonebook/components/Phonebook/Phonebook' /* webpackChunkName: "Phonebook" */));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <AppPhonebook />
      </Suspense>
    </>
  )
}

export default App;

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';

const Home = lazy(() => import('./pages/Home/Home'));
const Help = lazy(() => import('./pages/Help/Help'));

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

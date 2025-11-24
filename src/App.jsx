import React from 'react';
import Home from './Home';
import About from './pages/about/About';
import ScrollToTop from './ScrollToTop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BlogProvider } from './context/Context';
import Blogs from './pages/Blog/Blogs';
import ErrorTest from './pages/ErrorTest';
import SlowLoading from './pages/SlowLoading';
import Diagnostics from './pages/Diagnostics';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <ScrollToTop />
          <Home />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <ScrollToTop />
          <About />
        </>
      ),
    },
    {
      path: '/error-test',
      element: (
        <>
          <ScrollToTop />
          <ErrorTest />
        </>
      ),
    },
    {
      path: '/slow-loading',
      element: (
        <>
          <ScrollToTop />
          <SlowLoading />
        </>
      ),
    },
    {
      path: '/diagnostics',
      element: (
        <>
          <ScrollToTop />
          <Diagnostics />
        </>
      ),
    },
    {
      path: '/blogs/:name',
      element: (
        <div className="w-screen ">
          <ScrollToTop />
          <Blogs />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <BlogProvider>
        <RouterProvider router={router} />
      </BlogProvider>
    </div>
  );
};

export default App;

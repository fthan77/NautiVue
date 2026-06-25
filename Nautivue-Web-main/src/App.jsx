import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';
import LandingPage from './pages/LandingPage';
import RecommendationPage from './pages/RecommendationPage';
import ExplorePage from './pages/ExplorePage';
import DestinationDetailPage from './pages/DestinationDetailPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-ocean-900 text-white font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <LandingPage />
                </PageTransition>
              }
            />
            <Route
              path="/recommendation"
              element={
                <PageTransition>
                  <RecommendationPage />
                </PageTransition>
              }
            />
            <Route
              path="/explore"
              element={
                <PageTransition>
                  <ExplorePage />
                </PageTransition>
              }
            />
            <Route
              path="/destination/:id"
              element={
                <PageTransition>
                  <DestinationDetailPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
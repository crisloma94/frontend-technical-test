import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupsPage from './pages/NewMeetupsPage';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
import { useFetch } from './util-hooks/useFetch';
import { FAVORITES_PAGE, NEW_MEETUP_PAGE } from './utils/pathNames';

function App() {
  const [favorites, setFavorites] = useState([]);
  const { data, setData } = useFetch({
    url: '/data.json',
  });

  return (
    <div id="app" data-test="app">
      <BrowserRouter>
        <MainNavigation favorites={favorites} />
        <Layout>
          <Routes>
            <Route
              index
              element={
                <AllMeetupsPage
                  data={data}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route
              path={NEW_MEETUP_PAGE}
              element={<NewMeetupsPage setData={setData} />}
            />
            <Route
              path={FAVORITES_PAGE}
              element={
                <FavoritesPage
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

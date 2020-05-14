import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { defaultAppState, AppContext } from './context';
import Home from './pages/Home';

const apolloClient = new ApolloClient({
  uri: process.env.SERVER_URL || 'http://localhost:4000/graphql',
});

function App() {
  const [appState, setAppState] = useState(defaultAppState);

  // deserialize persisted app state after page refresh
  React.useEffect(() => {
    const data = localStorage.getItem('AppState');

    if (data) {
      setAppState((state) => ({
        ...state,
        ...JSON.parse(data),
      }));
    }
  }, []);

  // serialize app state as a JSON string in local storage, whenever app state changes
  React.useEffect(() => {
    localStorage.setItem('AppState', JSON.stringify(appState));
  }, [appState]);

  const addPropertyToFavourites = (property) => {
    setAppState({ ...appState, favouriteProperties: [...appState.favouriteProperties, property] });
  };

  const removePropertyFromFavourites = (property) => {
    setAppState({
      ...appState,
      favouriteProperties: appState.favouriteProperties.filter((favouriteProperty) => favouriteProperty.id !== property.id),
    });
  };

  // render
  return (
    <AppContext.Provider
      value={{
        ...appState,
        addPropertyToFavourites,
        removePropertyFromFavourites,
      }}
    >
      <ApolloProvider client={apolloClient}>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </AppContext.Provider>
  );
}

export default App;

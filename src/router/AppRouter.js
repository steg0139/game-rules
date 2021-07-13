import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';

class AppRouter extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div className="main">
            <Switch>
              <Route
                  path="/"
                  render={(props) => (
                      <Dashboard {...props} />
                  )}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}
export default AppRouter;
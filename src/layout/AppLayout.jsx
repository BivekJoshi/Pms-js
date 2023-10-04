import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/navbar/Navbar';
import Spinner from '../components/spinner/Spinner';
import routes from '../routes/Routes';
import { Fade } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

const AppLayout = (props) => {
  return (
    <>
      <ErrorBoundary>
        <header>
          <Navbar />
        </header>
        <main>
          {localStorage.getItem('token') ? (
            <Suspense fallback={Spinner}>
              <Switch>
                {routes.map((route) => {
                  return (
                    route?.component && (
                      <Route
                        key={route?.id}
                        path={route?.path}
                        exact={route?.exact}
                        name={route?.name}
                        render={(props) => (
                          <Fade in={true} timeout={500}>
                            <route.component {...props} />
                          </Fade>
                        )}
                      />
                    )
                  );
                })}
              </Switch>
            </Suspense>
          ) : (
            <Redirect to='/login' />
          )}
        </main>
      </ErrorBoundary>
    </>
  );
};

const areStatesEqual = (next, prev) => {
  return prev.httpResponse === next.httpResponse;
};
const mapStateToProps = (state) => {
  return { data: state.httpResponse };
};
export default connect(
  mapStateToProps,
  {},
  undefined,
  areStatesEqual
)(AppLayout);

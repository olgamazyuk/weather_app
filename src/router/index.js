import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Weather = lazy(() => import('pages/Weather'));
const WeatherForecast = lazy(() => import('pages/WeatherForecast'));
const PastWeather = lazy(() => import('pages/PastWeather'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Weather} />
          <Route path="/forecast" component={WeatherForecast} />
          <Route path="/past" component={PastWeather} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;

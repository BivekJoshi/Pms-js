import { Component } from 'react';
import store from '../redux/store';
import { contextPath } from '../utility/getBaseUrl';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    debugger;
    console.log(error);
    console.log(info);
    let erc = window.localStorage.getItem('erc');
    if (!erc) erc = 0;
    if (erc < 3) {
      erc = Number(erc) + 1;
      window.localStorage.setItem('erc', erc);
    } else if (erc && erc >= 3) {
      window.localStorage.removeItem('erc');
      store.dispatch({ type: 'LOGOUT' });
      // logout();
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      window.location.assign(contextPath() + '/index.html');
      // window.location.assign(contextPath() + '#/login');
      // return <Page500></Page500>
      // return <></>;
    }
    return this.props.children;
  }
}

import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Provider } from 'react-redux';
import PageChange from "views/Components/Atoms/PageChange/PageChange.js";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga';
import store from '../config/configureStore';

/**
 * unique import to styles with extension scss
 */
import "styles/static/BaseStyles.scss?v=1.0.0";

Router.events.on("routeChangeStart", url => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

class MyApp extends App {
  componentDidMount() {

  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return { pageProps };
  }
  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps, store } = this.props;

    return (
        <Provider store={store}>
          <React.Fragment>
            <Head>
              <title>NextJS Material Kit by Creative Tim</title>
            </Head>
            <Component {...pageProps} />
          </React.Fragment>
        </Provider>
    );
  }
}

const makeStore = () => {
  const initialState = {};
  return store(initialState);
};

export default withRedux(makeStore)(withReduxSaga(MyApp));
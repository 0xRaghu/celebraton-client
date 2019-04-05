import App, { Container } from "next/app";
/* First we import our provider */
import HomeProvider from "../components/provider/homeProvider";
import LoginProvider from "../components/provider/loginProvider";
import Nav from "../components/nav";
import Footer from "../components/footer";
import withGA from "next-ga";
import Router from "next/router";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* Then we wrap our components with the provider */}
        <HomeProvider>
          <LoginProvider>
            <Nav />
            <Component {...pageProps} />
            <Footer />
          </LoginProvider>
        </HomeProvider>
      </Container>
    );
  }
}

export default withGA("UA-103422228-1", Router)(MyApp);
// export default MyApp;

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "Views/Components/Molecules/Header/Header.js";
import Footer from "Views/Components/Molecules/Footer/Footer.js";
import GridContainer from "Views/Components/Atoms/Grid/GridContainer.js";
import GridItem from "Views/Components/Atoms/Grid/GridItem.js";
import Button from "Views/Components/Atoms/CustomButtons/Button.js";
import HeaderLinks from "Views/Components/Molecules/Header/HeaderLinks.js";
import Parallax from "Views/Components/Atoms/Parallax/Parallax.js";

import styles from "Syles/losNonosStyles/pages/landingPage.js";

// Sections for this page
import ProductSection from "Views/Components/Organism/LandingPage-Sections/ProductSection.js";
import TeamSection from "Views/Components/Organism/LandingPage-Sections/TeamSection.js";
import WorkSection from "Views/Components/Organism/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
    <Parallax filter responsive image={require("public/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

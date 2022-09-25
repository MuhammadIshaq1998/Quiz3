import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";

import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/10.jpg";
import image7 from "../../images/6.jpg";
import image8 from "../../images/7.jpg";
import image9 from "../../images/8.jpg";
import image10 from "../../images/9.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image2, title: "K-Means Clustering ", link: "" },
    { url: image3, title: "Hierarchal Clustering", link: "" },
    { url: image4, title: "Principal Component Analysis", link: "" },
    ];

    const projectTwoData=[
      { url: image5, title: "UI Android Application", link: "" },
      { url: image6, title: "UI Android Application", link: "" },
      { url: image7, title: "Capture Image", link: "" },
      { url: image8, title: "Disease Detection", link: "" },
      { url: image9, title: "Disease Detection", link: "" },
      { url: image10, title: "Trained Model Accuracy", link: "" },
    ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Project 1",
              heading: "K-Means Clustering, Hierarchal Clustering and PCA implementation on Facebook live sellers data in Thailand",
              alignCenter: true,
            })}
          </Grid>
        </Grid>

        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Project 2",
              heading: "Self Monitoring and Management of Skin Disease Using Mobile Phone's Camera",
              alignCenter: true,
            })}
          </Grid>
        </Grid>

        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={8}>
            {projectTwoData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

      </ScrollAnimation>
    </Box>
  );
}

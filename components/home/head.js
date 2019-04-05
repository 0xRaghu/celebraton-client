import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription =
  "Book the best customized Wedding Planner, Birthday Planner, Surprise Planner or an Event Organizer in just a few clicks";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      {props.title ||
        "Best Wedding, Birthday and Surprise Planners all at one place | CelebratON"}
    </title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* <link rel="icon" sizes="192x192" href="/static/touch-icon.png" /> */}
    {/* <link rel="apple-touch-icon" href="/static/touch-icon.png" /> */}
    {/* <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" /> */}
    <link rel="icon" href="/static/favicon.png" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />

    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* <script src="https://checkout.razorpay.com/v1/checkout.js" /> */}
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;

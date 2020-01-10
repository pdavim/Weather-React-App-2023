import React from "react";

import InfiniteCarousel from "react-leaf-carousel";

import CardForcast from "./cardForecast";

export default function ForecastCaroussel(props) {
  //CREATE AN ARRAY WITH OBJECTS OF EACH DAY FORWARD
  // I = 8 IS THE INTERVAL OF EACH DAY IN THE MAIN ARRAY
  const myProps = props.props;
  var result = [];
  for (var i = 8; i < myProps.length; i += 8) {
    //result=myProps.slice(i, i+1);
    result.push(myProps[i]);
  }
  // console.log("result ", result);

  //console.log("ForecastCaroussel props", arrayProps);

  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]}
      dots={false}
      arrows={false}
      showSides={true}
      sidesOpacity={1}
      sideSize={0.0}
      slidesToScroll={1}
      slidesToShow={1}
      scrollOnDevice={true}
      swipe={true}
      slidesSpacing="5"
    >
      {result.map(res => (
        <CardForcast props={res} />
      ))}
    </InfiniteCarousel>
  );
}

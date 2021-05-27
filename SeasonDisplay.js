import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
    summer: {
        text: 'Lets chill out at beach.',
        iconName: 'sun'
    },
    winter : {
        text: ' It is cold outside.',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"; // if lat>0 is true = return- summer  else  return - winter
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  // console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const {text, iconName} = seasonConfig[season]//to get the above details

  // removing below 2 lines cz directly defined items above at seasonConfig
//   const displaySeason = season === "winter"? "Boss, weather is chilly..": "Boss lets have a ride to the beach";
//   const icon = season === "winter"? 'snowflake': 'sun';


  return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
            {/* <h1>{displaySeason}</h1> */}
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
            {/* above one is using icon */}


      {/* {season === "winter"
        ? "Boss, weather is chilly.."
        : "Boss lets have a ride to beach"} // try 1*/} 


        {/* {displaySeason} */}
         {/* above line try #2 */}
    </div>
     // writing if else directly ...  you can also go for traditional way
  );
};

export default SeasonDisplay;


// {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" /> */}
// npm install semantic-ui-css
// import "semantic-ui-css/semantic.min.css";
// try above lines if incase icon has error
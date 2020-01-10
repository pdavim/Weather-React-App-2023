#Weather Up Read Me

##API Resources
https://weatherstack.com/quickstart for current weather
https://api.meteostat.net/#stations-nearby for historical data

##api fetch library
###axios
npm i axios

##chart library
https://formidable.com/open-source/victory/docs/victory-line

##Theming
https://material-ui.com/

""Start

```
npm install
npm start

or

yarn
yarn start

```

Apushttps://www.apixu.com/inges
https://www.youtube.com/watch?v=cdBvSlVCOXw&t=4757sat uses the

#Version Update

v1.0.0

- base build using apixu has api call

V1.2.0

- change the api server do weatherstack
- added meteostat for historical data api
- add charts using Victory library

v1.3.0 - 8/01/2020

- general design
- code optimization

v1.3.1 - 9/01/2020

- general design
- code optimization
- added caroussel to forcast
- search form on header instead of modal popper

#TODO

- API IMPLEMENTATION & FUNCTION & DATA:  
  -- change weather api to:
  ---https://openweathermap.org/history
  -- add iv api and airquility api:
  ---https://aqicn.org/api/
  --sun rise an sun set api
  ---https://sunrise-sunset.org/api
  --Max and Min Temp for day and forcast

  ***

- DESIGN
  -- add my icons
  -- color palete
  --change bg color
  -- general design

- ADD LOGIC TO CODE
  -- see if there is data on the response of the calls of the api made by axios library
  -- check timezone for historical data, see if threre is need for api

- ARQUITECTURE:
  --node.js needed for all api calls?
  --add login/register for extra data?
  ---should i use firebase?
  -- do i need redux?
  --is the user gonna add information? NO
  -- are there any forms? ###login and registation
  --overall code optimization and information

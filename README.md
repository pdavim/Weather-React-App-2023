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

v1.0.0 - 05/2019

- base build using apixu has api call

V1.2.0 - 12/2019

- change the api server do weatherstack
- added meteostat for historical data api
- add charts using Victory library

v1.3.0 - 8/01/2020
-- change weather api to - https://openweathermap.org/

- general design
- code optimization

v1.3.1 - 9/01/2020

- general design
- code optimization
- added caroussel to forcast
- search form on header instead of modal popper

v1.3.2 - 13/01/2020
--added sunrise sunset api - https://sunrise-sunset.org/api
--added react geolocation / implemnted not n user
--added Gmaps / installed not implemented
--code optimization
--added funtion folder
--added Moon Phase function
--adde Moon Component - https://www.npmjs.com/package/react-moon

v1.3.5 - 16/01/2020
--code optimization
--node server created
---added openweather api
---added meteo historical data api
---added atomespheric data api - https://aqicn.org/api/
---added sunsrisunset data api
---added https://ipgeolocation.io/ for moon sitance and sun

V1.3.5 - 28/01/2020
--mobx implementation

v1.3.6 - 07/02/2020
--mobx implemnation
-- search city bug correction
-- add default city function added -working
-- add city to cities list added - working
-- delete city of cities list added - bug
-- create ListOfCities component
-- added localStorage
--otimize dateTimestampConversion

v.1.3.7 - 09/02/2020
-- bug correction
-- code debugging
-- reusable functions
-- start overall design using material ui themeStyling
-- added npm react-live-clock

v.1.3.8 - 24/02/2020
-- bug correction
-- code debugging
-- code optimization
-- React Router Added to user
-- React GMaps to user
-- Max temp from history added

#TODO

- API IMPLEMENTATION & FUNCTION & DATA:
  ??(NOT NEEDED replaced by MOBX)--add React Hooks for state management
  --Min Temp for day and forcast
  --add moon phase to forecast
  --Lune.js https://github.com/ryanseys/lune to calculate moon position and height
  -- http://www.stjarnhimlen.se/comp/riset.html
  --shadow projection
  --frozzen probaility calculation
  --node js implementation
  -- add possible maya calendar/egyptian calendar/chinese calendar
  --https://developer.here.com/pricing
  https://developer.here.com/documentation/transit/dev_guide/topics/resource-type-city.html
  --http://geodb-cities-api.wirefreethought.com/pricing

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

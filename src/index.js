
//Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00

let now = new Date();

      let dayTime = document.querySelector("p#day-time");

      let hours = now.getHours();
      let minutes = now.getMinutes();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[now.getDay()];


      dayTime.innerHTML= "????";

      console.log(dayTime);

      alert (now);



//Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

//Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.


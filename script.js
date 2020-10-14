console.log("hello-world");
$(document).ready(function(){
      console.log("ready");
      $("#search-input").on("click", function(event){
        event.preventDefault();
        var currentCityName = $("search-input").val();
        var currentCityName = "atlanta";
        searchBar(currentCityName);
            function searchBar(currentCityName){
                
                var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + 
                currentCityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
                console.log(currentWeatherURL);
    
                // var currentDay = moment().format();
                $(".cityandcurrentdate").text(moment().format("L"));
        
                $.ajax({
                    url: currentWeatherURL,
                    method:"GET"
                }).then(function(response){
                    console.log(response);
                    // var todayWeather = response.data;
                    // event.stopPropagation();
                    JSON.stringify(response.city.name);
                    var currentWeatherCard = $(".currentweather");
    
                    $(".cityandcurrentdate").text(response.name + response.date + response.icon);
                    console.log(response.name + response.date + response.icon);
                    // console.log("testing");
                    $(".tempF").text("Temperature: " + response.main.temp);
                    console.log("Temperature" + response.main.temp);
    
                    $(".humidity").text("Humidity: " + response.main.humidity);
                    console.log("Humidity: " + response.main.humidity);
    
                    $(".wind").text("Wind Speed: " + response.wind.speed);
                    console.log("Wind Speed: " + response.wind.speed);
    
                    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                    $(".temp").text("Temperature (K) " + response.main.temp);
                    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

                    var lat = response.city.coord.lat;
                    var lon = response.city.coord.lon;

                    $(currentWeatherCard).append(body);
                });
                
                var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=649856b9ade664fe56ba1ab8c053cf86"

                $.ajax{(
                    url: uvIndexURL, 
                    method: "GET",
                )}then(function(responseUV){
                    var uvIndex = responseUV.value;
                    var uvIndexDiv = $(".uv").text("UV Index" + uvIndex);
                    $(unIndexDiv).append("#currentweather")
                })
                   
                
                // Five day forecast card forms
                function cards(currentCityName){
                
                var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + 
                currentCityName + "&appid=649856b9ade664fe56ba1ab8c053cf86"
                console.log(forecastURL);

                $.ajax({
                    url: forecastURL,
                    method: "GET"
                }).then(responseForecast)
                {
                    console.log(responseForecast);

                    $("#card-one").text(moment().add(1, 'days'), responseForecast.list[1].weather[0].icon, responseForecast.list[1].main.temp.toFixed(2), responseForecast.list[1].main.humidity);
        //     //     for (var i = 0; i < response.list.length; i + 8){
                       
            //     }
                // var forecast = document.querySelector("#five-day-forecast");
        //         var date = $("#card-date").text(response.date);
        //         var icon = $("#card-icon").text(response.icon);
        //         var temperature = $("#card-temperature").text(responce.main.temperature);
        //         var humidity = $("#card-humidity").text(response.humidity);

        //             forecastCards.append(date, icon, temperature, humidity);
        //             $("body").append(forecastCards);
                }
            }
                });
                // Render search 
               renderSearch();
               function renderSearch(searchInput){
                var cities = document.querySelector("#city-list");
                var searchInput = document.querySelector("#search-input").value;
                console.log("#city-list");
                   searchInput.innerHTML = "";
                   for (var i = 0; i < cities.length; i++){
                       var cities = cities[i];
                       
                       var li = document.createElement("li");
                       li.textContent = cities;
                       cities.appendChild(li);
                       $("<ul>").append(cities);
                   }
               }
        
            };
            // / Search button click event
                var searchbutton = document.querySelector("#searchbtn");
                
                // searchbutton();
               searchbutton.addEventListener("click", function(event){
                var currentCityName = $("search-input").val();
                   event.preventDefault();
                   searchBar(currentCityName);
               });
       // Submission 
                var searchHistory = document.querySelector("#search-engine");
               searchHistory.addEventListener("submit", function(event){
                   event.preventDefault();
                   var searchText = searchInput.value.trim();
                   if (searchText === "") {
                       return;
                     }
                     
                   currentCityName.push(searchText);
                   searchInput.value = "";
                     
                   renderSearch();
               })
            //    
               
      })
        
});  //end ready
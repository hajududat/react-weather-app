import { useEffect, useState } from "react";
import axios from "axios";


const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "e876ad8eedce4610f913d17aaaadae72";

const useOpenWeatherMap = (city, units = 'imperial') => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(`${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=${units}`);
        let data = {
          dt_txt: res.data.list.dt_txt,
          country: res.data.city.country,
          city: res.data.city.name,
          icon: res.data.list[0].weather[0].icon,
          temp: res.data.list[0].main.temp,
          temp_max: res.data.list[0].main.temp_max,
          temp_min: res.data.list[0].main.temp_min,
          description: res.data.list[0].weather[0].description,
          feels_like: res.data.list[0].main.feels_like
        }
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };

    if (city) {
      setIsLoading(true);
      setIsError(false);
      fetchData();
    }
    
  }, [city, units]);

  return { data, isLoading, isError };
};

export default useOpenWeatherMap;

// const [dt_txt, setDT_txt] = useState();
// const [country, setCountry] = useState();
// const [city, setCity] = useState();
// const [icon, setIcon] = useState();
// const [temp, setTemp] = useState();
// const [temp_max, setTemp_max] = useState();
// const [temp_min, setTemp_min] = useState();
// const [description, setDescription] = useState();
// const [feels_like, setFeelsLike] = useState();



// const getWeather = async (e) => {
//   e.preventDefault();

//   const city = e.target.elements.city.value;

//   if (city) {
//     const apiCall = await axios(
//       `${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=imperial`

//       // TO DO: Set up .env.local file to hide api key
//       // `${process.env.REACT_APP_API_URL}/forecast/?q=${city}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
//     );

//     const response = await apiCall;
//     setDT_txt(response.data.list.dt_txt);
//     setCountry(response.data.city.country);
//     setCity(response.data.city.name);
//     setIcon(response.data.list[0].weather[0].icon);
//     setTemp(response.data.list[0].main.temp);
//     setTemp_max(response.data.list[0].main.temp_max);
//     setTemp_min(response.data.list[0].main.temp_min);
//     setDescription(response.data.list[0].weather[0].description);
//     setFeelsLike(response.data.list[0].main.feels_like);
//   }

//   // TO DO: Need error message from api and loading text
//   // TO DO: If input is empty and the user clicks the search button, display message stating to enter a city.
//   // TO DO: If city is searched and the user deletes the city from the input and then clicks the search button, clear the weather shown and display message stating to enter a city.
//   // TO DO: Use custom weather icons from feathericons.com instead of the default openweathermap.org icons
// };
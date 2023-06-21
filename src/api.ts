const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q="
const API_STRING  = "&APPID=0d18c9114f22b64e5aeda6e703b2ac70"

export const fetchData = async (city: string) => {
  console.log(BASE_URL + city + API_STRING)
  try {
    const response = await fetch(BASE_URL + city + API_STRING)
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error)
    throw error
  }
};

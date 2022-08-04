
const fetchApi = async (monthName, yearValue) => {
    try {
    const url = `https://calendarjsonapi.herokuapp.com/month/${monthName}?year=${yearValue}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchApi('June', '1989');
const fetchApi = async () => {
  try {
   const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await response.json();
  return data; 
  } catch (error) {
    throw new Error(error.message);
  }
}

export default fetchApi;
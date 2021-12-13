// UseEffect is for fetching data from the API
// UseState is for manipulating the states of some variables
import { useEffect, useState } from "react";

function App() {
  // Data is to store the quotes fetched from the API
  const [Data, setData] = useState();
  const [isLoading, SetIsLoading] = useState(true);

  // Using UseEffect for fetching data on the starting of the application
  useEffect(() => {
    // Fetching only 25 quotes from the API
    fetch("https://the-dune-api.herokuapp.com/quotes/25")
      .then(res => res.json())
      .then(data => {
        // First we are sorting the quotes based on the their ids property
        data.sort((a, b) => {
          return a.id - b.id;
        });
        // Setting the sorted data as value of Data
        setData(data);
        // Setting to the IsLoading value to false
        SetIsLoading(false)})
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App text-white">
      <div className="mt-10 sm:mt-20 w-full z-50 flex items-center flex-col">
        <h1 className="text-4xl sm:text-8xl">Dune Quotes</h1>
        {/* If isLoading is true then will render the h1 element */}
        {isLoading && <h1 className="mt-5 sm:mt-10 text-2xl sm:text-4xl">Loading...</h1>}
      </div>
      <div className="px-10 sm:px-60 mb-24 sm:mb-50 flex flex-col items-center mt-5 sm:mt-10 w-full h-full font-bold text-2xl sm:text-4xl text-black">
        {
          // If IsLoading isn't false then it will loop through the data and will return div
          !isLoading && Data.map((data, index) =>
            <div className="quote mb-2 sm:mb-4 z-50 rounded w-full bg-lightGold p-2 px-2 sm:px-5 flex justify-center">
              <h3 className="w-1/12">{index+1}.</h3>
              <h1 className="w-full">{data.quote}</h1>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;

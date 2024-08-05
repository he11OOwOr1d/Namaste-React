import RestaurantCard from "./RestraurentCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filRes, setFilRes] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.99330&lng=77.02100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };



  if (listOfRes.length == 0) {
    return <h1>Loading.......</h1>;
  }

  const handleSearch = () => {
    const searchedRes = listOfRes.filter((res) =>
        { 
          console.log(res.info.name.toLowerCase().includes(searchText.toLowerCase()), res.info.name,searchText       )
          if (res.info.name.toLowerCase().includes(searchText.toLowerCase())){
            return res;
          }
          
        }
       );

      setFilRes(searchedRes);
  }


  return (
    <div className="body">
      <div className="filter-box">
        <div className="search">
          <input
            type="textbox"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button onClick={() => {handleSearch(searchText)}}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = listOfRes.filter(
              (res) => res.info.avgRating > 4
              
            );
            setFilRes(filteredRes);
          }}
        >
          Filter Res
        </button>
      </div>
      <div className="res-container">
        {filRes.map((rest) => (
          <RestaurantCard resData={rest} key={rest.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/SideBarSlice";
import { Link, useNavigate } from "react-router-dom";
import { searchTextChange } from "../redux/SearchBarSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_SEARCH_VIDEOS } from "../utils/constants";
import { useDebounce } from "../hooks/useDebounce";

const Header = () => {
  const [searchData, setSearchData] = useState([]);
  const [isSearchItemsVisible, setIsSearchItemsVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchBarText = useSelector((store) => store.searchSlice.searchText);
  const debouncedSearchText = useDebounce(searchBarText, 250);

  useEffect(() => {
    if (debouncedSearchText) {
      fetchSuggestions(debouncedSearchText);
    }
  }, [debouncedSearchText]);

  const fetchSuggestions = async (searchBarText) => {
    const response = await axios.get(
      YOUTUBE_SEARCH_VIDEOS + `&&q=${searchBarText}`
    );
    console.log(response.data.items);
    setSearchData(response?.data?.items);
    setIsSearchItemsVisible(true);
  };

  const handleHamburgerOnClick = () => {
    dispatch(toggleMenu());
  };
  const handleSearchOnChange = (e) => {
    dispatch(searchTextChange(e.target.value));
  };
  const handleOnSearchItemClick = (videoId) => {
    console.log(videoId);

    navigate(`/watch?v=${videoId}`);
    dispatch(searchTextChange(""));
  };
  return (
    <div className="border h-24 flex items-center rounded-lg">
      <img
        className="w-auto h-16 mx-12 rounded-lg cursor-pointer"
        src="https://cdn.vectorstock.com/i/preview-1x/52/85/menu-list-icon-vector-47385285.jpg"
        alt="hamburger"
        onClick={handleHamburgerOnClick}
      />
      <Link to="/">
        <img
          className="w-36"
          src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"
          alt="YT icon"
        />
      </Link>
      <div className="flex">
        <div className="flex flex-col">
          <input
            className="border rounded-l-3xl p-4 ml-12 w-[48rem]"
            type="text"
            value={searchBarText}
            placeholder="Search"
            onChange={handleSearchOnChange}
            onBlur={() => setIsSearchItemsVisible(false)}
            onFocus={() => setIsSearchItemsVisible(true)}
          />

          {searchBarText && isSearchItemsVisible && (
            <div className="border absolute w-[48rem] rounded-2xl p-3 ml-12 mt-16 bg-[#ffffff]">
              <ul>
                {searchData.map((search) => {
                  return (
                    <li
                      onClick={() =>
                        handleOnSearchItemClick(search?.id?.videoId)
                      }
                      className="hover:bg-gray-200 cursor-pointer hover:border hover:rounded-lg p-1 m-1 ml-2 shadow-sm"
                      key={search?.id?.videoId}
                    >
                      {search?.snippet?.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="flex">
          {searchBarText && (
            <img
              className="w-[4.5rem] absolute left-[67rem] cursor-pointer"
              onClick={() => dispatch(searchTextChange(""))}
              src="https://static.vecteezy.com/system/resources/previews/026/306/646/original/cross-round-line-icon-cancel-error-x-mark-wrong-stop-off-close-incorrect-black-white-sign-symbol-illustration-artwork-graphic-clipart-eps-vector.jpg"
              alt="X"
            />
          )}
          <img
            className="w-14 border rounded-r-3xl cursor-pointer"
            src="https://static.thenounproject.com/png/2946467-200.png"
            alt="searchbutton"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

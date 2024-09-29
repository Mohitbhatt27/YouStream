import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/SideBarSlice";
import { Link } from "react-router-dom";
import { searchTextChange } from "../redux/SearchBarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const searchBarText = useSelector((store) => store.searchSlice.searchText);
  console.log("searchText", searchBarText);
  // console.log("fn", setSearchBarText);
  const handleHamburgerOnClick = () => {
    dispatch(toggleMenu());
  };
  const handleSearchOnChange = (e) => {
    dispatch(searchTextChange(e.target.value));
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
      <div className="grid w-9/12">
        <div className="flex">
          <input
            className="border rounded-l-3xl p-3 ml-12 w-[48rem]"
            type="text"
            value={searchBarText}
            placeholder="Search"
            onChange={handleSearchOnChange}
          />
          <div>
            <img
              className="w-14 border rounded-r-3xl cursor-pointer"
              src="https://static.thenounproject.com/png/2946467-200.png"
              alt="searchbutton"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

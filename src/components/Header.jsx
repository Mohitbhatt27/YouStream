import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/SideBarSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleHamburgerOnClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="border h-24 flex items-center rounded-lg">
      <img
        className="w-auto h-16 mx-12 rounded-lg cursor-pointer"
        src="https://cdn.vectorstock.com/i/preview-1x/52/85/menu-list-icon-vector-47385285.jpg"
        alt="hamburger"
        onClick={handleHamburgerOnClick}
      />
      <img
        className="w-36"
        src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.png"
        alt="YT icon"
      />
    </div>
  );
};

export default Header;

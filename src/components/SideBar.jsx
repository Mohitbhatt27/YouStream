import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.sideSlice.isMenuOpen);

  const sideBar = [
    ["Home", "Shorts", "Subscriptions", "Music"],
    ["History", "Playlists", "Youtube", "Watch later"],
    [
      "Explore",
      "Trending",
      "Music",
      "News",
      "Sports",
      "Gaming",
      "Live",
      "Fashion",
      "Learning",
      "Favourites",
    ],
    ["Settings", "Report history", "Help", "Send feedback"],
  ];

  if (!isMenuOpen) return;

  return (
    <div>
      {sideBar.map((sideElem, index) => (
        <ul key={index} className="border-b-2 border-gray-500 p-2">
          {sideElem.map((sideElemPart, subIndex) => (
            <li
              key={subIndex}
              className=" hover:rounded-lg cursor-pointer text-left text-lg px-2 my-4 hover:shadow-2xl hover:bg-gray-200"
            >
              {sideElemPart}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default SideBar;

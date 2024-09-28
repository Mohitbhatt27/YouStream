const MiniButtons = () => {
  const miniButton = [
    "All",
    "Shorts",
    "Music",
    "Sports",
    "Gaming",
    "Live",
    "Fashion",
    "Learning",
    "Favourites",
    "Entertainment",
    "Settings",
    "History",
  ];
  return (
    <div className="flex justify-between">
      {miniButton.map((miniButton, index) => (
        <div key={index} className="mx-4 border rounded-lg px-4 shadow-md">
          {miniButton}
        </div>
      ))}
    </div>
  );
};

export default MiniButtons;

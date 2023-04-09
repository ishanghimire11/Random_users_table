const DarkMode = () => {
  const handleTheme = () => {
    console.log("theme changed");
  };
  return (
    <>
      <button id="user-action-refresh" type="button" onClick={handleTheme}>Dark Theme</button>
    </>
  );
};

export default DarkMode;
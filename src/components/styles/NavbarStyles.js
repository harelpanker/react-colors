export default {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "10px",
  },
  logo: {
    fontSize: "1rem",
    padding: "0 15px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    marginRight: "15px",
    fontFamily: 'Roboto", sans-serif',
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "white",
      fontWeight: "500",
    },
  },
  slider: {
    width: "340px",
    margin: "0 20px",
    "& .rc-slider-rail": { height: "8px" },
    "& .rc-slider-track": { backgroundColor: "transparent" },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "0",
      marginTop: "-3px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "20px",
  },
};

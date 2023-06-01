import logo from "./img/logo.png";
import "./style.css";
const Logo = () => {
  return (
    <img
      className="logo_img"
      src={logo}
      alt="WeatherWatch logo"
      width="70"
      height="70"
    />
  );
};

export default Logo;

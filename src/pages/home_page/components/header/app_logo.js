import { Link } from "react-router-dom";

export const AppLogo = () => {
  return (
    <Link to={"/"}>
      <img src={"/assets/logo.svg"} alt={"logo"} width={"60px"} />
    </Link>
  );
};

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#212121', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={require("../assets/images/fitube.png")} alt="logo" height={45} width={60} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
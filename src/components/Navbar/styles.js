import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 11px",
    backgroundColor: "#00243a",
  },
  heading: {
    color: "whitesmoke",
    textDecoration: "none",
    fontSize: "1em",
  },
  image: {
    marginLeft: "10px",
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
    minWidth: "210px",
  },
  logout: {
    borderRadius: "5px",
    minWidth: "44px",
    marginLeft: "5px",
    color: "#fb7c1b",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: "5px",
    color: "whitesmoke",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    color: "#00243a",
    backgroundColor: "#fb7c1b",
  },
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  accordion: {
    backgroundColor: "#00243a !important",
    borderRadius: "5px !important",
  },
  addRemoveTitle: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    letterSpacing: "2px !important",
    color: "white !important",
  },
  heading: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "10px",
  },
  textInputs: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "10px",
    alignItems: "center",
    height: "45px",
  },
  btnInput: {
    backgroundColor: "#3f51b5",
    color: "whitesmoke",
    borderRadius: "5px",
    padding: "7px",
  },
  buttonSubmit: {
    marginBottom: 10,
    minWidth: "265px",
  },
}));

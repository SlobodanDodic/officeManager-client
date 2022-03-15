import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import NumberFormat from "react-number-format";
import { initialState } from "./initialState";
import { TiArrowUnsorted } from "react-icons/ti";

import Benefits from "./Benefits/Benefits";
import DatePick from "./DatePick/DatePick";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState(initialState);
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    }
  };

  if (!user?.result?.name) {
    return null;
  }

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<TiArrowUnsorted />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.addRemoveTitle}>
          Add Or Edit An Employee
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="subtitle2" className={classes.heading}>
              {currentId ? `Editing "${post.fullname}"` : "Add an employee"}
            </Typography>

            <Container className={classes.textInputs}>
              <TextField
                name="fullname"
                variant="outlined"
                label="Full Name"
                value={postData.fullname}
                onChange={(e) =>
                  setPostData({ ...postData, fullname: e.target.value })
                }
              />

              <TextField
                name="jobRole"
                variant="outlined"
                label="Job Role"
                value={postData.jobRole}
                onChange={(e) =>
                  setPostData({ ...postData, jobRole: e.target.value })
                }
              />

              <TextField
                name="tags"
                variant="outlined"
                label="Knowledge"
                value={postData.tags}
                onChange={(e) =>
                  setPostData({ ...postData, tags: e.target.value.split(",") })
                }
              />
            </Container>

            <DatePick
              label="Birthday"
              value={postData.birthday}
              onChange={(newValue) =>
                setPostData({ ...postData, birthday: newValue })
              }
            />

            <DatePick
              label="Contract until"
              value={postData.contract}
              onChange={(newValue) =>
                setPostData({ ...postData, contract: newValue })
              }
            />

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                margin: "25px 0px",
              }}
            >
              <Benefits
                heading="Health Medic"
                name="health"
                value={postData.health}
                onChange={(e) =>
                  setPostData({ ...postData, health: e.target.value })
                }
              />

              <Benefits
                heading="Fitpass"
                name="fitpass"
                value={postData.fitpass}
                onChange={(e) =>
                  setPostData({ ...postData, fitpass: e.target.value })
                }
              />
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{
                margin: "0px 0px 15px",
              }}
            >
              <TextField
                name="healthUsers"
                variant="outlined"
                label="Health Users"
                value={postData.healthUsers}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    healthUsers: e.target.value.split(","),
                  })
                }
              />
              <TextField
                name="fitpassUsers"
                variant="outlined"
                label="Fitpass Users"
                value={postData.fitpassUsers}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    fitpassUsers: e.target.value.split(","),
                  })
                }
              />
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              marginBottom={2}
            >
              <NumberFormat
                name="debtHealth"
                variant="outlined"
                label="Health Debt"
                value={postData.debtHealth}
                onChange={(e) =>
                  setPostData({ ...postData, debtHealth: e.target.value })
                }
                customInput={TextField}
                thousandSeparator={"."}
                decimalSeparator={","}
                suffix=" din"
              />

              <NumberFormat
                name="debtFitpass"
                variant="outlined"
                label="Fitpass Debt"
                value={postData.debtFitpass}
                onChange={(e) =>
                  setPostData({ ...postData, debtFitpass: e.target.value })
                }
                customInput={TextField}
                thousandSeparator={"."}
                decimalSeparator={","}
                suffix=" din"
              />
            </Grid>

            <DatePick
              label="Eyes control"
              value={postData.eyes}
              onChange={(newValue) =>
                setPostData({ ...postData, eyes: newValue })
              }
            />

            <DatePick
              label="Safety test"
              value={postData.safety}
              onChange={(newValue) =>
                setPostData({ ...postData, safety: newValue })
              }
            />

            <DatePick
              label="Fire safety"
              value={postData.fire}
              onChange={(newValue) =>
                setPostData({ ...postData, fire: newValue })
              }
            />

            <DatePick
              label="First AId"
              value={postData.firstAid}
              onChange={(newValue) =>
                setPostData({ ...postData, firstAid: newValue })
              }
            />

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              marginTop={2}
              marginBottom={1}
            >
              <NumberFormat
                name="bankOne"
                variant="outlined"
                label="1st Bank Account"
                value={postData.bankOne}
                onChange={(e) =>
                  setPostData({ ...postData, bankOne: e.target.value })
                }
                customInput={TextField}
                format="### ############# ##"
              />

              <NumberFormat
                name="bankTwo"
                variant="outlined"
                label="2nd Bank Account"
                value={postData.bankTwo}
                onChange={(e) =>
                  setPostData({ ...postData, bankTwo: e.target.value })
                }
                customInput={TextField}
                format="### ############# ##"
              />
            </Grid>

            <div className={classes.fileInput}>
              <div className={classes.btnInput}>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setPostData({ ...postData, selectedFile: base64 })
                  }
                />
              </div>
            </div>

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="small"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
};

export default Form;

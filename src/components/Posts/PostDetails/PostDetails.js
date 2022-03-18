import React, { useEffect } from "react";
import { Container, Typography, Grid } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../../actions/posts";

import profileImg from "../../../assets/profile.png";
import dpJobRole from "../../../assets/dpJobRole.png";
import dpBirth from "../../../assets/dpBirth.png";
import dpContract from "../../../assets/dpContract.png";
import dpSkills from "../../../assets/dpSkills.png";
import dpFitpass from "../../../assets/dpFitpass.png";
import dpHealth from "../../../assets/dpHealth.png";
import dpBank from "../../../assets/dpBank.png";
import dpTests from "../../../assets/dpTests.png";
import dpInfo from "../../../assets/dpInfo.png";

import useStyles from "./styles";
import DetailString from "./DetailString";
import DetailDate from "./DetailDate";
import DetailTests from "./DetailTests";
import DetailInfo from "./DetailInfo";

const PostDetails = () => {
  const post = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  if (!post) return null;

  return (
    <Container className={classes.card}>
      <div className={classes.imageSection}>
        <img
          className={classes.media}
          src={post.selectedFile || profileImg}
          alt={post.fullname}
        />
        <Typography className={classes.fullname}>{post.fullname}</Typography>
      </div>

      <Grid className={classes.gridBoxOne} container justifyContent="center">
        <DetailDate title="Birthday" item={post.birthday} avatar={dpBirth} />
      </Grid>

      <Typography className={classes.gridHeading}>Job Related Infos</Typography>

      <Grid container justifyContent="center">
        <DetailDate title="Contract" item={post.contract} avatar={dpContract} />

        <DetailString title="Job role" item={post.jobRole} avatar={dpJobRole} />

        <DetailString
          title="Skills"
          item={post?.tags?.map((tag) => `${tag}™ `)}
          avatar={dpSkills}
        />
      </Grid>

      <Typography className={classes.gridHeading}>
        Benefits & Bank Accounts
      </Typography>

      <Grid container justifyContent="center">
        <DetailString
          title="Health care"
          item={post.health}
          avatar={dpHealth}
        />

        <DetailString title="Fitpass" item={post.fitpass} avatar={dpFitpass} />

        <DetailString
          title="Accounts"
          item={post.bankOne}
          itemTwo={post.bankTwo}
          avatar={dpBank}
        />
      </Grid>

      <Typography className={classes.gridHeading}>Additional info</Typography>

      <Grid
        container
        spacing={2}
        alignItems="center"
        className={classes.boxInfo}
      >
        <DetailInfo
          title="Health Care"
          item={post?.healthUsers?.map((healthUser) => `🆔 ${healthUser} `)}
          itemDebt={post.debtHealth}
        />

        <DetailInfo
          title="Fitpass"
          item={post?.fitpassUsers?.map((fitpassUser) => `🆔 ${fitpassUser} `)}
          itemDebt={post.debtFitpass}
        />
        <img
          style={{
            width: "255px",
            filter: "drop-shadow(1px 1px 17px grey)",
            margin: "0 auto",
          }}
          src={dpInfo}
          alt="dpInfo"
        />
      </Grid>

      <Typography className={classes.gridHeading}>Mandatory tests</Typography>

      <DetailTests
        avatar={dpTests}
        eyes={post.eyes}
        safety={post.safety}
        fire={post.fire}
        firstAid={post.firstAid}
      />
    </Container>
  );
};

export default PostDetails;

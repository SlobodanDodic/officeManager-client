import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";

import { useNavigate, Link } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { BiSearch, BiReset } from "react-icons/bi";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Hero from "./Hero";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <>
      {!user?.result?.name ? (
        <Hero />
      ) : (
        <Container className={classes.container}>
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid className={classes.formWrapper} item xs={12} lg={9}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid container spacing={3} className={classes.searchFields}>
              <Grid item xs={12} md={4}>
                <TextField
                  name="search"
                  variant="outlined"
                  label="Search employee"
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <ChipInput
                  fullWidth
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="Search by skill"
                  variant="outlined"
                  style={{
                    paddingTop: "1px",
                  }}
                />
              </Grid>

              <Grid item xs>
                <Button
                  startIcon={<BiSearch />}
                  onClick={searchPost}
                  className={classes.searchButton}
                  variant="outlined"
                  fullWidth
                  size="small"
                  style={{
                    padding: "14px",
                    color: "#00243a",
                  }}
                >
                  Search
                </Button>
              </Grid>

              <Grid item xs>
                <Button
                  startIcon={<BiReset />}
                  component={Link}
                  to="/"
                  className={classes.searchButton}
                  variant="outlined"
                  fullWidth
                  size="small"
                  style={{
                    padding: "14px",
                    color: "#b00000",
                  }}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Home;

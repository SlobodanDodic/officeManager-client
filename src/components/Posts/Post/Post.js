import React from "react";

import { Button } from "@material-ui/core";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { MdEdit, MdDeleteOutline, MdRemoveRedEye } from "react-icons/md";

import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPost, deletePost } from "../../../actions/posts";
import moment from "moment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  const openPost = () => {
    dispatch(getPost(post._id, navigate));

    navigate(`/posts/${post._id}`);
  };

  return (
    <StyledTableRow>
      <StyledTableCell
        align="center"
        style={{
          color: "#00243a",
          fontStyle: "italic",
          fontWeight: "500",
        }}
      >
        {post.fullname}
      </StyledTableCell>
      <StyledTableCell align="center">
        {moment(post.contract).format("DD MMM YYYY")}
      </StyledTableCell>
      <StyledTableCell align="center">
        {moment(post.eyes).format("DD MMM YYYY")}
      </StyledTableCell>
      <StyledTableCell align="center">
        {moment(post.safety).format("DD MMM YYYY")}
      </StyledTableCell>
      <StyledTableCell align="center">
        {moment(post.fire).format("DD MMM YYYY")}
      </StyledTableCell>
      <StyledTableCell align="center">
        {moment(post.firstAid).format("DD MMM YYYY")}
      </StyledTableCell>
      <StyledTableCell align="center">
        {post.health === 0 ? "/" : post.health / 10}
        <br />
        {post.health === 0 ? "None" : post.health === 10 ? "User " : "Users"}
      </StyledTableCell>
      <StyledTableCell align="center">
        {post.fitpass === 0 ? "/" : post.fitpass / 10}
        <br />
        {post.fitpass === 0 ? "None" : post.fitpass === 10 ? "User " : "Users"}
      </StyledTableCell>

      <StyledTableCell align="center" style={{ padding: "5px" }}>
        <Button onClick={openPost}>
          <MdRemoveRedEye
            fontSize="medium"
            style={{
              color: "green",
            }}
          />
        </Button>

        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div>
            <Button onClick={() => setCurrentId(post._id)}>
              <MdEdit
                fontSize="medium"
                style={{
                  color: "#00243a",
                }}
              />
            </Button>
          </div>
        )}

        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button onClick={() => dispatch(deletePost(post._id))}>
            <MdDeleteOutline
              fontSize="medium"
              style={{
                color: "#b00000",
              }}
            />
          </Button>
        )}
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default Post;

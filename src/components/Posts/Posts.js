import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import Loading from "./Loader";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00243a",
    color: theme.palette.common.white,
  },
}));

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <Loading />
  ) : (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Contract</StyledTableCell>
            <StyledTableCell align="center">Eyes</StyledTableCell>
            <StyledTableCell align="center">Safety</StyledTableCell>
            <StyledTableCell align="center">Fire</StyledTableCell>
            <StyledTableCell align="center">First Aid</StyledTableCell>
            <StyledTableCell align="center">Health</StyledTableCell>
            <StyledTableCell align="center">Fitpass</StyledTableCell>
            <StyledTableCell align="center">R.U.D.</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Posts;

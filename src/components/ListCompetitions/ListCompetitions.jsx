import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ListCompetitions({ placement }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
      <TableContainer
        sx={{
          width: "50%",
          borderRadius: 5,
          bgcolor: "whitesmoke",
          boxShadow: 5,
        }}
      >
        <Table
          sx={{ bgcolor: "whitesmoke", borderRadius: 5 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ borderRadius: 5 }}>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  border: 0.5,
                  borderColor: "#282c34",
                  fontWeight: "bold",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  border: 0.5,
                  borderColor: "#282c34",
                  fontWeight: "bold",
                }}
              >
                Location
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  border: 0.5,
                  borderColor: "#282c34",
                  fontWeight: "bold",
                }}
              >
                Date
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  border: 0.5,
                  borderColor: "#282c34",
                  fontWeight: "bold",
                }}
              >
                Competitors
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "black",
                  border: 0.5,
                  borderColor: "#282c34",
                  fontWeight: "bold",
                }}
              >
                Results
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {placement.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.competitionName}</TableCell>
                <TableCell align="center">{row.competitionLocation}</TableCell>
                <TableCell align="center">{row.competitionDate}</TableCell>
                <TableCell align="center">{row.competitorName}</TableCell>
                <TableCell align="center">{row.competitorPlacement}.</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ListCompetitions;

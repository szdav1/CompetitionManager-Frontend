import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
function ListPlacements({ placements }) {
  return (
    <div>
      <TableContainer
        sx={{ borderRadius: 5, bgcolor: "whitesmoke", boxShadow: 5 }}
      >
        <Table
          sx={{ minWidth: "100%", bgcolor: "whitesmoke", borderRadius: 5 }}
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
                Competitor
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
                Club
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
                Competition
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
                Placement
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {" "}
            {placements.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  "th, td": { border: 0.5, borderColor: "#282c34" },
                  bgcolor: index % 2 === 0 ? "lightgray" : "whitesmoke",
                  "&:hover": {
                    backgroundColor: "#1976D2",
                    color: "#fff",
                    transition: "all 0.5s ease-in-out",
                  },
                }}
              >
                <TableCell align="center">{row.competitorName}</TableCell>
                <TableCell align="center">{row.competitorClub}</TableCell>
                <TableCell align="center">{row.competitionName}</TableCell>
                <TableCell align="center">{row.competitionLocation}</TableCell>
                <TableCell align="center">{row.competitionDate}</TableCell>
                <TableCell align="center">{row.competitorPlacement}.</TableCell>
              </TableRow>
            ))}{" "}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ListPlacements;
ListPlacements.propTypes = {
  placements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      competitorName: PropTypes.string.isRequired,
      competitorClub: PropTypes.string.isRequired,
      competitionName: PropTypes.string.isRequired,
      competitionLocation: PropTypes.string.isRequired,
      competitionDate: PropTypes.string.isRequired,
      competitorPlacement: PropTypes.number.isRequired,
    })
  ).isRequired,
};
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ListCompetitions({ competitions }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
      <TableContainer sx={{ width: "50%", borderRadius: 5, bgcolor: "whitesmoke", boxShadow: 5 }}>
        <Table sx={{ bgcolor: "whitesmoke", borderRadius: 5 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ borderRadius: 5 }}>
              <TableCell align="center" sx={{ color: "black", border: 0.5, borderColor: "#282c34", fontWeight: "bold" }}>Name</TableCell>
              <TableCell align="center" sx={{ color: "black", border: 0.5, borderColor: "#282c34", fontWeight: "bold" }}>Location</TableCell>
              <TableCell align="center" sx={{ color: "black", border: 0.5, borderColor: "#282c34", fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {competitions.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  "th, td": { border: 0.5, borderColor: "#282c34" },
                  bgcolor: index % 2 === 0 ? "lightgray" : "whitesmoke",
                  "&:hover": { backgroundColor: "#1976D2", color: "white", transition: "all 0.5s ease-in-out" }
                }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ListCompetitions;
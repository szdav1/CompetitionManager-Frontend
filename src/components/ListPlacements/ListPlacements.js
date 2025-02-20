import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ListPlacements({placements}) {
    return (
        <div>
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Competition Placements</TableCell>
                                <TableCell align="right">Competitor</TableCell>
                                <TableCell align="right">Competition</TableCell>
                                <TableCell align="right">Location</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Placement</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {placements.map((row) => (
                                <TableRow
                                    // key={row.competitorName}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="right">{row.competitorName}</TableCell>
                                    <TableCell align="right">{row.competitionName}</TableCell>
                                    <TableCell align="right">{row.competitionLocation}</TableCell>
                                    <TableCell align="right">{row.competitionDate}</TableCell>
                                    <TableCell align="right">{row.competitorPlacement}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
    );
}

export default ListPlacements;
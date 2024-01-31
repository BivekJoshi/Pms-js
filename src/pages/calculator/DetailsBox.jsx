import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

export const DetailsBox = ({ rows }) => {
  console.log("🚀 ~ DetailsBox ~ rows:", rows);
  const theme = useTheme();
  const color = theme.palette.background.btn;
  return (
    <div style={{ backgroundColor: theme.palette.background.alt }}>
      <Box
        sx={{
          // marginTop: "16px",
          padding: " 16px 32px 8px 32px",
          borderLeft: `5px solid ${color}`,
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            fontWeight: "800",
          }}
        >
          Details
        </Typography>
      </Box>
      <Box
        sx={{
          padding: " 8px 32px 10px 32px",
        }}
      >
        <TableContainer borderRadius="4px 0">
          <Table aria-label="simple table">
            <TableBody>
              {rows?.map((row) => {
                const isPositive = row.data >= 0;
                const textStyle =
                  row.heading === "Profit / Loss" && isPositive
                    ? { color: "green" }
                    : row.heading === "Profit / Loss" && !isPositive
                    ? { color: "red" }
                    : { color: "inherith" };

                return (
                  <TableRow key={row.heading}>
                    <TableCell style={{ width: "50%" }}>
                      {row.isBold ? (
                        <b style={textStyle}>{row.heading}</b>
                      ) : (
                        <span style={textStyle}>{row.heading}</span>
                      )}
                    </TableCell>
                    <TableCell style={{ width: "50%" }}>
                      {row.isBold ? (
                        <b style={textStyle}>{row.data}</b>
                      ) : (
                        <span style={textStyle}>{row.data}</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

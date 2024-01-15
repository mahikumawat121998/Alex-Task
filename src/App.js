import * as React from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./RawData";
import { CssBaseline, Box, Container, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import BarGraph from "./BarGraph";
import SearchAppBar from "./AppBar"
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },

  {
    field: "mobile",
    headerName: "Mobile",
    type: "number",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    type: "text",
    width: 200,
  },
  {
    field: "designation",
    headerName: "Designation",
    type: "text",
    width: 200,
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function App() {
  const [selectionModel, setSelectionModel] = React.useState(() =>
    rows.slice(0,5).map((r) => r.id),
  );
  // React.useEffect(() => {
  //   // Select the first 5 checkboxes by default
  //   const initialSelection = rows.slice(0, 5).map((row) => `${row.id}`);
  //   setSelectionModel(initialSelection);
  // }, []);
  console.log("selectionModelZZ",selectionModel);

  function filterObjectsByIds(data, ids) {
    return data.filter((item) => ids.includes(item.id));
  }  
  // useEffect(() => {
  //   setSelectionModel(filterObjectsByIds(rows, selectionModel));
  // }, [selectionModel]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: " #E5F3FD", height: "100%" }}>
        <SearchAppBar/>
          <Grid container spacing={2}>
            <Grid item md={12}>
                <Item>
                
                <BarGraph selectedRows={filterObjectsByIds(rows,selectionModel)} />
                
                </Item>
            </Grid>
            <Grid sx={{ height: "100vh" }} item md={12}>
              <Item sx={{ height: "100vh", width: "100vw" }}>
                <DataGrid
                  style={{ height: "100vh", widht: "100%" }}
                  rows={rows}
                  columns={columns}
                  pageSize={25}
                  checkboxSelection
                  hideFooterPagination
                  rowSelectionModel={selectionModel}
                  onRowSelectionModelChange={setSelectionModel}                />
                 
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

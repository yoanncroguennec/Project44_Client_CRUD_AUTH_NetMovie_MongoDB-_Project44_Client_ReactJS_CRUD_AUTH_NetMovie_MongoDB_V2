import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

  export default function Component_Global_List({ rows, columns, title }) {
    function generateRandom() {
      var length = 8,
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }

    return (
      <Box sx={{ width: "100%", marginTop: "150px" }}>
        <Typography
          sx={{
            color: "#FFF",
            fontWeight: "bold",
            marginBottom: "45px",
            textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
            "& .super-app-theme--header": {
              backgroundColor: "rgba(255, 7, 0, 0.55)",
            },
          }}
          variant='h4'
        >
          Nombre : {rows.length} {title}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            maxHeight: "70vh",
            background: "rgba(0, 0, 0, 0.5)",
            width: "70%",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            background: "rgba(255,255,255, 0.7)",
            border: "5px solid #000",
            borderRadius: "45px",
            padding: "25px",
            color: "#000",
            "& .MuiDataGrid-cell:hover": { color: "yellow" },
          }}
          rowHeight={85}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowId={(row) => generateRandom()}
        />
      </Box>
    );
  }

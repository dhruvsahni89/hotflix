import {   ThemeProvider } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import { SecurityUpdateGoodSharp } from '@mui/icons-material'
import { Pagination } from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/styles';

const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
const Mypagination = ({setPage,numOfPages=10}) => {
    const handlePageChange=(page)=>{
setPage(page);
window.scroll(0,0);

    }
    return (
       
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}>
              
           <ThemeProvider theme={darkTheme}>
           
        <Pagination 
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="primary"
        
        />
      </ThemeProvider>
            
        </div>
    )
}

export default Mypagination

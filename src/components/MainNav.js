import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/TvOffSharp';
import { useHistory } from 'react-router';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history=useHistory();
  useEffect(() => {
   if(value===0)history.push("/");
   else  if(value===1)history.push("/movies");
   else  if(value===2)history.push("/series");
   else  if(value===3)history.push("/search");
  }, [value,history])

  return (
    <Box sx={{ width: '100%' ,
    position:"fixed",
    bottom:0,
    backgroundColor: '#2d313a',
    
    zindex:100}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={< WhatshotIcon/>} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
       
      </BottomNavigation>
    </Box>
  );
}

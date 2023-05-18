import { Button, Typography } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router-dom';

const Base = ({title,description,children}) => {
const history= useHistory();

    return(
        <div className='main-component base-component'> 
   
   
   <div className='nav-bar'>
   <Button 
   variant="contained"
   onClick={()=>history.push("/")}
    >Dashboard</Button>
   
    <Button
    variant="contained"
   onClick={()=>history.push("/students")}
    >Students-List</Button>
    <Button
    variant="contained"
    onClick={()=>history.push("/add")}
    >Add-students</Button>
     
     </div>
    
     <header>
     <Typography variant="h3" className='heading'>
     {title}
      </Typography>
      
     </header>
     <main className='main-segment'>
     <Typography variant="h4" className='heading'>
     {description}
      </Typography>
       
        <div className='child-component'>
           {children}
        </div>
     </main>


        </div>
    )
}

export default Base
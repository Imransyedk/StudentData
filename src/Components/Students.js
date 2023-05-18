import React, { useState } from 'react'
import Base from '../Base/Base'
import details from '../Data/details';
import AddStudents from './AddStudents';
import UpdateStudents from './UpdateStudents';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';



function Students({ students , setStudents}){
const history = useHistory();

const deleteStudent = async(studId)=>{

    const response = await fetch(`https://645740fc0c15cb148204ab02.mockapi.io/Users/${studId}`,{
        method:"DELETE",
    });

    const data = await response.json()
if(data){
    const remainingStudents=students.filter((stud,idx)=> stud.id !== studId)
 setStudents(remainingStudents)
}
}
    return(
<Base
title={"Students Dashboard"}
description={"the pages contains all Students Data"}
>



    <div className='card-container'>
   {students.map((stud,idx)=>(

<Card sx={{ maxWidth: 200 , height:220 }} key={idx}>
     
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
       {stud.name}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {stud.batch}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {stud.gender}
       </Typography>
       <Typography variant="body2" color="text.secondary">
       {stud.qualification}
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" onClick={()=>history.push(`/edit/${stud.id}`)}><ModeEditOutlineIcon/>
       </Button>
       <Button size="small" onClick={()=>deleteStudent(stud.id)}><DeleteIcon/>
       </Button>
     </CardActions>
   </Card>





   ))}
   

    </div>
</Base>
    )
}

export default Students
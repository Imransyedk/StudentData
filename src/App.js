
import { Switch } from 'react-router-dom';
import './App.css';
import Base from './Base/Base';
import Students from './Components/Students';
import { Route } from 'react-router-dom';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
import details from './Data/details';
import { useState } from 'react';
import Nopage from './Components/Nopage';
import DashBoard from './Components/DashBoard';


function App() {
 
const [students, setStudents]=useState(details);
  return (
    <div className='App'>
    <Switch>
      <Route exact path="/">
       <DashBoard/>
      </Route>

      <Route path="/students">
        <Students
        students ={students}
        setStudents={setStudents}
        />
      

      </Route>

      <Route path="/add">
        <AddStudents
         students ={students}
         setStudents={setStudents}
        
        />
        </Route>

        <Route path="/edit/:id">
          <UpdateStudents
           students ={students}
           setStudents={setStudents}
          
          />
        </Route>

<Route path="**">
   <Nopage/>
</Route>
    </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import List from '../Todo/List';
import Form from '../Todo/Form';
import NavBar from '../Navbar/Navbar';



const TodoApp = () => {
    
        return(
            <div>
                <NavBar />
                <Form />
                <List />
            </div>
        );
    
}



export default TodoApp
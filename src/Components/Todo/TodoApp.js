import React from 'react';
import List from '../Todo/List';
import Form from '../Todo/Form';
import NavBar from '../Navbar/Navbar';
import Calendar from'../moments/Calendar'
import UserProfile from '../UserProfile/UserProfile'



const TodoApp = () => {
    
        return(
            <div>
                <NavBar />
                <div className="box1">
                    <div classname="b1">
                        <UserProfile />
                    </div>
                    <div classname="b2">
                        <Form />
                        <List />
                    </div>
                    
                </div>
                <Calendar />
            </div>
        );
    
}



export default TodoApp
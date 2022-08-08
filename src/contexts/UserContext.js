
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) =>{
    const [image,setImage] = useState('');
    const [habits,setHabits] = useState([]);
    const [doneTasks,setDoneTasks] = useState([]);

    return (
        <UserContext.Provider value={{image,setImage,habits,setHabits,doneTasks,setDoneTasks}}>
            {children}
        </UserContext.Provider>
    )
}


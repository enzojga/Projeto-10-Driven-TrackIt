
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) =>{
    const [image,setImage] = useState('teste');
    const [habits,setHabits] = useState('');

    return (
        <UserContext.Provider value={{image,setImage,habits,setHabits}}>
            {children}
        </UserContext.Provider>
    )
}


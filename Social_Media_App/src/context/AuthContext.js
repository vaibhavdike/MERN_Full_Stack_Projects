import {createContext, useReducer} from 'react';
import AuthReducer  from './AuthReducer';
const INITIAL_STATE={
    user:{
       
        "_id": "64e0c9f566beeb119a0c0ef8",
         "email": "vaibhavdike1@gmail.com",
        
       
      },

    isFecthing:false,
    error:false
};

export const AuthContext=createContext(INITIAL_STATE);


export const AuthContextProvider = (props)=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);
   
    return(
       <AuthContext.Provider value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch,
       }}>

        {props.children}
       </AuthContext.Provider>
    );
};
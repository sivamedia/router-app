import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const ContextProvider = ({children})=>{

 const [ person , setPerson ] = useState({name : 'Sivakumar', phone : 9986683395} );

 //setPerson({name:'SivaMedia', phone: 9986683395});


  return (
    <AppContext.Provider value={{person, setPerson}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider

// eslint-disable-next-line
{/*Put this line in index.js file
  
  <ContextProvider>
<App />
</ContextProvider>*/}
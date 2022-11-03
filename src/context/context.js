import { createContext, useContext, useReducer } from "react";
const context = createContext();

export const useCtrl=() =>{
   const valcont= useContext(context);
   return valcont
}
export function ValProvider({children}){
const control ={
valve1: false,
valve2: false,
valve3: false,
valve4: false,
fulfilled1:false,
fulfilled2:false,
fulfilled3:false,
fulfilled4:false
}
function reducer(estado, action) {
    switch (action.type) {
      case 'valve1':
        return {...estado,valve1:action.payload};
      case 'valve2':
        return {...estado,valve2:action.payload};
      case 'valve3':
        return  {...estado,...action.payload};//absorbe las propiedades
        case 'valve4':
          return  {...estado,...action.payload}
        default:
        return estado
    }
  }
const[estado,dispatch]=useReducer(reducer,control)
let contextValue={estado,dispatch}
return(
<context.Provider value ={contextValue}>
    {children}
</context.Provider>
)

}
import { authUser } from "./actions";

let initState = { 
    token: ""
}

export const reducer = (state = initState , { type, payload}) =>{
    switch(type){
        case authUser:
            return{
                
            }
    }
}
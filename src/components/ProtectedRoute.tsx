import { Navigate } from "react-router-dom";
import {useUserAuth} from "@/components/user-auth-context.tsx";


const ProtectedRoute = ({children}) => {
    const { user } = useUserAuth()
    if(!user){
      console.log(user)
        return <Navigate to="/"></Navigate>
    }
  return children;
}

export default ProtectedRoute;
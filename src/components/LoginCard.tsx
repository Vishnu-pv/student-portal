import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "@/components/user-auth-context.tsx";



export function LoginCard() {

    const { signIn,user } = useUserAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        if(user){
            navigate("/dashboard")
        }
    },[user])

    const handleLogin = async () => {
        try{
            if(user) {
                navigate("/dashboard")
            }else{
                await signIn()
            }

            console.log(user)

        }catch(err){
            console.error(err)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Student's Portal</CardTitle>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button variant="outline" onClick={handleLogin}>Login With Google</Button>
            </CardFooter>
        </Card>
        </div>
    )
}

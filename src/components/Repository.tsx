import {NavBar} from "@/components/NavBar.tsx";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {fetchRepository, fileUpload} from "@/firebase.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";

const Repository = () => {
    const [file,setFile] = useState(null)

    useEffect(() => {
        fetchFileInfo().then((res)=>{
            console.log(res)
        })
    },[])

    const fetchFileInfo = async () => {
        await fetchRepository()
    }

    const uploadFile = () => {
        console.log(file)
        if(!file) return
        fileUpload(file).then(()=>{
            console.log("Upload Success")
        })
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setFile(file)
    }

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-100 w-full">
            <NavBar/>
            <div>
                <h2 className="scroll-m-20 text-3xl text-black mt-2 ml-2 p-5 pb-2 font-extrabold tracking-tight lg:text-4xl">
                    Repository
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center p-2 pt-6">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Upload File</Label>
                    <Input id="picture" type="file" onChange={handleFileChange}/>
                    <Button type="submit" onClick={uploadFile}>Upload</Button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-col p-2 pt-6 h-screen">
                <div className="h-200 bg-red-200">
                    <h2 className="scroll-m-20 text-2xl text-black mt-2 ml-2 p-2 tracking-tight lg:text-2xl">
                        Your Drive
                    </h2>
                </div>
                <div className="h-screen bg-yellow-200">
                <h1>Drive</h1>
                </div>
            </div>
        </div>

    );
}

export default Repository;
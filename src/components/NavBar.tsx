import {
    Menubar,
    MenubarContent, MenubarItem,
    MenubarMenu, MenubarTrigger,
} from "@/components/ui/menubar"
import {ModeToggle} from "@/components/mode-toggle.tsx";
import '../index.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useEffect, useState} from "react";
import {UserAuthContextProvider, useUserAuth} from "@/components/user-auth-context.tsx";


export function NavBar() {
    const [photoUrl,setPhotoUrl] = useState('')
    const { user, logOut } = useUserAuth()
    useEffect(() => {
        if(user){
            setPhotoUrl(user.photoURL)
        }
    },[user])

    return (
              <Menubar title="Dashboard">
                  <div className="hidden lg:flex space-x-4">
                      <MenubarMenu>
                          <MenubarTrigger>Exam Corner</MenubarTrigger>
                      </MenubarMenu>
                      <MenubarMenu>
                          <MenubarTrigger>Repository</MenubarTrigger>
                      </MenubarMenu>
                      <MenubarMenu>
                          <MenubarTrigger>Student Management</MenubarTrigger>
                      </MenubarMenu>
                  </div>

                <MenubarMenu>
                    <ModeToggle />
                </MenubarMenu>
              <MenubarMenu>
                  <MenubarTrigger>
                      <Avatar>
                          <AvatarImage src={`${photoUrl !== '' ? photoUrl : "https://github.com/shadcn.png"}`} />
                          <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                  </MenubarTrigger>
                  <MenubarContent>
                      <MenubarItem>
                          Profile
                      </MenubarItem>
                      <MenubarItem className="lg:hidden">
                          Exam Corner
                      </MenubarItem>
                      <MenubarItem className="lg:hidden">
                          Repository
                      </MenubarItem>
                      <MenubarItem className="lg:hidden">
                          Student Management
                      </MenubarItem>
                      <MenubarItem onClick={logOut}>
                          Logout
                      </MenubarItem>
                  </MenubarContent>
              </MenubarMenu>

              </Menubar>

    )
}

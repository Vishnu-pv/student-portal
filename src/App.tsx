import { ThemeProvider } from "@/components/theme-provider"
import {CardWithForm, LoginCard} from "@/components/LoginCard.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "@/components/Dashboard.tsx";
import {UserAuthContextProvider} from "@/components/user-auth-context.tsx";
import ProtectedRoute from "@/components/ProtectedRoute.tsx";
import Repository from "@/components/Repository.tsx";
import StudentManagement from "@/components/StudentManagement.tsx";

function App() {
    return (
        <UserAuthContextProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginCard/>} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
                    <Route path="/repository" element={<ProtectedRoute><Repository/></ProtectedRoute>} />
                    <Route path="/manage" element={<ProtectedRoute><StudentManagement/></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
        </UserAuthContextProvider>
    )
}

export default App

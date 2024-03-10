import {NavBar} from "@/components/NavBar.tsx";
import {DataTable} from "@/components/table/data-table.tsx";
import {columns, StudentDetails} from "@/components/table/columns.tsx";
import {Button} from "@/components/ui/button.tsx";

const StudentManagement = () => {
    function getData(): Promise<StudentDetails[]> {
        // Fetch data from your API here.
        return [
            {
                id: "728ed52f",
                name: "pending",
                email: "m@example.com",
            },
            {
                id: "728ed52f",
                name: "pending",
                email: "m@example.com",
            },
            {
                id: "728ed52f",
                name: "pending",
                email: "m@example.com",
            },
            {
                id: "728ed52f",
                name: "pending",
                email: "m@example.com",
            },
            {
                id: "728ed52f",
                name: "pending",
                email: "m@example.com",
            },
            {
                id: "728ed52f",
                name: "pending",
                email: "m@example.com",
            },
            // ...
        ]
    }
    const data =  getData()
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-100 w-full">
            <NavBar/>
            <div>
                <h2 className="scroll-m-20 text-3xl text-black mt-2 ml-2 p-5 pb-2 font-extrabold tracking-tight lg:text-4xl">
                    Student Management
                </h2>
                <div className="flex ml-7 mt-5 mb-4">
                    <Button onClick={()=> alert('Hi')} className="dark:bg-black dark:text-white">Add Student</Button>
                </div>
            </div>
                <div className="inline-block border-2 justify-around items-center p-5">
                    <h2 className="scroll-m-20 text-2xl text-black pb-2 font-bold tracking-tight lg:text-3xl">Student Details</h2>
                    <DataTable columns={columns} data={data}/>
                </div>

        </div>

    );
}

export default StudentManagement;
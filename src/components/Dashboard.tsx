import {NavBar} from "@/components/NavBar.tsx";
import {ContentCard} from "@/components/ContentCard.tsx";
import {RecordCard} from "@/components/RecordCard.tsx";

const MyComponent = () => {
    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden bg-slate-100 w-full">
                <NavBar/>
                <div>
                    <h2 className="scroll-m-20 text-3xl text-black mt-2 ml-2 p-5 pb-2 font-extrabold tracking-tight lg:text-4xl">
                        Overview
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-around items-center p-2 pt-6">
                        <ContentCard title="Students" content="350"/>
                        <ContentCard title="Study Materials" content="400"/>
                        <ContentCard title="Records" content="200"/>
                </div>
            </div>
        </>
    );
};

export default MyComponent;

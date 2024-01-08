
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export function ContentCard({title,content}) {
    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
                <h2 className="scroll-m-20 text-3xl text-black mt-2 ml-2 p-5 pb-2 font-extrabold tracking-tight lg:text-4xl">
                    {content}
                </h2>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button>Refresh</Button>
            </CardFooter>
        </Card>
    )
}

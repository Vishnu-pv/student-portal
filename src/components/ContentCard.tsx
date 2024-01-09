
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
            <CardContent className="flex justify-center text-[45px]">
                    {content}
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button>Refresh</Button>
            </CardFooter>
        </Card>
    )
}

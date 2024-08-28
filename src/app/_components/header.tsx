import Image from "next/image";
import { Card, CardContent} from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react"
import SideBarSheet from "./sidebar-sheet";
import { Sheet, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

const Header = () => {
    return (  
        <Card>
            <CardContent className="p-5 flex flex-row items-center justify-between">
                <Link href="/">
                <Image alt="FSW Barber" src="/logo2.svg" height={18} width={120} />
                </Link>

                <Sheet>
                    <SheetTrigger>
                    <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
                    </SheetTrigger>
                    <SideBarSheet/>
                </Sheet>
            </CardContent>
        </Card>
    );
} 
export default Header;
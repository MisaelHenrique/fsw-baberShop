import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image";

const SideBarSheet = () => {
    return (


        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader> 

            <div className="flex item-center gap-3 border-b border-solid py-5">
                <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1579550300627-bac381ffcb0c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </Avatar>

                <div>
                    <p className="fonbt-bold">Misael Henrique</p>
                    <p className="text-xs" >misaelhenrique.dev@gmail.com</p>
                </div>
            </div>
            
            <div className="flex flex-col gap-2 border-b border-solid py-5">
                
                <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                    <Link href="/">
                        <HomeIcon size={18}/>
                        Início
                    </Link>
                </Button>
                </SheetClose>

                <Button className="justify-start gap-2" variant="ghost">
                    <CalendarIcon size={18}/>
                    Agendamentos
                </Button>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
                {quickSearchOptions.map((option) =>(
                    <Button key={option.title} className="justify-start gap-2" variant="ghost">
                        <Image 
                        alt={option.title}
                        height={18} 
                        width={18} 
                        src={option.imageUrl}/>
                        {option.title}
                    </Button>
                ))}
            </div>
            
            <div className="flex flex-col gap-2 py-5">
                <Button variant="ghost" className="justify-start gap-2">
                    <LogOutIcon size={18}/>
                    Sair da conta
                </Button>
            </div>
            
        </SheetContent>

    );
}

export default SideBarSheet;
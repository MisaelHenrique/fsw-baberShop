"use client"

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { signOut, useSession } from "next-auth/react";
import { Avatar,AvatarImage } from "./ui/avatar";
import SignInDialog from "./sign-in-dialog";

const SideBarSheet = () => {

    const {data} = useSession()
    const handleLogoutClick = () => signOut()
    
    
    return (


        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader> 

            <div className="flex item-center justify-betwen gap-3 border-b border-solid py-5">

                {data?.user ?(
                    <div className="flex items-center gap-2">
                    <Avatar>
                    <AvatarImage src={data?.user?.image ?? ""} />
                </Avatar>

                <div>
                    <p className="font-bold">{data.user.name}</p>
                    <p className="text-xs" >{data.user.email}</p>
                </div>
                </div>) : (
                    <>
                    <h2 className="font-bold texrt-lg">Ola, faça seu login!</h2>
                <Dialog>
                    <DialogTrigger asChild>
                    <Button size="icon">
                    <LogInIcon />
                </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90%]">
                        <SignInDialog />
                    </DialogContent>
                </Dialog>
                    </>
                )}
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
                    <SheetClose key={option.title} asChild>
                        <Button 
                            className="justify-start gap-2" 
                            variant="ghost"
                            asChild
                        >
                        <Link href={`/barbershops?service=${option.title}`} >
                        <Image 
                        alt={option.title}
                        height={18} 
                        width={18} 
                        src={option.imageUrl}/>
                        {option.title}
                        </Link>
                    </Button>
                    </SheetClose>
                ))}
            </div>
            
            <div className="flex flex-col gap-2 py-5">
                <Button variant="ghost" className="justify-start gap-2" onClick={handleLogoutClick}>
                    <LogOutIcon size={18}/>
                    Sair da conta
                </Button>
            </div>
            
        </SheetContent>

    );
}

export default SideBarSheet;

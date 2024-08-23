import Image from "next/image";
import { Card, CardContent} from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger, SheetTitle, SheetHeader, SheetContent, SheetClose } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
    return (  
        <Card>
            <CardContent className="p-5 flex flex-row items-center justify-between">
                <Image alt="FSW Barber" src="/logo2.svg" height={18} width={120} />

                <Sheet>
                    <SheetTrigger>
                    <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
                    </SheetTrigger>
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
                </Sheet>
            </CardContent>
        </Card>
    );
} 
export default Header;
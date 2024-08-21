import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeft, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import  Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps{
    params: {
        id: string
    }
}

const BarbershopPage = async ({ params } : BarbershopPageProps ) =>  {
    //chamar o banco de dados
    const barbershop = await db.barbershop.findUnique({
        where:{

            id: params.id,
        },
    })

    if (!barbershop){
        return notFound()
    }

    return (

        <div>
        {/*IMAGEM*/}
        <div className="relative w-full h-[250px]">
            <Image 
            alt={barbershop?.name}
            src={barbershop?.imageUrl} 
            fill
            className="object-cover" 
            />

            <Button 
            size="icon"
            variant="secondary"
            className="absolute top-4 left-4"
            asChild
            >
                <Link href='/'>
                    <ChevronLeft/>
                </Link>
                
            </Button>

            <Button 
            size="icon"
            variant="secondary"
            className="absolute top-4 right-4"
            >
                <MenuIcon/>
            </Button>

        </div>

        <div className="border-b border-solid p-5 gap-2">
            <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
            <div className="mb-2 flex intems-center gap-1">
                <MapPinIcon className="text-primary" size={18}/>
                <p className="textr-sm">{barbershop?.address}</p>
            </div>

            <div className="flex items-center gap-1">
                <StarIcon className="fill-primary text-primary" size={18}/>
                <p className="text-sm">5,0 (499 avaliações)</p>
            </div>
        </div>

        {/* DESCRIÇÃO */}
        <div className="space-y-2 border-b border-solid p-5">
            <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
            <p className="text-justify text-sm">{barbershop?.description}</p>
        </div>
    </div>
    )
    
}

export default BarbershopPage;

import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Footer from "./_components/footer";
import Search from "./_components/seach";
import Link from "next/link";


const Home =  async () => {
  // chamar o banco de dados
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({

    orderBy: {
      name: 'desc'
    }

  })

  return (
    <div>
      {/*Header*/}
      <Header/>
      <div className="p-5">
        <h2 className="text-x1 font-bold">Olá, Felipe!</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        {/*BUSCA*/}
        <div className="mt-6">
          <Search/>
        </div>


        {/*Busca Rápida*/}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button key={option.title} variant="secondary" className="gap-2" asChild>
              <Link href={`/barbershops?service=${option.title}`}>
              <Image src={option.imageUrl} width={16} height={16} alt={option.title}/>
              {option.title}
              </Link>
            </Button>
          ))}

            
        </div>

        {/*IMAGEM*/}
        <div className="relative w=full h-[150px] mt-6">
          <Image  
          alt="Agende nos melhores com a Barber Shop"
          src="/banner2.svg" 
          fill 
          className="object-cover rounded-xl" 
          />
        </div>

        {/*AGENDEMANTOS*/}
        <BookingItem />

        <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden"> 
          {barbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
          </div>

          <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Popular
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden"> 
          {popularBarbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default Home;

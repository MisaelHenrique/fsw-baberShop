
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/seach";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./_lib/auth";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


const Home =  async () => {
  // chamar o banco de dados
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({

    orderBy: {
      name: 'desc'
    }

  })

  const confirmedBookings = session?.user ? await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {                  
        gte: new Date(),
      }
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    }
  }) : []

  return (
    <div>
      {/*Header*/}
      <Header/>
      <div className="p-5">
        <h2 className="text-x1 font-bold">Olá, {session?.user ? session.user.name : "bem"}</h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd ", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span>
              {format(new Date(), "MMMM 'de' yyyy", {locale: ptBR})}
          </span>
          </p>

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

        {/*AGENDAMENTOS*/}
        {confirmedBookings.length > 0 && (
          <>
          <div className="relative w=full h-[150px] mt-6">
            <Image
              alt="Agende nos melhores com a Barber Shop"
              src="/banner2.svg"
              fill
              className="object-cover rounded-xl" />
          </div><h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>
            </>
        )}

        {/*AGENDEMANTOS*/}
        <div className="flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
          {confirmedBookings.map(booking => (
            <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))} />
          ))}
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Recomendados
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
      </div>
  );
}

export default Home;

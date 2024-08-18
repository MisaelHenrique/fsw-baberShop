
import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { AvatarImage, Avatar } from "./_components/ui/avatar";
import { Badge } from "./_components/ui/badge";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/barbershop-item";

const Home =  async () => {
  // chamar o banco de dados
  const barbershops = await db.barbershop.findMany({});
  console.log({ barbershops })

  return (
    <div>
      {/*Header*/}
      <Header/>
      <div className="p-5">
        <h2 className="text-x1 font-bold">Olá, Felipe!</h2>
        <p>Segunda-feira, 05 de agosto.</p>
{/*Search*/}
        <div className="flex items-center gap-2 mt-6">
            <Input 
            placeholder="Search..." 
            />
          <Button>
            <SearchIcon/>
          </Button>
        </div>

{/*Banner*/}
        <div className="relative w=full h-[150px] mt-6">
          <Image  
          alt="Agende nos melhores com a Barber Shop"
          src="/banner-01.png" 
          fill 
          className="object-cover rounded-xl" 
          />
        </div>

        {/*AGENDAMENTOS*/}
        <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/*ESQUEDA*/}
            <div className="flex-col gap-2 py-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Cortes de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" alt="Avatar"/>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/*DIREITA*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <div>
            <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden"> 
          {barbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
          </div>
        </div>
      </div>
      </div>
  );
}

export default Home;

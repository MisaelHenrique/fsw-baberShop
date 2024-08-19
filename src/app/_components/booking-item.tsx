import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return ( 
        <>
        {/*TODO: AGENDAMENTOS COM PROPS*/}
        <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
            Agendamentos
        </h2>

        <Card>
            <CardContent className="flex justify-between p-0">
            {/*ESQUERDA*/}
            <div className="flex-col gap-2 py-5 px-5">
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
        </>
        );
}

export default BookingItem;
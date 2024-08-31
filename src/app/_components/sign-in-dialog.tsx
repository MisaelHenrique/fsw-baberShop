import { Button } from "./ui/button";
import Image from "next/image";
import { 
    DialogDescription, 
    DialogHeader, 
    DialogTitle 
} from "./ui/dialog";
import { signIn } from "next-auth/react";

const handleLoginWithGoogleClick = () => signIn("google")


const SignInDialog = () => {
    return ( 
        <>
            <DialogHeader>
                <DialogTitle>Faça login na palataforma</DialogTitle>
                <DialogDescription> 
                        Conect-se usando dua conta do Google.
                    </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="gap-1 font-bold" onClick={handleLoginWithGoogleClick}>
                <Image alt="Fazer login com google"src="/google.svg" width={18} height={18}/>
                Google
            </Button>
        </>
    );
}

export default SignInDialog;
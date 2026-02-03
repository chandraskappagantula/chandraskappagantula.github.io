import { IconButton } from "./IconButton";
import { Button } from "./Button";
import { Github, Linkedin, Instagram, Mail} from "lucide-react";

export function Intro() {
    return(
        <div className = "max-w-4x1 mx-auto px-6">
            <p>Hello, I'm</p>
            <h1 className = "text-6x1 font-bold text-blue-400 tracking-tight">Chandrasekhar (Chandra)</h1>
            <h1 className = "text-6x1 font-bold text-red-400 tracking-tight">Kappagantula</h1>
            ‎ 
            <h2 className = "text-6x10 text-xl font-size-32px tracking-tight"> A first year Physics Student at Cal Poly SLO, researching the cosmos step by step</h2>
            ‎ 
            <div className = "flex gap-10 mx-auto justify-center">
                <IconButton href = "https://github.com/chandraskappagantula" label = "Github">
                <Github size = {22} />
                </IconButton>
                <IconButton href = "https://www.linkedin.com/in/chandrasekhar-kappagantula-a6315b231/" label = "Github">
                <Linkedin size = {22} />
                </IconButton>
                <IconButton href = "https://www.instagram.com/chans_astrophotozz/" label = "Github">
                <Instagram size = {22} />
                </IconButton>
                <IconButton href = "mailto:chandraskappagantula@gmail.com" label = "Github">
                <Mail size = {22} />
                </IconButton>
            </div>
            ‎ 
            <div className = "flex gap-10 mx-auto justify-center">
                <Button href = "#research" text = "View Reserch">
                    <p className = "text-blue-400"> View Experience </p>
                </Button>
                <Button href = "#contact" text = "Contact">
                    <p className = "text-blue-400"> Get in touch </p>
                </Button>
            </div>
        </div>
    );
}
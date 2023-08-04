import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero
                title="Es tiempo de maquetar"
                subtitle="Lorem Ipsum dorlorjkfhasdkfhasdjkfhkgsdhgk sdfgh skgj
            hsdfkgj hsdkg sdhjk ggsdkghsdklghklhjgskddfhgkj sdhfgkjsdh
            gjksdhgjk sdfhgkjsdghsg dfghdfhgdh gh dfh gh ghdght thth dghdthd"
            />
            <Services />
        </div>
    );
}

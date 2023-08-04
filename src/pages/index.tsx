import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <div>
        <Hero 
            title="Es tiempo de maquetar"
            subtitle="Lorem Ipsum dorlorjkfhasdkfhasdjkfhkgsdhgk sdfgh skgj
            hsdfkgj hsdkg sdhjk ggsdkghsdklghklhjgskddfhgkj sdhfgkjsdh
            gjksdhgjk sdfhgkjsdghsg dfghdfhgdh gh dfh gh ghdght thth dghdthd"
        />
    </div>;
}

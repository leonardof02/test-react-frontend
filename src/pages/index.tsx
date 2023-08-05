import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import About from "@/components/About";
import ServicesContextProvider from "@/context/ServicesContextProvider";
import { NextPageContext } from "next";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps(context: NextPageContext) {
    return {
      props: {
        // You can get the messages from anywhere you like. The recommended
        // pattern is to put them in JSON files separated by locale and read
        // the desired one based on the `locale` received from Next.js.
        messages: (await import(`../../messages/${context.locale}.json`)).default
      }
    };
  }

export default function Home() {
    return (
        <div>
            <ServicesContextProvider>
                <Navbar />
                <Hero
                    title="Es tiempo de maquetar"
                    subtitle="Lorem Ipsum dorlorjkfhasdkfhasdjkfhkgsdhgk sdfgh skgj
                            hsdfkgj hsdkg sdhjk ggsdkghsdklghklhjgskddfhgkj sdhfgkjsdh
                            gjksdhgjk sdfhgkjsdghsg dfghdfhgdh gh dfh gh ghdght thth dghdthd"
                />
                <Services />
                <About />
            </ServicesContextProvider>
        </div>
    );
}

import React, { useContext } from "react";
import Button from "./Button";
import CodingImage from "./CodingImage";
import { useServiceContext } from "@/context/ServicesContextProvider";
import { useTranslations } from "next-intl";

export default function About() {
    const { services } = useServiceContext();
    const t = useTranslations();

    return (
        <section className="flex flex-col items-center mt-12 mb-32 md:grid md:grid-cols-2 place-items-center">
            <CodingImage />
            <div className="flex flex-col md:mt-0 md:text-right gap-5 p-5 max-w-[550px] mt-16">
                <h3 className="text-xl font-bold uppercase text-primary">Sobre Nosotros</h3>
                <h4 className="text-3xl font-bold text-black">{t("Title")}</h4>
                <p className="text-lighy-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa
                    dolorum repudiandae, porro harum soluta iure facere cumque? Totam eius et
                    animi quod amet eligendi accusantium. Iste sapiente ipsam itaque?
                </p>
                <h4 className="text-2xl font-bold text-right text-black">
                    Usar useContext para acceder a los elementos de arriba
                </h4>
                <ul className="flex flex-col gap-3 text-right">
                    {services.length === 0
                        ? "Loading..."
                        : services.map((service, index) => (
                              <div key={index} className="flex items-center justify-end gap-3">
                                  <li>{service}</li>
                                  <div className="flex items-center justify-center w-[20px] h-[20px] border rounded-full border-primary">
                                      <div className="w-[4px] h-[4px] rounded-full bg-primary"></div>
                                  </div>
                              </div>
                          ))}
                </ul>
            </div>
        </section>
    );
}

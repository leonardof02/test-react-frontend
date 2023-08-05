import React from "react";
import Button from "./Button";
import Carrousel from "./Carrousel";

export default function Services() {
    return (
        <section className="flex flex-col gap-4 mx-5 mt-16 md:px-20 md:py-20 md:grid md:grid-cols-6">
            <div className="flex flex-col col-span-2 gap-5">
                <h3 className="text-xl font-bold uppercase text-primary">Servicios</h3>
                <h4 className="text-3xl font-bold text-black">Datos de la API</h4>
                <p className="text-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa
                    dolorum repudiandae, porro harum soluta iure facere cumque? Totam eius et
                    animi quod amet eligendi accusantium. Iste sapiente ipsam itaque?
                </p>
                <Button
                    text="Ver Mas"
                    fit
                    icon={
                        <svg
                            width="28"
                            height="21"
                            viewBox="0 0 28 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.7165 1L27 10.5L17.7165 20M1 10.5H26.74"
                                stroke="white"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    }
                />
            </div>
            <div className="col-span-4">
                <Carrousel />
            </div>
        </section>
    );
}

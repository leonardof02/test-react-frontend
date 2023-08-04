import React from "react";
import Button from "./Button";
import Carrousel from "./Carrousel";

export default function Services() {
    return (
        <section className="flex flex-col gap-4 m-16 md:mx-44 md:my-24 md:grid md:grid-cols-5">
            <div className="flex flex-col col-span-2 gap-5">
                <h3 className="text-xl font-bold uppercase text-primary">Servicios</h3>
                <h4 className="text-3xl font-bold text-black">Datos de la API</h4>
                <p className="text-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa
                    dolorum repudiandae, porro harum soluta iure facere cumque? Totam eius et
                    animi quod amet eligendi accusantium. Iste sapiente ipsam itaque?
                </p>
                <Button text="Ver Mas" fit />
            </div>
            <div className="col-span-3">
                <Carrousel />
            </div>
        </section>
    );
}

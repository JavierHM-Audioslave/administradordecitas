import { ui, citas } from "../variables.js";

export default class App {

    constructor() {
        this.registrarEventos();
    }

    registrarEventos() {
        document.querySelector("button").addEventListener("click", function(e){ui.crearOModificarCita(e, citas, ui)}); // IMPORTANTE!!
    }
}
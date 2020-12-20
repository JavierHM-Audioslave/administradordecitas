import { incrementarI } from "../variables.js";

export default class Cita {

    #id;
    #nombreMascota;
    #nombreDuenio;
    #telefono;
    #fecha;
    #hora;
    #sintomas;

    constructor( id, nombreMascota, nombreDuenio, telefono, fecha, hora, sintomas) {
        
        if(id === null) {
            this.#id = incrementarI();
        } else {
            this.#id = id;
        }
        this.#nombreMascota = nombreMascota;
        this.#nombreDuenio = nombreDuenio;
        this.#telefono = telefono;
        this.#fecha = fecha;
        this.#hora = hora;
        this.#sintomas = sintomas;
    }

    editarCita(citaActualizada) {
        this.#nombreMascota = citaActualizada.getNombreMascota();
        this.#nombreDuenio = citaActualizada.getNombreDuenio();
        this.#telefono = citaActualizada.getTelefono();
        this.#fecha = citaActualizada.getFecha();
        this.#hora = citaActualizada.getHora();
        this.#sintomas = citaActualizada.getSintomas();
    }

    getId() {
        return this.#id;
    }

    getNombreMascota() {
        return this.#nombreMascota;
    }

    getNombreDuenio() {
        return this.#nombreDuenio;
    }

    getTelefono() {
        return this.#telefono;
    }

    getFecha() {
        return this.#fecha;
    }

    getHora() {
        return this.#hora;
    }

    getSintomas() {
        return this.#sintomas;
    }

    setId(id) {
        this.#id = id;
    }

    setNombreMascota(nombreMascota) {
        this.#nombreMascota = nombreMascota;
    }

    setNombreDuenio(nombreDuenio) {
        this.#nombreDuenio = nombreDuenio;
    }

    setTelefono(telefono) {
        this.#telefono = telefono;
    }

    setFecha(fecha) {
        this.#fecha = fecha;
    }

    setHora(hora) {
        this.#hora = hora;
    }

    setSintomas(sintomas) {
        this.#sintomas = sintomas;
    }
}
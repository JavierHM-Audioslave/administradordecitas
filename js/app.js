let i = 0;

class Cita {

    #id;
    #nombreMascota;
    #nombreDuenio;
    #telefono;
    #fecha;
    #hora;
    #sintomas;

    constructor( id, nombreMascota, nombreDuenio, telefono, fecha, hora, sintomas) {
        
        if(id === null) {
            this.#id = ++i;
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


class UI {
    constructor() {};

    
    crearOModificarCita(e, citas, ui) {


        if( document.querySelector("#idDeCitaAEditar").value === "" ) {
            ui.crearYPintarCita(e, citas, ui);
        } else {
            ui.modificarCita(e, citas, ui);
        }

        ui.resetearForm(); // Podria evitarme implementar este método haciendo docuemnt.querySelector("form").reset() //
    }



    /************** FUNCIONALIDAD: resetea todo el formulario luego de haber creado o modificado una cita **********************/
    resetearForm() {
        document.querySelector("#nombreMascota").value = "";
        document.querySelector("#nombrePropietario").value = "";
        document.querySelector("#telefono").value = "";
        document.querySelector("#fecha").value = "";
        document.querySelector("#hora").value = "";
        document.querySelector("#sintomas").value = "";
    }
    /*****************************************************************************************************************************/



    /**************** FUNCIONALIDAD: se modifica los valores de la cita correspondiente de la sección "Administra tus citas" con los valores nuevos insertados en el formulario por el usuario **************************/
    modificarCita(e, citas, ui) {

        const aux = new Cita(
            document.querySelector("#idDeCitaAEditar").value,
            document.querySelector("#nombreMascota").value,
            document.querySelector("#nombrePropietario").value,
            document.querySelector("#telefono").value,
            document.querySelector("#fecha").value,
            document.querySelector("#hora").value,
            document.querySelector("#sintomas").value
        );

        citas.forEach( cita => {

            if( cita.getId() == aux.getId() ) {
                cita.editarCita(aux);
                // break;   /* Da error */
            };
        });        
        
        document.querySelectorAll(".cita").forEach( nodo => { 

            if (nodo.children[0].value == aux.getId()) {

                nodo.children[1].textContent = aux.getNombreMascota();
                nodo.children[2].children[0].textContent = aux.getNombreDuenio();
                nodo.children[3].children[0].textContent = aux.getTelefono();
                nodo.children[4].children[0].textContent = aux.getFecha();
                nodo.children[5].children[0].textContent = aux.getHora();
                nodo.children[6].children[0].textContent = aux.getSintomas();
            }
        });
        
        document.querySelector("#idDeCitaAEditar").value = "";
        document.querySelector("#botonCrearCita").textContent = "CREAR CITA";
        document.querySelector("#botonCrearCita").style.backgroundColor = "#219724";
    }
    /***********************************************************************************************************************************************************************************************************************/


    
    /****************** FUNCIONALIDAD: inserta en el formulario los valores de la cita de la sección "Administra tus citas" que el usuario quiere modificar  **********************/
    editarCitaEnForm(cita) {
        
        document.querySelector("#idDeCitaAEditar").value = cita.getId();

        document.querySelector("#nombreMascota").value = cita.getNombreMascota();
        document.querySelector("#nombrePropietario").value = cita.getNombreDuenio();
        document.querySelector("#telefono").value = cita.getTelefono();
        document.querySelector("#fecha").value = cita.getFecha();
        document.querySelector("#hora").value = cita.getHora();
        document.querySelector("#sintomas").value = cita.getSintomas();

        // Aca se modifica el boton para que en vez de decir "CREAR CITA" diga "MODIFICAR CITA"
        document.querySelector("#botonCrearCita").textContent = "MODIFICAR CITA";
        document.querySelector("#botonCrearCita").style.backgroundColor = "lightskyblue";
    }
    /*********************************************************************************************************************************************************************************/



    /*************************  FUNCIONALIDAD: crear elemento cita en la sección "Administra tus citas" y, a éste, lo pinta en dicha sección  *****************/
    crearYPintarCita(e, citas, ui) {

        e.preventDefault();

        if( document.querySelector("#nombreMascota").value 
            && document.querySelector("#nombrePropietario").value
            && document.querySelector("#telefono").value
            && document.querySelector("#fecha").value
            && document.querySelector("#hora").value
            && document.querySelector("#sintomas").value ) {

            const cita = new Cita( 
                null,
                document.querySelector("#nombreMascota").value,
                document.querySelector("#nombrePropietario").value,
                document.querySelector("#telefono").value,
                document.querySelector("#fecha").value,
                document.querySelector("#hora").value,
                document.querySelector("#sintomas").value
            )

            citas.push(cita);

            const elemFlex = document.createElement("div");
            elemFlex.classList.add("cita");

            const elemFlexPadre = document.querySelector("#contenedorDeCitas");
            elemFlexPadre.appendChild(elemFlex);

            const elementoHidden = document.createElement("input");
            elementoHidden.type = "hidden";
            elementoHidden.value = cita.getId();
            elemFlex.appendChild(elementoHidden);

            const elemMascota = document.createElement("p");
            elemMascota.style.textAlign = "left";
            elemMascota.style.fontWeight = "600";
            elemMascota.style.fontSize = "1.7em";
            elemMascota.style.margin = ".25em 0 .5em 0";
            elemMascota.textContent = cita.getNombreMascota();
            elemFlex.appendChild(elemMascota);

            const elemPropietario = document.createElement("p");
            elemPropietario.style.fontWeight = "600";
            const span1 = document.createElement("span");
            span1.style.fontWeight = 400;
            span1.textContent = cita.getNombreDuenio();
            elemPropietario.textContent = "Propietario: ";
            elemPropietario.appendChild(span1);

            elemFlex.appendChild(elemPropietario);

            const elemTelefono = document.createElement("p");
            elemTelefono.style.fontWeight = "600";
            const span2 = document.createElement("span");
            span2.style.fontWeight = 400;
            span2.textContent = cita.getTelefono();
            elemTelefono.textContent = "Teléfono: ";
            elemTelefono.appendChild(span2);

            elemFlex.appendChild(elemTelefono);

            const elemFecha = document.createElement("p");
            elemFecha.style.fontWeight = "600";
            const span3 = document.createElement("span");
            span3.style.fontWeight = 400;
            span3.textContent = cita.getFecha();
            elemFecha.textContent = "Fecha: ";
            elemFecha.appendChild(span3);

            elemFlex.appendChild(elemFecha);

            const elemHora = document.createElement("p");
            elemHora.style.fontWeight = "600";
            const span4 = document.createElement("span");
            span4.style.fontWeight = 400;
            span4.textContent = cita.getHora();
            elemHora.textContent = "Hora: ";
            elemHora.appendChild(span4);

            elemFlex.appendChild(elemHora);

            const elemSintomas = document.createElement("p");
            elemSintomas.style.fontWeight = "600";
            const span5 = document.createElement("span");
            span5.style.fontWeight = 400;
            span5.textContent = cita.getSintomas();
            elemSintomas.textContent = "Síntomas: "
            elemSintomas.appendChild(span5);
            
            elemFlex.appendChild(elemSintomas);

            const elemContenedorDeDelete = document.createElement("div"); /* Creo botón ELIMINAR */
            elemContenedorDeDelete.style.cursor = "pointer";
            elemContenedorDeDelete.style.textAlign = "center";
            elemContenedorDeDelete.textContent = "ELIMINAR ";
            elemContenedorDeDelete.style.color= "white";
            elemContenedorDeDelete.style.fontSize = ".9em";
            elemContenedorDeDelete.style.display = "inline-block";
            elemContenedorDeDelete.style.padding = ".5em 1em";
            elemContenedorDeDelete.style.backgroundColor = "red";
            elemContenedorDeDelete.style.marginRight = ".5em";
            elemContenedorDeDelete.style.marginTop = "1em";
            elemContenedorDeDelete.style.marginBottom = "2em";
            const imgDelete = document.createElement("img");
            imgDelete.src = "img/x-mark.svg";
            imgDelete.style.width = "1.1em";
            imgDelete.style.height = "1.1em";
            imgDelete.style.display = "inline-block";
            imgDelete.style.marginLeft = ".5em";
            elemContenedorDeDelete.appendChild(imgDelete);
            elemContenedorDeDelete.addEventListener("click", e => e.target.parentElement.remove());   /* Elimina la cita al tocar el botón de ELIMINAR. */
            // console.log(citas);

            elemFlex.appendChild(elemContenedorDeDelete);

            const elemContenedorDeEdit = document.createElement("div"); /* Creo botón EDITAR */
            elemContenedorDeEdit.classList.add("btnEditar")
            elemContenedorDeEdit.style.cursor = "pointer";
            elemContenedorDeEdit.style.textAlign = "center";
            elemContenedorDeEdit.textContent = "EDITAR";
            elemContenedorDeEdit.style.color= "white";
            elemContenedorDeEdit.style.fontSize = ".9em";
            elemContenedorDeEdit.style.display = "inline-block";
            elemContenedorDeEdit.style.padding = ".5em 1em";
            elemContenedorDeEdit.style.backgroundColor = "lightskyblue";
            elemContenedorDeEdit.style.marginLeft = ".5em";
            elemContenedorDeEdit.style.marginTop = "1em";
            elemContenedorDeEdit.style.marginBottom = "2em";
            const imgPencil = document.createElement("img");
            imgPencil.src = "img/pencil.svg";
            imgPencil.style.width = "1.1em";
            imgPencil.style.height = "1.1em";
            imgPencil.style.display = "inline-block";
            imgPencil.style.marginLeft = ".5em";
            elemContenedorDeEdit.appendChild(imgPencil);
            elemContenedorDeEdit.addEventListener("click", e => ui.editarCitaEnForm(cita)); 
            elemFlex.appendChild(elemContenedorDeEdit);

            const elemHR = document.createElement("hr");
            elemHR.style.color = "#ced4da";
            elemFlex.appendChild(elemHR);            
        } else {
            document.querySelector("#noValidado").style.display = "block";
            setTimeout(e => document.querySelector("#noValidado").style.display = "none", 5000);
        }
    }
    /********************************************************************************************************************************************************* */



}




let citas = [];
const ui = new UI();
document.querySelector("button").addEventListener("click", function(e){ui.crearOModificarCita(e, citas, ui)}); // IMPORTANTE!!
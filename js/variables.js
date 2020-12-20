import UI from "./clases/UI.js";

let i = 0;
export let citas = [];
export const ui = new UI();

export function incrementarI() {    // Incrementa "i" y devuelve su valor incrementado. //
    i++;
    return i;
}
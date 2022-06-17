import { AbstractControl } from "@angular/forms";

export function maiorDeIdade(control: AbstractControl){
    const idade = control.value as number
    if (idade < 18){
        return {idade : true}
    }
    return null
}
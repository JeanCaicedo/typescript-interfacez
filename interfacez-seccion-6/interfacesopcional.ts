interface Persona{
    altura:number
    peso:number
    nombre?:string
}

let persona = {altura:2, peso:120, nombre:`Jean`}

function MostrarMediaPeso(persona:Persona):string{
    let mediapeso:number = persona.altura / persona.peso
    if(persona.nombre){
        return`${persona.nombre} tiene una media de ${mediapeso}`
    }else{
        return`No se quien eres pero tienes una media de ${mediapeso}`
    }
}

console.log(MostrarMediaPeso(persona))
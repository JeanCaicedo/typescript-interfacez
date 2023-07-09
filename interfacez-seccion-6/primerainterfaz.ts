interface Persona{
    //Atributos
    nombre:string

}
function caminar(persona:Persona):void{
    console.log(`La persona` + persona.nombre + `esta caminando`)
}
interface General{
    (nombre:string, apellido:string, edad:number):void
}

let functionGeneralUno:General
functionGeneralUno = function(nombre:string, apellido:string, edad:number):void{
    console.log(`${nombre} con el apellido ${apellido} y la edad ${edad}`)
}

functionGeneralUno(`Jean`, `Caicedo`, 18)
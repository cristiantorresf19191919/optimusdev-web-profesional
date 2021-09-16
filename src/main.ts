function Saludos(entrada:string):string {
    return "hola "+entrada;
}

let resultado:string = Saludos("hey");
console.log(resultado)
interface Productos{
    name:string,
    price:number,
    description:string
}
interface Usuario{
    name:string;
    edad: number;
    productos: [Productos]
}

const usuario:Usuario = {
    name: "Usuario",
    edad:4242,
    productos:[{name:"balaca", price:50, description:"super producto"}]
    
}

// alert(JSON.stringify(usuario))
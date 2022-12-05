export class ReciptPage {

    constructor(){
        this.nameLink = '#name'
        this.tarjetaLink = '#creditCard'
        this.precioLink = '#totalPrice'
    }

    verificarVentana(){
        cy.contains(("Purchase has been completed successfully"), {timeout: 15000})
    }

    verificarNombre(){
        return cy.get(this.nameLink)
        
    }

    verificarProducto(producto){
        return(cy.xpath(`//p[@id='${producto}']`))
    }

    verificarTarjeta(){
        return(cy.get(this.tarjetaLink))
    }

    verificarPrecio(){
        return(cy.get(this.precioLink))
    }

}
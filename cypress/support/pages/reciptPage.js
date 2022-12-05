export class ReciptPage {

    /*verificarTicket(){

        cy.contains(("Purchase has been completed successfully"), {timeout: 15000}).should("be.visible")
        cy.contains("Mariano Curia").should("be.visible")
        cy.contains("Black T-Shirt").should("be.visible")
        cy.contains("Red Cap").should("exist")
        cy.contains("1234567891234567").should("be.visible")
        cy.contains("$25").should("be.visible")
    }*/

    verificarVentana(){
        cy.contains(("Purchase has been completed successfully"), {timeout: 15000})
    }

    verificarNombre(){
        return(cy.get("#name"))
    }

    verificarProducto(producto){
        return(cy.xpath(`//p[@id='${producto}']`))
    }

    verificarTarjeta(){
        return(cy.get("#creditCard"))
    }

    verificarPrecio(){
        return(cy.get('#totalPrice'))
    }

}
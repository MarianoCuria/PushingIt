export class CheckOutPage {

    constructor(){
        this.nombreLink = '#FirstName'
        this.apellidoLink = '#lastName'
        this.tarjetaCreditoLink = '#cardNumber'
    }

    ingresarNombre(nombre){
        cy.get(this.nombreLink).type(nombre)
    }

    ingresarApellido(apellido){
        cy.get(this.apellidoLink).type(apellido)
    }

    ingresarTarjeta(tarjetaCredito){
        cy.get(this.tarjetaCreditoLink).type(tarjetaCredito)
    }

    pagarProductos(){
        cy.contains("Purchase").click()
    }


}
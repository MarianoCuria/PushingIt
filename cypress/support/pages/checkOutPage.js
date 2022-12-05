export class CheckOutPage {
   
   /* ingresarDatos(nombre, apellido, tarjetaCredito) {
        cy.get("#FirstName").type(nombre)
        cy.get('#lastName').type(`'${apellido}'`)
        cy.get('#cardNumber').type(tarjetaCredito);
    }*/

    ingresarNombre(nombre){
        cy.get("#FirstName").type(nombre)
    }

    ingresarApellido(apellido){
        cy.get('#lastName').type(apellido)
    }

    ingresarTarjeta(tarjetaCredito){
        cy.get('#cardNumber').type(tarjetaCredito)
    }

    pagarProductos(){
        cy.contains("Purchase").click()
    }


}
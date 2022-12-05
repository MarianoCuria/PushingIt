export class ProductsPage {

    agregarProductos(producto){
        cy.xpath(`//button[@value='${producto}']`).click()
    
    }

    cerrarVentanaEmergente(){
        cy.xpath("//button[@id='closeModal']").click();
    }

    irAlCarrito(){
        cy.get("#goShoppingCart").click();
    }
}
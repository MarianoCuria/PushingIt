export class ShoppingCartPage {

    verificarProductos(producto){
        return( cy.xpath(`//p[@name='${producto}']`))
    }

    verificarPrecioProducto(producto){
        return(cy.xpath(`//p[@name='${producto}']`)).siblings("#productPrice")
    }


    mirarPrecioTotal(){
        cy.contains("Show total price").click()
    }


    verificarSumaPrecio(){
        return(cy.get("#price"))
     }

    irALaCaja(){
        cy.contains("Go to Checkout").click()
    }

}
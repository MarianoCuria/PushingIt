/// <reference types="cypress" />
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { CheckOutPage } from "../support/pages/checkOutPage";
import { ReciptPage } from "../support/pages/reciptPage";

describe("Page Object Model", () => {
  let productosCarrito;
  let ticket;
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();
  const checkOutPage = new CheckOutPage();
  const reciptPage = new ReciptPage();

  before("Before", () => {
    
    cy.fixture("products").then((producto) => {
      productosCarrito = producto;
    });

    cy.fixture("recipt").then((recibo) =>{
      ticket = recibo
    }) 

  });

  const username = "Mariano" + Math.floor(Math.random() * 1000);
  const mensajeTicket = "has succesfully purchased the following items"
 

  it("Entrega final", () => {

    //Crear usuario

    cy.request({
      method: "POST",
      url: "https://pushing-it.onrender.com/api/register",
      body: {
        username: username,
        password: "123456!!!",
        gender: "Male",
        day: "5",
        month: "June",
        year: "1998",
      },
    });

    //Loguear usuario
    cy.request({
      method: "POST",
      url: "https://pushing-it.onrender.com/api/login",
      body: {
        username: username,
        password: "123456!!!",
      },
    }).then((respuesta) => {
      window.localStorage.setItem("token", respuesta.body.token);
      window.localStorage.setItem("user", respuesta.body.user.username);
    });

    cy.visit("");

    //Prueba

    homePage.clickOnlineShop();
    productsPage.agregarProductos(productosCarrito.remeraNegra.producto);
    productsPage.cerrarVentanaEmergente();
    productsPage.agregarProductos(productosCarrito.gorraRoja.producto);
    productsPage.cerrarVentanaEmergente();
    productsPage.irAlCarrito();
    shoppingCartPage
      .verificarProductos(productosCarrito.remeraNegra.producto)
      .should("have.text", productosCarrito.remeraNegra.producto);
    shoppingCartPage
      .verificarProductos(productosCarrito.gorraRoja.producto)
      .should("have.text", productosCarrito.gorraRoja.producto);
    shoppingCartPage
      .verificarPrecioProducto(productosCarrito.remeraNegra.producto)
      .should("have.text", "$" + productosCarrito.remeraNegra.precio);
    shoppingCartPage
      .verificarPrecioProducto(productosCarrito.gorraRoja.producto)
      .should("have.text", "$" + productosCarrito.gorraRoja.precio);
    shoppingCartPage.mirarPrecioTotal();
    shoppingCartPage
      .verificarSumaPrecio()
      .should(
        "have.text",
        productosCarrito.remeraNegra.precio + productosCarrito.gorraRoja.precio);
    shoppingCartPage
      .irALaCaja()
    checkOutPage
      .ingresarNombre(ticket.nombre)
    checkOutPage
      .ingresarApellido(ticket.apellido)
    checkOutPage  
      .ingresarTarjeta(ticket.tarjetaCredito)
    checkOutPage
      .pagarProductos()
    reciptPage
      .verificarVentana()
    reciptPage
      .verificarNombre()
      .should("have.text", ticket.nombre + " " + ticket.apellido + " " + mensajeTicket)
    reciptPage
      .verificarProducto(productosCarrito.remeraNegra.producto)
      .should("have.text", productosCarrito.remeraNegra.producto)
    reciptPage
      .verificarProducto(productosCarrito.gorraRoja.producto)
      .should("have.text", productosCarrito.gorraRoja.producto )
    reciptPage
      .verificarTarjeta(ticket.tarjetaCredito)
      .should("have.text", ticket.tarjetaCredito)
    reciptPage
      .verificarPrecio()
      .should("have.text", "You have spent $"+ (productosCarrito.remeraNegra.precio + productosCarrito.gorraRoja.precio))
  });

  after("Una vez finalizada la prueba, eliminar usuario", () => {
    cy.request({
      method: "DELETE",
      url: "https://pushing-it.onrender.com/api/deleteuser/" + `${username}`,
    });
  });
});

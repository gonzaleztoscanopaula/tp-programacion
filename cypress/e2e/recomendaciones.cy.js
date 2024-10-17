describe('Sistema de Recomendación', () => {
  it('Muestra recomendaciones al hacer clic en un producto', () => {
    cy.visit('main.html');
    cy.get('.producto[data-product-id="1"]').click();
    cy.get('#recomendaciones-container .producto-recomendado').should('have.length', 3);
  });

  it('Verifica el contenido de las recomendaciones para el producto 1', () => {
    cy.visit('main.html');
    cy.get('.producto[data-product-id="1"]').click();

    // Verifica el nombre del primer producto recomendado
    cy.get('#recomendaciones-container .producto-recomendado').eq(0).should('contain', 'Monitor Gamer'); 

    // Verifica el precio del primer producto recomendado
    cy.get('#recomendaciones-container .producto-recomendado .precio').eq(0).should('contain', '$300.000,00'); 

    // Verifica la imagen del primer producto recomendado
    cy.get('#recomendaciones-container .producto-recomendado img').eq(0).should('have.attr', 'src', 'assets/monitor.jpeg'); 
  });

  it('Muestra recomendaciones al hacer clic en diferentes productos', () => {
    cy.visit('main.html');

    // Itera sobre los productos con IDs 1, 2 y 3
    [1, 2, 3].forEach(id => {
      cy.get(`.producto[data-product-id="${id}"]`).click();
      cy.get('#recomendaciones-container .producto-recomendado').should('have.length', 3);
    });
  });

  it('Se visualiza correctamente en dispositivos móviles', () => {
    cy.viewport('iphone-6'); 
    cy.visit('main.html');
    cy.get('.producto[data-product-id="1"]').click();
    cy.get('#recomendaciones-container .producto-recomendado').should('be.visible'); 
  });

  it('No muestra recomendaciones al iniciar la página', () => {
    cy.visit('main.html');
    cy.get('#recomendaciones-container .producto-recomendado').should('not.exist'); 
  });

  it('Las recomendaciones se actualizan al hacer clic en otro producto', () => {
    cy.visit('main.html');
    cy.get('.producto[data-product-id="1"]').click();
    cy.get('#recomendaciones-container .producto-recomendado').eq(0).should('contain', 'Monitor Gamer');

    cy.get('.producto[data-product-id="2"]').click();

    // Verifica que las recomendaciones hayan cambiado
    cy.get('#recomendaciones-container .producto-recomendado').eq(0).should('contain', 'Teclado Gamer'); 
  });

  it('La página se carga en menos de 3 segundos', () => {
    cy.visit('main.html', { timeout: 3000 }); 
  });
});
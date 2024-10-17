const mostrarRecomendaciones = require('../src/recomendador'); // Importa la función

describe('mostrarRecomendaciones', () => {
  it('debería mostrar las recomendaciones correctas para el producto 1', () => {
    // Simula el contenedor de recomendaciones
    document.body.innerHTML = '<div id="recomendaciones-container"></div>';

    mostrarRecomendaciones(1);

    // Verifica que el contenedor tenga el contenido esperado
    const recomendacionesContainer = document.getElementById('recomendaciones-container');
    expect(recomendacionesContainer.innerHTML).toContain('Producto 4'); // Ajusta según tus datos
    // Agrega más expectativas para verificar otros productos recomendados
  });
});
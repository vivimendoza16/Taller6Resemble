describe('Prueba Generador Colores', function() {
    it('Visits Cenerador Colores', function() {
      cy.visit('https://vivimendoza16.github.io/Taller6/palette')
      cy.contains('Generar nueva paleta').click()
      cy.screenshot('screen1')
      cy.contains('Generar nueva paleta').click()
      cy.screenshot('screen2')
    })
});




  
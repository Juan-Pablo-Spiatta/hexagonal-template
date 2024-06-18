describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.16:5173/')
    cy.contains('Hola mundo')
  })
})
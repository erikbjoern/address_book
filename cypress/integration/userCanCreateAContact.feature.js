describe('user can create a contact', () => {
    it('test', () =>{
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Noel')
        cy.get('#email').type('noel@craft.se')
        cy.get('#phone').type('0706187603')
        cy.get('#company').type('Craft Academy')
        cy.get('#notes').type('An Irish Person')
        cy.get('#twitter').type('Noelryn')
        cy.get('#submit').click()
    })

    it('displays a name of a contact', () => {
        cy.get('#contact-list').should('contain', 'Noel')
    })

    it('displays an email of a contact', () => {
        cy.get('#contact-list').should('contain', 'noel@craft.se')
    })
})


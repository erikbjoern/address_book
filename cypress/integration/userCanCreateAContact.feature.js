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

    it('displays an email for a contact', () => {
        cy.get('#contact-list').should('contain', 'noel@craft.se')
    })

    it('displays a phone for a contact', () => {
        cy.get('#contact-list').should('contain', '0706187603')
    })

    it('displays a company for a contact', () => {
        cy.get('#contact-list').should('contain', 'Craft Academy')
    })

    it('displays a note for a contact', () => {
        cy.get('#contact-list').should('contain', 'An Irish Person')
    })

    it('displays a twitter for a contact', () => {
        cy.get('#contact-list').should('contain', 'Noelryn')
    })
})


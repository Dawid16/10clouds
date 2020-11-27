Cypress.Commands.add('validateEachElementContainsText', (el, text) => {
    Cypress.log({
        name: 'validateEachElementContainsText',
        message: `${el} contains ${text}`
    })
    cy.get(el).each(($ele) => {
        cy.wrap($ele).contains(text)
    })
})

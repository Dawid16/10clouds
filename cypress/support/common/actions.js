Cypress.Commands.add('clickOnElement', (el) => {
    Cypress.log({
        name: 'clickOnElement',
        message: `${el}`
    })
    cy.get(el).click()
})

Cypress.Commands.add('getElementContainingText', (el, text) => {
    Cypress.log({
        name: 'getElementContainingText',
        message: `${el} with ${text}`
    })
    cy.get(el).contains(text)
})

Cypress.Commands.add('typeToInput', (input, text) => {
    Cypress.log({
        name: 'typeToInput',
        message: `${input} with ${text}`
    })
    cy.get(input).type(text)
})

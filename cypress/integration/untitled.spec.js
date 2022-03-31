// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)

        for (let i = 0; i <= 74; i++) {
            cy.visit('https://soundcloud.com/monomente-podcast/goldgrund-037', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                }
            })

            cy.wait(58000 + Math.random() * 4000)

            /*
            cy.visit('https://soundcloud.com/monomente-podcast/you-and-another-003', {
                headers: {
                    'user-agent': 'Mozilla/5.0 ' + Math.random(),
                }
            })
            /*
            cy.wait(20000 + Math.random() * 2000)
            
            cy.visit('https://soundcloud.com/monomente-podcast/kathi-boehmer-034', {
                headers: {
                    'user-agent': 'Mozilla/5.0 ' + Math.random(),
                }
            })

            cy.wait(10000 + Math.random() * 2000)
            
            cy.visit('https://soundcloud.com/monomente-podcast/johannes-frank-033', {
                headers: {
                    'user-agent': 'Mozilla/5.0 ' + Math.random(),
                }
            })

            cy.wait(20000 + Math.random() * 2000)
            */
        }
    })
})

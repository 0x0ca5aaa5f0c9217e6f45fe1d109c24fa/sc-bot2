describe('My First Test', () => {
    it('Does not do much!', () => {
        for (let i = 0; i <= 47; i++) {
            
            cy.visit('https://soundcloud.com/julianewolfmusic/juliane-wolf-sos-uground-kulturkosmos-larz-02042022', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.twitter.com',
                }
            })

            cy.wait(60000 + Math.random() * 2000)
        }
    })
})

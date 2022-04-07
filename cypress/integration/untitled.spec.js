describe('My First Test', () => {
    it('Does not do much!', () => {
        for (let i = 0; i <= 1000; i++) {
            cy.visit('https://soundcloud.com/lydiaeisenblaetter/lydia-eisenblatter-live-robert-johnson-part-2', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.twitter.com',
                }
            })

            cy.wait(20000 + Math.random() * 2000)

            cy.visit('https://soundcloud.com/lydiaeisenblaetter/lydia-eisenblatter-live-robert-johnson-part-1', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.twitter.com',
                }
            })

            cy.wait(20000 + Math.random() * 2000)

            cy.visit('https://soundcloud.com/julianewolfmusic/juliane-wolf-sos-uground-kulturkosmos-larz-02042022', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.twitter.com',
                }
            })

            cy.wait(20000 + Math.random() * 2000)
        }
    })
})

describe('FlowForge - Project Snapshots', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/*/projects/*/snapshots').as('getProjectSnapshots')

        cy.login('alice', 'aaPassword')
        cy.home()

        cy.request('GET', '/api/v1/teams/')
            .then((response) => {
                const team = response.body.teams[0]
                return cy.request('GET', `/api/v1/teams/${team.id}/projects`)
            })
            .then((response) => {
                cy.visit(`/project/${response.body.projects[0].id}/snapshots`)
                cy.wait('@getProjectSnapshots')
            })
    })

    it('shows a placeholder message when no snapshots have been created', () => {
        cy.get('main').contains('You have not created any snapshots yet')
    })

    it('provides functionality to create a snapshot', () => {
        cy.get('button[data-action="create-snapshot"]').click()

        cy.get('.ff-dialog-box').should('be.visible')
        cy.get('.ff-dialog-header').contains('Create Snapshot')
        // disabled primary button by default
        cy.get('.ff-dialog-box button.ff-btn.ff-btn--primary').should('be.disabled')

        cy.get('[data-form="snapshot-name"] input[type="text"]').type('snapshot1')
        // inserting snapshot name is enough to enable button
        cy.get('.ff-dialog-box button.ff-btn.ff-btn--primary').should('not.be.disabled')
        cy.get('[data-form="snapshot-description"] textarea').type('snapshot1 description')

        // click "Create"
        cy.get('.ff-dialog-box button.ff-btn.ff-btn--primary').click()

        cy.get('[data-el="snapshots"] tbody').find('tr').should('have.length', 1)
        cy.get('[data-el="snapshots"] tbody').find('tr').contains('snapshot1')
    })

    it('can delete a snapshot', () => {
        cy.intercept('DELETE', '/api/*/projects/*/snapshots/*').as('deleteSnapshot')

        // click kebab menu in row 1
        cy.get('[data-el="snapshots"] tbody').find('.ff-kebab-menu').eq(0).click()
        // click the 3rd option (Delete)
        cy.get('[data-el="snapshots"] tbody .ff-kebab-menu .ff-kebab-options').find('.ff-list-item').eq(2).click()

        cy.get('.ff-dialog-box').should('be.visible')
        cy.get('.ff-dialog-header').contains('Delete Snapshot')

        // Click "Delete"
        cy.get('[data-el="platform-dialog"] .ff-btn--danger').click()

        cy.wait('@deleteSnapshot')

        cy.get('main').contains('You have not created any snapshots yet')
    })
})

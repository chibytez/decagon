class Dashboard {

    directoryPage(){
        return cy.get('#menu_directory_viewDirectory').click()
    }

}

export default Dashboard
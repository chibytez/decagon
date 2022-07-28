
class Directory {

  nameInput(name) {
      cy.get('#searchDirectory_emp_name_empName').clear().type(name)
      return this
  }

  searchBtn(){
      return cy.get('#searchBtn').click()
  }

  maintenancePage() {
      return cy.get('#menu_maintenance_purgeEmployee').click()
  }
}

export default Directory
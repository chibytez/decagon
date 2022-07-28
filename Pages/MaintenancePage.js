class Maintenance {
  verify(password) {
      cy.get('#confirm_password').clear().type(password)
      return this
  }

  verifyBtn() {
    return cy.get('[type=submit]').click()
  }

  logout() {
    cy.get('#welcome').click()
    cy.get('a[href="/index.php/auth/logout"]').click()
    return this

  }
}

export default Maintenance
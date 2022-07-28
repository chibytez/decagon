
class LoginPage {
    launcher(website) {
        return cy.visit(website)
    }

    username(myusername) {
        cy.get('#txtUsername').clear().type(myusername)
        return this
    }

    password(mypassword) {
        cy.get('#txtPassword')
        .clear()
        .type(mypassword)
    return this
    }

    loginButton() {
        return cy.get('#btnLogin').click()
    }

    container(contain) {
        return cy.contains(contain)
    }
}

export default LoginPage
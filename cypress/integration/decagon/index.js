/// <reference types="cypress" />

import Login from "../../../Pages/LoginPage"
import Dashboard from "../../../Pages/Dashboard"
import Directory from "../../../Pages/DirectoryPage"
import Maintenance from "../../../Pages/MaintenancePage"


describe ('decacon test script', ()=>{

    const login = new Login()
    const dashboard = new Dashboard()
    const directory = new Directory()
    const maintenance = new Maintenance()

    const logger = () => {
        login.username('Admin')
        login.password('admin123')
        login.loginButton()
    }

    before('should launch url and login user', () => {
        login.launcher('https://opensource-demo.orangehrmlive.com/')
        cy.url().should('be.equal', 'https://opensource-demo.orangehrmlive.com/')
        logger()
    })

    it('should direct to dashboard', () => {
        login.container('Dashboard')
        login.container('Assign Leave')
        login.container('Leave List')
        login.container('Timesheets')
        login.container('Apply Leave')
        login.container('My Leave')
        login.container('My Timesheet')
    })

    it('should direct to Directory Page and search name', ()=>{
        dashboard.directoryPage()
        logger()
        directory.nameInput('Odis Adalwin')
        directory.searchBtn()
        login.container('Administration')
        login.container('112-454-0457, odis1@osohrm.com')
    })

    it('should direct to maintenance Page and purge employee record', () =>{
        directory.maintenancePage()
        logger()
        maintenance.verify('admin123')
        maintenance.verifyBtn()
        login.container('Access Records')
    })

    after('should logout', () =>{
        maintenance.logout()
    })

})
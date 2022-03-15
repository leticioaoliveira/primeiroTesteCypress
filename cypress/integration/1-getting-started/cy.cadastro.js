/// <reference types="cypress" />

const Faker = require('faker')

describe('Cadastro de usuário', () => {
    let senha
    let email

    before(() => {
        senha = 'Teste123'
        email = Faker.Internet.email()
        cy.visit('cadastro')
    })

    it('Preencher campos obrigatórios', () => {
        // cy.get('#email_create').type(`${usuario.email}{enter}`)
        cy.get('#pf_nome_cliente').type(Faker.Name.findName())
        cy.get('#pf_data_nascimento').type('12122001')
        cy.get('#pf_cpf_cliente').type('070.169.610-95')
        cy.get('#telefone_cliente').type(Faker.PhoneNumber.phoneNumber())
        cy.get('#telefone_cliente_2').type(Faker.PhoneNumber.phoneNumber())
        cy.get('#email_cliente').type(email)
        cy.get('#email_cliente2').type(email)
        cy.get('#senha_cliente').type(senha)
        cy.get('#senha_cliente2').type(senha)
    })

    it('Finalizar cadastro', () => {
        cy.get('.botao-commerce-img').click()
    })
})
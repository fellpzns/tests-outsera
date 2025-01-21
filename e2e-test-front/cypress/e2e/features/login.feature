Feature: Login e navegação até a página de checkout

  Scenario: Realizar login e acessar a página de checkout
    Given que estou na página de login
    When faço login com "usuario" e "senha"
    Then sou redirecionado para a página de checkout

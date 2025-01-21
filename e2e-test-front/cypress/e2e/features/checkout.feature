Feature: Realizar checkout

  Scenario: Adicionar um produto ao carrinho e finalizar a compra
    Given que estou na página de checkout
    When adiciono um produto ao carrinho
    And preencho os dados de pagamento
    Then a compra é finalizada com sucesso

Feature: Checkout

#    As a normal user
#    I want to do below cases to test the function on checkout

@test
Scenario Outline: Login user can buy single products,and checkout successfully.
    Given I was login the store "<customer_info>"
    Then I can empty the cart
    When I search product by "<sku_id>"
    Then I see the product "<sku_id>" in search result page
    Then I can go to PDP from PLP
    Then I can add product to cart from PDP
    Then I can go to shopping cart page
    Then I click Amazon button in cart page
    Then I input my amzon account info "<amazon_info>"
    Then I can select shipping method "<shipping_method>"
    Then I can go to checkout billing page
    Then I can place order with amazon successfully

Examples:
    | customer_info                        | sku_id  | shipping_address                                                                                 |shipping_method|
    | mirandafeng@aaxischina.com,123mirMIR | R53491715 |  karin,zhang,United States,California,Los Angeles,1900 Avenue of the Stars,Suite 555,90067,12122 |Ground       |
Feature: Wishlist

Scenario Outline: user can add item to wishlist from PDP
    Given I am a login user
    When I search product by "<sku_id>"
    Then I see the product "<sku_id>" in search result page
    Then I can see a quick view icon
    Then I can click the 'Go to product' button on quick view
    Then I was taken to PDP 
    Then I click  Add To Wishlist button
    Then This item added to wishlist successfully

Examples:
    | sku_id     |
    | R90169718  |
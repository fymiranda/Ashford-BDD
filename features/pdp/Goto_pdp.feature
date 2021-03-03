Feature: PDP

# user can access PDP from go to PDP from home page, quick view, cart, wishlist

@miranda
Scenario: user can access PDP  from home page
  Given I was on the home page
  Then I can see productlist
  Then I click first one product name
  Then I was taken to this product detail page


Scenario Outline: user access PDP from quick view
    Given I am on a plp "<page_url>"
    When I mouse over on one product card
    Then I can see quick view icon
    Then I was taken to PDP by clicking the Go to product button

Examples: 
| page_url                       |
| brand/hamilton.html?gender=MEN |

Scenario Outline: user can access PDP from cart page
    Given I am on a page "<page_url>"
    When I search product by "<sku_id>"
    Then I see the product "<sku_id>" in search result page
    Then I can add product to cart from PDP
    Then I can go to shopping cart page
    Then I can click product name in cart to PDP

Examples:
    | page_url             | sku_id     |
    | /womens-watches.html | R90169718  |


Scenario: user can access PDP from wishlist page
    Given I am a login user
    When I click wishlist link from global header
    Then I was taken to wishlist page
    Then I click first item's name
    Then I was taken to its detail page


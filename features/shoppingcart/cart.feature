Feature:Shopping cart

    Scenario: User can edit item quantity in cart
        Given I am on shopping cart
            And I have at least one item in cart
        When I click one item's + icon
        Then item's QTY plus 1
        When I click one item's - icon
        Then item's QTY minus 1



    Scenario: User can delete item from cart
        Given I am on shopping cart
            And I have at least one item in cart
        When I edit one item's QTY
        Then Item's QTY updated successfully


    Scenario: Cutomer can add item to wishlist from cart
        Given I am on shopping cart
            And I have at least one item in cart
        When I click one item's wishlist icon
        Then Item removed from shopping cart
            And Item added to wishlist successfully



    Scenario Outline: Customer can add product to cart from quick view
        Given I am on a plp "<page_url>"
        When I mouse over on one product card
        Then I can see quick view icon
        When I click add to cart button on quick view popup
        Then Item added to cart successfully

        Examples:
            | page_url                       |
            | brand/hamilton.html?gender=MEN |


    Scenario: Customer can apply coupon in cart
        Given I am on shopping cart
            And I have at least one item in cart
        When I apply a coupon
        Then Coupon applied successfully
        When I cancel coupon
        Then Coupon cancelled successfully

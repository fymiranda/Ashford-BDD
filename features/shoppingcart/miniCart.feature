Feature:Shopping cart

    Scenario: Customer can eidt item quatity from mini cart
        Given I have at least one item in cart
            And mini cart is expaned
        When I click one item's + icon
        Then item's QTY plus 1
        When I click one item's - icon
        Then item's QTY minus 1


    Scenario: Customer can apply coupon in mini cart
        Given I have at least one item in cart
            And mini cart is expaned
        When I apply a coupon
        Then Coupon applied successfully
        When I cancel coupon
        Then Coupon cancelled successfully


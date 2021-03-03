Feature: Checkout


    #    As a normal user
    #    I want to do below cases to test the function on gust checkout

    @test
    Scenario Outline: Anonymous user can buy single products from home page,and checkout successfully
        When I access the home page
        When I search product by "<sku_id>"
        Then I see the product "<sku_id>" in search result page
        Then I can go to PDP from PLP
        Then I can add product to cart from PDP
        Then I can go to shopping cart page
        Then I can go to checkout page from cart page
        Then I can enter the guest email
        Then I can input the shipping address "<shipping_address>"
        Then I can select shipping method "<shipping_method>"
        Then I can go to checkout billing page
        Then I can checkout with CC "<card_info>"

        Examples:
            | sku_id | shipping_address                                                            | shipping_method | card_info                   |
            | GL0142 | miranda,autotest,China,上海市,上海市，嘉定区,黄埔军校 2年1班,146000,19012345678 | HK Pickup       | 4111111111111111,1,2023,111 |
Feature:My account

Scenario Outline: User can view order info in order history and order detail
Given I was login the store "<customer_info>"
When I go to order history page
Then I can see order number "<order_num>"
Then I can see order date "<order_date>"
Then I can see order total price "<order_price>"
Then I can see order status "<order_status>"
When I click view order link
Then I can go to order detail page

Examples:
   | customer_info| order_num            | order_date | order_price | order_status|
   |mirandafeng@aaxischina.com,123abcABC | W0000002938  | 2/2/21     | $1,019.95   |COMPLETE  |
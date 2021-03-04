Feature: search

    Scenario Outline: User can search a product
        Given I am on home page
        When I  enter a keyword "<keyword>" to search
        Then I was taken to a search result page


        Examples:
            | keyword |
            | watch   |
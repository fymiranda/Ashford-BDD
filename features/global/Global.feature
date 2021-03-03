Feature: Global

#    Global scenarios for all other features

@high @finish
Scenario Outline: User can view header on browser page
    Given I am on a browse page "<page_url>"
    When I check page content
    Then I can see header info
Examples:
    | page_url                          |
    | /womens-watches.html                  |
    | /weekly-deals.html                    |

@high @finish
Scenario Outline: User can go to home page from header on browse page
    Given I am on a browse page "<page_url>" except home page
    When I click the site logo on header
    Then I can back to home page
Examples:
    | page_url                              |
    | /womens-watches.html                  |
    | /weekly-deals.html                    |

@high @finish
Scenario Outline: User can see browse footer on browse page
    Given I am on a page "<page_url>"
    When I scroll down to the end of the page
    Then I should be able to see footer there
Examples:
    | page_url                              |
    | /womens-watches.html                  |
    | /weekly-deals.html                    |

@high @finish
Scenario Outline: User can search product by SKU ID
    Given I am on a page "<page_url>"
    When I search product by "<sku_id>"
    Then I see the product "<sku_id>" in search result page
Examples:
    | page_url                              | sku_id    |
    | /womens-watches.html                  | GL0142    |
    | /weekly-deals.html                    | R13334752 |
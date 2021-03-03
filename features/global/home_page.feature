Feature: HomePage
#    In order to test the home function
#    As a normal user
#    I want to do below cases to test the function on home page

@high @finish
Scenario: User can view home page
    When I access the home page
    Then I can see top banner for home page
    Then I can see productlist

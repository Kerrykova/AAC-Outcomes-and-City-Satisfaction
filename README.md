# Project 2

Tito Odunsi, Delayna Bradshaw and Kerry Kovacik

Github Repository: https://github.com/Kerrykova/Project-2

Two datasets were found from the austintexas.gov website containing data detailing the animal center outcomes (2015-2017) and city satisfaction survey (2015-2017) responses of the city of Austin. These datasets will be compared to see if any correlations exist between various Austin resident responses regarding their satisfaction of different factors of the city and the outcomes of animals in shelters. Specifically, we will be looking at the responses to questions regarding resident's views on parks, safety, and overall satisfaction as well as demographics and comparing these by zip codes.

Multiple visualizations will be made using Tableau and Python, shedding light on comparisons between resident's city views and animal center outcomes. 

   Animal Center Outcomes Data:
    A pie chart of different type of animals. 
    A pie chart of the number of animals by outcome type. 
    A line chart showing changes of outcomes by year by animal type.
 

   Satisfaction Survey Data:
    A line chart showing changing in safety and satisfaction levels in Austin by year. 
    An interactive plot by Austin zip codes which returns data of the different survey responses (quality of life, safety, parks and rec, etc)
        Add on a layer that changes color/transparency based on a certain demographic by that zip code (we chose day safety). 
                Do this using Tableau.

Data sources: 

Austin Animal Center Outcomes
Primary Key = auto increment
https://data.austintexas.gov/Health-and-Community-Services/Austin-Animal-Center-Outcomes/9t4d-g238

City of Austin Satisfaction Surveys
ID = Primary Key
https://data.austintexas.gov/City-Government/Community-Survey-2015-2016-2017/76qk-igxn

Transformation process/steps: 
* Filter, drop and rename columns
* Aggregate animals by year for outcome types
* Filter data sets so that they both have the same date range
* Clean data by dropping any duplicates or rows missing data
* Sort the animal dataset so that the results are "grouped by" year

Data destination: 
MySQL database
Database: etlproject_db
Tables: aac_outcomes, city_satisfaction

Used ZingChart, Plotly and Tableau for visualization graphs
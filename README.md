# Project 2

Tito Odunsi, Delayna Bradshaw and Kerry Kovacik

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
Database: animal_lovers
Tables: animals, city_satisfaction
---
sidebar_position: 2
---
# Integration Tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

## Integration Test Documents for PhillyGPT

### Use Case 1 - Citizens in Philadelphia Vaccinated by Age
**Description:** A user wants to do research on COVID-19 vaccination rates by age group in Philadelphia.
- **User Action:** User loads the PhillyGPT website.
- **User Action:** User enters a prompt asking for the number of Philadelphia citizens vaccinated by age group.
- **User Action:** User submits the prompt.
- **Outcome:** The website updates dynamically and displays a table showing vaccination rates by age group in Philadelphia.
- **Outcome:** The user can view detailed age-wise vaccination statistics.

**Assertion:** User should be able to obtain accurate and detailed vaccination data by age group to assist in research or decision-making.

### Use Case 2 - Citywide Arrests for Aggravated Assault
**Description:** A user wants to know about the arrests for aggravated assault in Philadelphia for the year 2023.
- **User Action:** User loads the PhillyGPT website.
- **User Action:** User enters a prompt asking how many people were arrested for aggravated assault in 2023.
- **User Action:** User submits the prompt.
- **Outcome:** The website updates with a sentence displaying the number of aggravated assaults in 2023.

**Assertion:** User should be able to receive updated and precise data on crime statistics to enhance public awareness and safety planning.

### Use Case 3 - Finding a Farmers Market
**Description:** A user wants to find information on farmer's markets happening in Philadelphia over the upcoming weekend.
- **User Action:** User loads the PhillyGPT website.
- **User Action:** User enters a prompt to find this weekend's farmer's markets.
- **User Action:** User submits the prompt.
- **Outcome:** The website displays a table with information about each market, including names, locations, and times.
- **Outcome:** A map pinpoints the locations of these markets, aiding the user in planning their visits.

**Assertion:** User should be able to discover local farmer's markets efficiently and plan their weekend shopping accordingly.

### Use Case 4 - Parks and Recreation
**Description:** A user is curious about the largest parks in Philadelphia.
- **User Action:** User loads the PhillyGPT website.
- **User Action:** User enters a prompt asking for parks with the largest area.
- **User Action:** User submits the prompt.
- **Outcome:** A table is displayed with parks sorted by area in descending order.
- **Outcome:** A map shows the locations of these parks, allowing the user to explore different options visually.

**Assertion:** User should be able to explore and compare park areas for recreational planning or research purposes.

### Use Case 5 - Historical Landmarks
**Description:** A user visiting Philadelphia wants to learn about significant historical landmarks.
- **User Action:** User loads the PhillyGPT website.
- **User Action:** User enters a prompt asking about famous landmarks in Philadelphia.
- **User Action:** User submits the prompt.
- **Outcome:** The website displays a table with names, locations, and descriptions of historical landmarks.
- **Outcome:** A map shows their locations, facilitating visit planning.

**Assertion:** User should be able to access comprehensive information on historical landmarks to enrich their visit experience or educational research.

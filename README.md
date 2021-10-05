# symmetrical-umbrella

## Assumptions
The number of students in the queue are already known. This is required to construct the equal capacity of 4 boarding houses.

## Instructions to Run
Use command `node sortingHat.js` to see the output.

## Pseodu-Code Logic
1. Create a Set for each Boarding House. Set is used so we don't add duplicate values
2. Size of each Set = Math.Floor(Input/4)
3. Sort on the basis of Food Preference and House.
4. If Students cannot be added due to overflow add it in a seperate Set NA
Shippex Assignment Source code

Table of Contents
- Installation
- Usage
- Features


INSTALLATION
To install and run this app locally, follow these steps:

1. Clone the repository:
git clone https://github.com/paulKing321/shippex.git

2. Navigate to the project directory:
cd shippex

3. Install dependencies (using npm):
npm install or npm i --legacy-peer-deps(incase of dependency conflict)

4. Start the development server:
npm run dev

Then, Open your browser and go to http://localhost:3000 to view the app.


FEATURES
- Sign in page
- A dashboard to view shippment details
    . An empty state page
    . A no result found page
    . A full details page
- Pull to refresh functionality across application


USAGE
- When the app is launched, it takes the user to the sign in page.
- The user fills the form and submits.
- The form is validated which means the user wouldn't be able to submit if there are errors or if the user inputs the wrong details. 
- Upon successfully submission, a toast appears with the text "Welcome" and takes the user to the dashboard page.
- On the dashboard page, the empty state appears first.
- The user enters an AWB ID for tracking and clicks on the track button.
- The input is validated which means if the input is empty, less than 10 characters or more than 13 charcters, the user will not be able to submit. it show an error text instead.
- Upon succeessful submission, the full details is shown. a static data is used to populate the page sice there is no API for that. The logic to fetch the API has been removed(the same applies to the sign in, the logic to post signin details has been removed).
- There is also a no result found component that will only be displayed if the steps array for the stepper is empty. (This can be manually done to view.) 


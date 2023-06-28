# Country Information App

This is a JavaScript application that fetches and displays information about countries using the [REST Countries API](https://restcountries.com/). The app allows users to select a country from a dropdown menu and view details about the selected country, including its name, capital, region, languages, currencies, population, borders, and a link to view the country on Google Maps.

DemoLink:[Countries](https://yucel1993.github.io/Java-Script/Countries/index.html)

## Features


- Sorts the countries alphabetically by name.
- Populates a dropdown menu with the names of the countries.
- Displays detailed information about the selected country.
- Handles error cases and displays error messages if the API request fails.
- Uses the country's SVG flag as an image.

## How to Use

1. Open the `index.html` file in a web browser.
2. The page will load and fetch data for all countries from the REST Countries API.
3. Once the data is loaded, a dropdown menu will be populated with the names of the countries.
4. Select a country from the dropdown menu to view its information.
5. The selected country's information will be displayed in a card format.
6. The card will show the country's name, flag, region, capital, languages, currencies, population, borders (if any), and a link to view the country on Google Maps.
7. If there is an error during the API request, an error message will be displayed.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Fetch API

## How It Works

1. The JavaScript code uses the `window.onload` event to fetch data for all countries from the REST Countries API when the page is loaded.
2. The `fetchAllCountries` function sends a GET request to the API endpoint and handles the response.
3. If the API request is successful (`res.ok`), the response data is extracted using `res.json()` and passed to the `getCountyNames` function.
4. The `getCountyNames` function sorts the countries array alphabetically by name and populates the dropdown menu with the country names.
5. When a country is selected from the dropdown menu, the `renderCountry` function is called with the selected country's data.
6. The `renderCountry` function extracts the required information from the country object and generates HTML code to display the country's details in a card format.
7. The generated HTML is inserted into the DOM, replacing any existing content in the `.countries` div.
8. If there is an error during the API request, the `renderError` function is called to display an error message in the `.countries` div.

## Improvements

Here are some possible improvements for the application:

1. Implement search functionality to allow users to search for a country by name.
2. Add additional information about the country, such as time zones, area, and calling codes.
3. Improve the styling and layout of the card and dropdown menu to enhance the user experience.
4. Add caching or local storage functionality to reduce API requests and improve performance.
5. Implement pagination or infinite scrolling for large lists of countries.
6. Provide translations for the country names and languages based on the user's preferred language.
7. Add unit tests to ensure the application functions correctly and handle edge cases.
8. Support dark mode or theme options for the user interface.

Feel free to contribute to the project or make any modifications based on your requirements.

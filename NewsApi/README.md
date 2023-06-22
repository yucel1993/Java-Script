# News Article Viewer

This is a simple web application that fetches and displays news articles based on user-selected categories. It utilizes the NewsAPI to retrieve the latest news articles and provides a user-friendly interface for browsing and reading the articles.

## Features

- Fetches news articles from the NewsAPI based on user-selected categories.
- Displays the articles in a visually appealing format with images, titles, descriptions, authors, and published dates.
- Allows users to delete individual articles from the UI.
- Provides a "Read more" link for each article, directing users to the full article on the source website.

## Technologies Used

- JavaScript
- HTML
- CSS

## Usage

1. Clone the repository to your local machine.

2. Open the `index.html` file in a web browser.

3. Click on one of the available category buttons to fetch news articles for that category.

4. The fetched articles will be displayed in cards, showing the article's image, title, description, author, and published date.

5. To remove an article, click the "Delete" button on the corresponding card.

6. Click the "Read more" link to view the full article on the source website.

## Configuration

To run the application, you need to obtain an API key from the NewsAPI website. Follow these steps:

1. Visit the [NewsAPI website](https://newsapi.org/) and create an account.

2. Once you have an account, navigate to the API Keys page and generate a new API key.

3. Copy the generated API key.

4. In the JavaScript code (`script.js`), replace the placeholder API key with your actual API key:

   ```javascript
   const apiKey = "<YOUR_API_KEY>";

5. Save the changes.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, please open an issue or submit a pull request.


Feel free to modify the content and structure of the README.md file to suit your needs.

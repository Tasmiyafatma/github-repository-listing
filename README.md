# GitHub Repository Viewer

GitHub Repository Viewer is a single-page application built with Angular that allows users to search for a GitHub username and view the public repositories associated with that user. This application provides a simple and intuitive interface for exploring GitHub repositories.

## Key Functionalities

* **Seamless User Search:** Effortlessly search for GitHub usernames to retrieve and display their public repositories.
* **Comprehensive User Information:** View detailed user information including name, username, avatar, and a direct link to their GitHub profile.
* **Informative Repository Cards:** Each repository is presented in a dedicated card that incorporates the repository name and description for quick comprehension.
* **Streamlined Pagination:** Navigate through extensive repository lists with ease using the intuitive pagination functionality.
* **Responsive Design:** The application seamlessly adapts its layout to ensure an optimal viewing experience on a variety of devices, ranging from desktops to mobile phones.

## How to Run the Project

To run the project locally after cloning it from GitHub, follow these instructions:

1. **Clone the Repository:**

 * [Github Reposiroty Listing](https://github.com/Tasmiyafatma/github-repository-listing)

```bash
   git clone https://github.com/Tasmiyafatma/github-repository-listing.git
```

2. **Navigate to the Project Directory:**

```bash
   cd ./github-repository-listing
```

3. **Install Dependencies:**

```bash
   npm install
```

4. **Run the Development Server:**

```bash
   ng s
```

5. **Open in Browser:**

```bash
   Open http://localhost:4200/ in your web browser.
```

The development server will start, and you can view the project in your browser. Any changes made to the source code will automatically trigger a hot reload, allowing you to see the updates in real-time.

## Technologies Used

- [Angular](https://angular.io/): Front-end framework for building the single-page application.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling the application.
- [Octokit](https://github.com/octokit): JavaScript client for interacting with the GitHub API.
- [HTML5](https://html.com/html5/) and [CSS3](https://css3.com/): Markup and styling languages for structuring and styling the application.

## Usage

1. Enter a GitHub username in the search input field.
2. Press click the search button to search for repositories.
3. View the user information displayed at the top of the page.
4. Browse through the repository cards to view repository names and descriptions.
5. Use pagination controls to navigate through multiple pages of repositories.

import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css'],
})
export class SearchReposComponent implements OnInit {

  // Input field for GitHub username
  username: string = '';

  // Error message to display when api thorows and error as well as username filed is empty
  errorMessage: string | undefined;

  // Array to store fetched repositories
  repositories: any[] = [];

   // Object to store user information fetched from GitHub
  userInfo: any;

  // Flag to control whether to display fetched data
  displayData: boolean = false;

  // Flag to control whether to display loader animation
  displayLoader: boolean = false;

  // Current page number for pagination
  currentPage: number = 1;

  // Total number of pages available for pagination
  totalPages: number = 0;

  constructor(private githubService: GithubService) {}

  // Lifecycle hook called after the component's inputs have been initialized
  ngOnInit() {}

  // Function to search for repositories based on the entered username
  searchRepos(): void {
    // Validate input
    if (!this.username) {
      this.errorMessage = 'Please enter a GitHub username.';
      return;
    }

    // Reset flags and data
    this.displayLoader = true;
    this.errorMessage = undefined;
    this.userInfo = null;
    this.repositories = [];
    this.currentPage = 1;
    this.totalPages = 0;

    // Fetch user information and repositories
    this.fetchUserInformation(this.username);
    this.fetchRepositories(this.username);
  }

  // Function to fetch user information from GitHub
  async fetchUserInformation(username: string) {
    try {
      // Get user information using GitHub service
      this.userInfo = await this.githubService.getUserInfo(username);

      // Set total number of pages based on user's public repositories count
      this.totalPages = this.userInfo.public_repos;
    } catch (error: any) {
      // Handle error while fetching user information
      this.displayLoader = false;
      console.error('Error fetching user information:', error);
    }
  }

  // Function to fetch repositories for the specified username
  async fetchRepositories(username: string) {
    try {
      // Fetch repositories using GitHub service
      this.repositories = await this.githubService.getRepositories(
        username,
        this.currentPage
      );

      // Update flags to display data and hide loader
      this.displayLoader = false;
      this.displayData = true;
    } catch (error: any) {
      // Handle error while fetching repositories
      this.displayLoader = false;
      console.error('Error fetching repositories:', error);
      this.errorMessage = error;
    }
  }

  // Function to navigate to the specified page
  async goToPage(page: number) {
    // Validate page number
    if (page < 1 || page > this.totalPages) {
      return;
    }

    // Update current page and fetch repositories for the new page
    this.currentPage = page;
    this.fetchRepositories(this.username);
  }

  // Function to generate an array of page numbers for pagination
  generatePageNumbers(): number[] {
    // Calculate page count (maximum 5 pages)
    const pageCount = Math.min(5, this.totalPages);

    // Calculate starting page number
    const start = Math.max(1, this.currentPage - Math.floor(pageCount / 2));

    // Generate an array of page numbers
    return Array.from({ length: pageCount }, (_, i) => start + i);
  }
}

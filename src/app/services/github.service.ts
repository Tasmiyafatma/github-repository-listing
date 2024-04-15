import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private octokit: Octokit;

  private perPage: number = 10;

  constructor() {
    this.octokit = new Octokit({
      auth: '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',
    });
  }

  async getRepositories(username: string, page: number = 1) {
    try {
      const response = await this.octokit.request(
        'GET /users/{username}/repos',
        {
          username: username,
          per_page: this.perPage,
          page: page,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }

  async getUserInfo(username: string) {
    console.log(username);
    try {
      const response = await this.octokit.request('GET /users/{username}', {
        username: username,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  }
}

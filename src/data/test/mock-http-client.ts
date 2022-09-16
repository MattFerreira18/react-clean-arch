import HttpPostClient from "data/protocols/http/http-post-client";

/**
 * Stuntman mock
 */
// eslint-disable-next-line import/prefer-default-export
export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(url: string): Promise<void> {
    this.url = url;

    return Promise.resolve();
  }
}

import HttpPostClient from "data/protocols/http/http-post-client";

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpClient.post(this.url);
  }
}

export default RemoteAuthentication;

import HttpPostClient from "../../protocols/http/http-post-client";
import RemoteAuthentication from "./remote-authentication";

describe("remote authentication", () => {
  it("should be able to call HttpPostClient with correct URL", async () => {
    /**
     * Stuntman mock
     */
    class HttpClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;

        return Promise.resolve();
      }
    }

    const url = "https://www.api.com.br";
    const httpClientSpy = new HttpClientSpy();
    /**
     * S -> system
     * U -> under
     * T -> test
     */
    const sut = new RemoteAuthentication(url, httpClientSpy);

    await sut.auth();

    expect(httpClientSpy.url).toBe(url);
  });
});

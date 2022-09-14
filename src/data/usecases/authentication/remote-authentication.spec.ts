import { HttpPostClientSpy } from "../../test/mock-http-client";
import RemoteAuthentication from "./remote-authentication";

describe("remote authentication", () => {
  it("should be able to call HttpPostClient with correct URL", async () => {
    const url = "https://www.api.com.br";
    const httpClientSpy = new HttpPostClientSpy();
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

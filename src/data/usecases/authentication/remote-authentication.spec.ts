import { HttpPostClientSpy } from "../../test/mock-http-client";
import RemoteAuthentication from "./remote-authentication";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = "https://www.api.com.br"): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  /**
   * S -> system
   * U -> under
   * T -> test
   */
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return { sut, httpPostClientSpy };
};

describe("remote authentication", () => {
  it("should be able to call HttpPostClient with correct URL", async () => {
    const url = "https://www.api.com.br";
    const { sut, httpPostClientSpy } = makeSut(url);

    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});

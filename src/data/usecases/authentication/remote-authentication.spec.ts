import { faker } from "@faker-js/faker";

import { mockAuthentication } from "../../../domain/test/mock-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";
import RemoteAuthentication from "./remote-authentication";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
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
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);

    await sut.auth(mockAuthentication());

    expect(httpPostClientSpy.url).toBe(url);
  });

  it("should be able to call HttpPostClient with correct body", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authParams = mockAuthentication();

    await sut.auth(authParams);

    expect(httpPostClientSpy.body).toEqual(authParams);
  });
});

import HttpPostClient from "../../../data/protocols/http/http-post-client";
import { AuthenticationParams } from "../../../domain/usecases/authentication";

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async auth({ email, password }: AuthenticationParams): Promise<void> {
    await this.httpClient.post({ url: this.url, body: { email, password } });
  }
}

export default RemoteAuthentication;

import { faker } from "@faker-js/faker";
import { AuthenticationParams } from "../../domain/usecases/authentication";

// eslint-disable-next-line import/prefer-default-export
export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

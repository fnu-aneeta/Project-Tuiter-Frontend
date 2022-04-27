import {
  deleteUser,
  fetchAllUser,
  fetchUser,
  registerUser
} from "./profileService";

describe('registerUser', () => {
  const testProfile = {
    email: "test-email@domain.com",
    password: "1234"
  }

  beforeAll(() => {
        return deleteUser(testProfile.email);
      }
  );

  afterAll(() => {
        return deleteUser(testProfile.email);
      }
  );

  test('can register user with REST API', async () => {
    const newUser = await registerUser(testProfile);
     expect(newUser.email)
     .toEqual(testProfile.email);
     expect(newUser.password)
     .toEqual(testProfile.password);
  });
});
describe('deleteUser', () => {
  const testProfile = {
    email: "test-email@domain.com",
    password: "1234"
  }

  beforeAll(() => {
        return registerUser(testProfile);
      }
  );

  afterAll(() => {
        return deleteUser(testProfile.email);
      }
  );

  test('can delete user with REST API', async () => {
    const result = await
        deleteUser(testProfile.email);
    expect(result.deletedCount)
    .toBeGreaterThanOrEqual(1);

  });
});
describe('fetchUser', () => {
  const testProfile = {
    email: "test-email@domain.com",
    password: "1234"
  }

  beforeAll(() => {
        return deleteUser(testProfile.email);
      }
  );

  afterAll(() => {
        return deleteUser(testProfile.email);
      }
  );

  test('can register and find user (via email) with REST API', async () => {
    const newUser = await registerUser(testProfile);
    expect(newUser.email)
    .toEqual(testProfile.email);
    expect(newUser.password)
    .toEqual(testProfile.password);

    const existingUser =
        await fetchUser(newUser.email);
    expect(existingUser.email)
    .toEqual(testProfile.email);
    expect(existingUser.password)
    .toEqual(testProfile.password);
  });
});
describe('fetchAllUser', () => {
  const testProfile1 = {
    email: "test-profile-1@domain.com",
    password: "1234"
  }

  const testProfile2 = {
    email: "test-profile-2@domain.com",
    password: "1234"
  }

  beforeAll(async () => {
        await deleteUser(testProfile1.email);
        await deleteUser(testProfile2.email);
        await registerUser(testProfile1);
        return registerUser(testProfile2);
      }
  );

  afterAll(async () => {
        await deleteUser(testProfile1.email);
        return deleteUser(testProfile2.email);
      }
  );

  test('can find all users with REST API', async () => {
    const allUsers = await fetchAllUser();
    expect(allUsers.length).toBeGreaterThanOrEqual(2);

    const user1WeInserted = await allUsers.filter(
        user => user.email === testProfile1.email);

    await expect(user1WeInserted[0].password).toEqual(testProfile1.password);
    await expect(user1WeInserted[0].email).toEqual(testProfile1.email);

    const user2WeInserted = await allUsers.filter(
        user => user.email === testProfile2.email);

    await expect(user2WeInserted[0].password).toEqual(testProfile2.password);
    await expect(user2WeInserted[0].email).toEqual(testProfile2.email);

  });
});
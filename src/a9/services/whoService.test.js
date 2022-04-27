import {createWho, deleteWho, fetchAllWhos, fetchWho} from "./whoService";

describe('createWho', () => {
  const testWho = {
    "avatarIcon": "testIcon",
    "userName": "Tasla",
    "handle": "@Tasla"
  }

  beforeAll(() => {
        return deleteWho(testWho.handle);
      }
  );

  afterAll(() => {
        return deleteWho(testWho.handle);
      }
  );

  test('can create Who with REST API', async () => {
    const newWho = await createWho(testWho);
     expect(newWho.avatarIcon)
     .toEqual(testWho.avatarIcon);
     expect(newWho.userName)
     .toEqual(testWho.userName);
    expect(newWho.handle)
    .toEqual(testWho.handle);
  });
});
describe('deleteWho', () => {
  const testWho = {
    "avatarIcon": "testIcon",
    "userName": "Tasla",
    "handle": "@Tasla"
  }

  beforeAll(() => {
        return createWho(testWho);
      }
  );

  afterAll(() => {
        return deleteWho(testWho.handle);
      }
  );

  test('can delete Who with REST API', async () => {
    const result = await
        deleteWho(testWho.handle);
    expect(result.deletedCount)
    .toBeGreaterThanOrEqual(1);

  });
});
describe('fetchWho', () => {
  const testWho = {
    "avatarIcon": "testIcon",
    "userName": "Tasla",
    "handle": "@Tasla"
  }

  beforeAll(() => {
        return deleteWho(testWho.handle);
      }
  );

  afterAll(() => {
        return deleteWho(testWho.handle);
      }
  );

  test('can register and find who (via handle) with REST API', async () => {
    const newWho = await createWho(testWho);
    expect(newWho.avatarIcon)
    .toEqual(testWho.avatarIcon);
    expect(newWho.userName)
    .toEqual(testWho.userName);
    expect(newWho.handle)
    .toEqual(testWho.handle);

    const existingWho =
        await fetchWho(newWho.handle);
    expect(existingWho.handle)
    .toEqual(testWho.handle);
    expect(existingWho.userName)
    .toEqual(testWho.userName);
    expect(existingWho.avatarIcon)
    .toEqual(testWho.avatarIcon);
  });
});
describe('fetchAllWho', () => {
  const testWho1 = {
    "avatarIcon": "testIcon1",
    "userName": "Tasla",
    "handle": "@Tasla"
  }

  const testWho2 = {
    "avatarIcon": "testIcon2",
    "userName": "Google",
    "handle": "@Google"
  }

  beforeAll(async () => {
        await deleteWho(testWho1.handle);
        await deleteWho(testWho2.handle);
        await createWho(testWho1);
        return createWho(testWho2);
      }
  );

  afterAll(async () => {
        await deleteWho(testWho1.handle);
        return deleteWho(testWho2.handle);
      }
  );

  test('can find all whos with REST API', async () => {
    const allWhos = await fetchAllWhos();
    expect(allWhos.length).toBeGreaterThanOrEqual(2);

    const who1WeInserted = await allWhos.filter(
        who => who.handle === testWho1.handle);

    await expect(who1WeInserted[0].userName).toEqual(testWho1.userName);
    await expect(who1WeInserted[0].handle).toEqual(testWho1.handle);

    const who2WeInserted = await allWhos.filter(
        who => who.handle === testWho2.handle);

    await expect(who2WeInserted[0].userName).toEqual(testWho2.userName);
    await expect(who2WeInserted[0].handle).toEqual(testWho2.handle);

  });
});
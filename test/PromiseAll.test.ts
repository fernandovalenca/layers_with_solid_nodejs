// Exemplo de funções assíncronas fictícias que retornam promessas
function fetchUserData(userId: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Dados do usuário ${userId}`);
    }, 1000);
  });
}

function fetchUserPosts(userId: number): Promise<string[]> {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve([`Post 1 do usuário ${userId}`, `Post 2 do usuário ${userId}`]);
    }, 2500);
  });
}

describe("Promise all", () => {
  test("Fetch user and posts", async () => {
    const userId = 1;
    const [user, posts] = await Promise.all([
      fetchUserData(userId),
      fetchUserPosts(userId),
    ]);

    expect(user).toBe("Dados do usuário 1");
    expect(posts.length).toBe(2);
  });
});

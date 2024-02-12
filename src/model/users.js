import { fetchFromGithub } from './graphql-client';

export const fetchUser = async (login) => {
  const resp = await fetchFromGithub(
    `#graphql
    query user($login: String!) {
      user(login: $login) {
        avatarUrl
        repositories(first: 8, orderBy: {field: STARGAZERS, direction: DESC}) {
          edges {
            node {
              name
              stargazerCount
              nameWithOwner
              url
              isFork
              labels(first: 10) {
                edges {
                  node {
                    name
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      login,
    },
  );

  return resp.user;
};

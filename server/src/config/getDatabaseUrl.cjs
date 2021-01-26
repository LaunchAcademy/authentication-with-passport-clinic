const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/authentication-with-passport-overview_development",
      test: "postgres://postgres:postgres@localhost:5432/authentication-with-passport-overview_test",
      e2e: "postgres://postgres:postgres@localhost:5432/authentication-with-passport-overview_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;

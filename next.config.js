const withSass = require("@zeit/next-sass");

const resourcesLoader = {
  loader: "sass-resources-loader",
  options: {
    resources: ["./main.scss"],
  },
};

module.exports = withSass({
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["./src/styles/index.scss"],
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      }
    );
    return config;
  },
});

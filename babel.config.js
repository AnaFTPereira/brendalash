module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          alias: {
            "@my-monorepo/ui": "../../packages/ui",
            "@my-monorepo/content": "../../packages/content",
            "@my-monorepo/utils": "../../packages/utils",
            "@my-monorepo/config": "../../packages/config",
          },
        },
      ],
    ],
  };
};



module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 versions", ">1%"],
    }),
    require("tailwindcss"),
    require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*"],
    }),
    require("cssnano"),
  ],
};

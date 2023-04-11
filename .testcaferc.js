module.exports = {
  src: "src/tests",
  baseUrl: "http://dipro.internal-dev.dipro-tech.com",
  browsers: ["chrome"],
  speed: 1,
  skipJsErrors: true,
  skipUncaughtErrors: true,
  screenshots: {
    path: "screenshots/",
    takeOnFails: true,
    thumbnails: false,
    fullPage: true,
  },
  filter: {
    // fixtureGrep: "Page.*",
    // fixture: "The signin page",
    // test: "Click a label",
    // testGrep: "Example *",
    // testMeta: {
    //   device: "mobile",
    //   env: "production",
    // },
  },
  debugMode: false,
  debugOnFail: false,
  quarantineMode: {
    successThreshold: 1,
    attemptLimit: 3,
  },
  concurrency: 1,
  hostname: "localhost",
  qrCode: true,
  color: true,
  reporter: [
    {
      name: "spec",
    },
    {
      name: "html",
      output: "./reports/index.html",
    },
  ],
};

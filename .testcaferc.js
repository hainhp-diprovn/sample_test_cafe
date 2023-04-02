module.exports = {
  src: "src/tests",
  baseUrl: "http://dipro.internal-dev.dipro-tech.com",
  // "speed": 0.8
  skipJsErrors: true,
  screenshots: {
    path: "screenshots/",
    takeOnFails: true,
    thumbnails: false,
    fullPage: true,
  },
  debugMode: false,
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

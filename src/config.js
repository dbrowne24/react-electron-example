/**
 * Define your configuration here
 */
const path = require("path");
const url = require("url");

const WINDOW_MAIN = url.format({
  pathname: path.join(__dirname, "..", "static", "main.html"),
  protocol: "file",
  slashes: true
});

module.exports = {
  WINDOW_MAIN: WINDOW_MAIN
}
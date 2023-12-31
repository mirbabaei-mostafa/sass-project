const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function build() {
  return src("styles/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watcher() {
  watch(["styles/**/*.scss"], build);
}

exports.default = series(build, watcher);

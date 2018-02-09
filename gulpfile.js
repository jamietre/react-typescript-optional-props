let gulp = require("gulp")

let ts = require("gulp-typescript")
let tsProject = ts.createProject("tsconfig.json")
var pug = require("gulp-pug")

gulp.task("default", ["tsc", "pug"])

gulp.task("tsc", () => {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
});

gulp.task("pug", () => {
  return gulp.src("src/*.pug")
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("dist"))
})

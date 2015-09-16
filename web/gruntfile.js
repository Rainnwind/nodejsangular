(function() {
    "use strict";
}());
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: { //Check all selfwritten JS before concatting with jQuery and angularJS
            src: "js/**/*"
        },
        clean: ["dist/*"],
        concat: { //Concat all files to one BIG file
            js: { //JavaScript
                src: [
                    "core/angular.js",
                    "core/route.js",
                    "bower_components/jquery/dist/jquery.js",
                    "bower_components/bootstrap/dist/js/bootstrap.js",
                    "app/**/*.js" //Any folder and any file in folder
                ],
                filter: "isFile",
                dest: "tmp/js/main.js"
            }
        },
        uglify: { //Make it ugly and unreadable - Improves performance a great deal
            options: {
                mangle: false
            },
            target: {
                files: {
                    "dist/js/main.min.js": "tmp/js/main.js"
                }
            }
        },
        less: { //Make it ugly and unreadable - Improves performance a great deal
            options: {
                compress: true,
                ieCompat: true,
                strictMath: true,
                syncImport: true,
            },
            target: {
                files: {
                    "dist/css/main.min.css": "app/styles/app.less"
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: "app/",
                    src: "**/*.html",
                    dest: "dist"
                }]
            }
        },
        watch: {
            scripts: {
                files: ["app/**/*"],
                tasks: ["jshint", "concat", "uglify", "less", "copy"],
                options: {
                    debounceDelay: 1500,
                    spawn: true
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask("default", ["jshint", "clean", "concat", "uglify", "less", "copy", "watch"]);
};
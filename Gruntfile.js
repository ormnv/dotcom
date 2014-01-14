module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      jshint: {
        // define the files to lint
        files: ['gruntfile.js', 'assets/js/*.js', '!assets/js/main.min.js'],
        // configure JSHint (documented at http://www.jshint.com/docs/)
        options: {
          "laxcomma": true,
          "smarttabs":  true,
            // more options here if you want to override JSHint defaults
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      },
      requirejs: {
        compile: {
          options: {
            baseUrl: "assets/js",
            mainConfigFile: "assets/js/index.js",
            name: 'app',
            out: "assets/js/main.min.js",
            optimize: 'uglify2'
            }
        }
      },
      // uglify: {
      //   dist: {
      //     files: {
      //       'assets/<%= pkg.name %>.min.js': ['build/<%= concat.dist.dest %>']
      //     }
      //   }
      // },
      compass: {
        dist: {
          options: {
            sassDir: 'assets/sass',
            cssDir: 'assets/css',
            environment: 'production',
            relativeAssets: true,
            specify: 'assets/sass/dotcom.scss'
          }
        }
      },
      watch: {
        scss: {
          files: [
            'assets/sass/*.scss',
            'assets/sass/*.sass'
          ],
          tasks: ['compass']
        },
        js: {
          files: [
            '<%= jshint.files %>'
          ],
          tasks: ['jshint', 'requirejs'] 
        }
      }
      // concat: {
      //   options: {
      //     separator: ';',
      //   },
      //   dist: {
      //     src: ['assets/**/*.js'],
      //     dest: 'assets/<%= pkg.name %>.js'
      //   },
      // }
      });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'requirejs', 'watch', 'compass']);


};

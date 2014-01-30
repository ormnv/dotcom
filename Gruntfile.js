module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      jshint: {
        // define the files to lint
        files: ['gruntfile.js', 'assets/js/*.js', 'assets/js/lib/jquery.fittext.js','!assets/js/main.min.js'],
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
            optimize: 'none'
            }
        }
      },
      compass: {
        dist: {
          options: {
            sassDir: 'assets/sass',
            cssDir: 'assets/css',
            environment: 'production',
            relativeAssets: true,
            outputStyle: 'expanded',
            specify: 'assets/sass/dotcom.scss'
          }
        },
        blog: {
          options: {
            sassDir: 'blog/themes/dotcom/sass',
            cssDir: 'blog/themes/dotcom/css',
            environment: 'production',
            relativeAssets: true,
            outputStyle: 'expanded',
            specify: 'blog/themes/dotcom/sass/style.scss'
          }
        }
      },
      watch: {
        scss: {
          files: [
            'assets/sass/*.scss',
            'assets/sass/*.sass',
            'blog/themes/dotcom/sass/*.scss',
            'blog/themes/dotcom/sass/*.sass'
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
      });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'requirejs', 'watch', 'compass']);


};

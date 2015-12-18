module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        //src: 'assets/css/build/*.css',
        //dest: 'assets/css/build/index.css',
        src: 'assets/sass/*.sass',
        dest: 'assets/sass/build/index.sass'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/build/index.min.css' : 'assets/sass/build/index.sass',
        }
      }
    },
    /*cssmin: {
       dist: {
          files: {
             'assets/css/build/index.min.css' : 'assets/css/build/index.css'
          }
      }
    },*/
    watch: {
      options: {
        livereload: true,
      },
      src: {
        files: ['assets/sass/*.sass', 'index.html'],
        tasks: ['default'],
      }
    }
  });

  grunt.event.on('watch', function(action, filepath) {
    grunt.config('default', filepath);
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'sass']);
};

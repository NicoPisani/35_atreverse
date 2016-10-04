module.exports = function (grunt) {

  grunt.initConfig({
    watch :{
      gruntFileChange: {
        files: 'Gruntfile.js',
        tasks: ['sass', 'jade', 'concat']
      },
       options: {
        livereload: 9100
      },
      css: {
        files: [
          'sass/*.scss',
          'sass/components/*.scss',
          'sass/base/*.scss',
          'sass/style.scss',
        ],

        tasks: ['sass'],
      },
      jade: {
        files: [
          'jade/*.jade',
          'jade/*/*.jade',
        ],
        tasks: 'jade',
      },
      concat:{
        files: [
         'js/plugins/*.js',
         'js/plugins.js',
					
					
        ],
        tasks: 'concat',
      },
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          
           "index-1.html": "jade/index.jade",
           "index-2.html": "jade/index-2.jade",
           "index-3.html": "jade/index-3.jade",
           "index-4.html": "jade/index-4.jade",
           "index-5.html": "jade/index-5.jade",
           "index-6.html": "jade/index-6.jade",
           "about-us.html": "jade/about-us.jade",
           "causes-grid.html": "jade/causes-grid.jade",
           "causes-list.html": "jade/causes-list.jade",
           "events-list.html": "jade/events-list.jade",
           "events-grid.html": "jade/events-grid.jade",
           "team.html": "jade/team.jade",
           "contact-us.html": "jade/contact-us.jade",
           "gallery.html": "jade/gallery.jade",
           "blog.html": "jade/blog.jade",
           "blog-post.html": "jade/blog-post.jade",
           "single-cause.html": "jade/single-cause.jade",
           "404.html": "jade/404.jade",
           "coomin-soon.html": "jade/coomingsoon.jade",

        }

      }

    },
    sass: {
      dist: {
       
        files: {                        
        'style.css': ['sass/style.scss'],     
        
      },
         options : {
          style: 'expanded',
          noCache: true,
         
          
        },
      
      }
    
    },
    concat: {
      options : {
       
      },
      dist: {
      src: ['js/plugins/*.js'],
      dest: 'js/plugins.js',
    },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
  //grunt.registerTask('default', ['jade','sass','concat']);

};
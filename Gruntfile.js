module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      compass: {
        files: ['themes/ola/css/ola.scss'],
        tasks: ['compass:dev']
      },
      postcss: {
        files: ['themes/ola/css/ola.scss'],
        tasks: ['postcss']
      },
      //    options: {
      //         livereload: true,
      //     },
    },
    compass: {
      dev: {
        options: {
          sassDir: 'themes/ola/css',
          cssDir: 'themes/ola/css',
          specify: ['themes/ola/css/ola.scss'],
          imagesPath: 'images',
          noLineComments: false,
          // outputStyle: 'compressed'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'themes/ola/css/ola.css'
      }
    },
    // svg2png: {
    //     assets: {
    //         // specify files in array format with multiple src-dest mapping
    //         files: [
    //             // rasterize all SVG files in "img" and its subdirectories to "img/png"
    //             // { src: ['assets/img/*.svg'], dest: 'assets/img/png/' },
    //             // rasterize SVG file to same directory
    //             { src: ['public/images/*.svg'] }
    //         ]
    //     }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  // grunt.loadNpmTasks('grunt-svg2png');


  // grunt.registerTask('default', ['svg2png']);
};

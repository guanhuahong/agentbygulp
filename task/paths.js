var paths = {
    styles: {
        src: './src/styles/**/*.scss',
        main: './src/styles/main.scss',
        dest: './assets/styles/',
        rev: './rev/css'
    },
    scripts: {
        src: './src/scripts/**/*.js*',
        main: './src/scripts/index.js',
        dest: './assets/scripts/',
        rev: './rev/scripts'
    },
    html: {
        src: ['./src/*.html', './src/.htaccess'],
        dest: './assets/',
        rev: './rev/**/*.json',
        port: 8080
    },
    images: {
        src: ['./src/images/**/*.png', './src/images/**/*.jpg', './src/images/**/*.gif'],
        dest: './assets/images/',
    }
}

module.exports = paths;
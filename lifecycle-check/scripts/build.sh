# transpile JS
babel --presets react,es2015 js/source -d js/build
# packaging JS
browserify js/build/app.js -o bundle.js
# packaging CSS
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# Code Check（ESLint）
eslint js/source
# flow
# Complete !
date; echo;

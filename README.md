# optimusdev-web-profesional
npm i @types/node @types/core-js

npm i @angular/core @angular/common @angular/compiler
npm i @angular/platform-browser @angular/platform-browser-dynamic
npm i @angular/router @angular/forms
npm i rxjs core-js reflect-metadata zone.js

@angular/http no necessary

polyfills: SRC_DIR + '/angular-polyfills.ts',
angular: SRC_DIR + '/angular.ts'

histotyApiFallback: true,
new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.join(__dirname,"./src"),
            {}
        ),


# Personal VUE website.
This repo has been created as a personal training on using VUE framework. The code has been constructed following tutorials by https://www.youtube.com/@devspot3864

# Usage
To run it just run `npm ci` (to install modules) and `npm run serve` (to run server) in a [VSCode](https://code.visualstudio.com/) or similar Node.js editor.
Running `npm run build` creates a production version of website to be deployed on an external server.

Feel free to copy the code.

# Methods
The website uses GET and POST API from AWS DynamoDB to store projects. Authorization system fueled by Amazon Cognito blocks access to the posting page by unauthorized guests. The website can be updated by posting new project information from the browser.

# Demo
Live demo of the website has been published on AWS: http://mmazurek-vuewebsite-01.s3-website-us-west-2.amazonaws.com/


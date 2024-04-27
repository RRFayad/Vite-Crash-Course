# Module Bundlers & vite-crash-course

- References:
  - https://www.youtube.com/watch?v=5IG4UmULyoA
  - https://www.youtube.com/watch?v=LQQ3CR2JTX8

## Module Bundlers

- In theory, a web application, just need JS, HTML and CSS, but in practice, there are frameworks, libraries etc

  - So, it will create files, adjustments to different browsers, minified files etc, which would be 'impossible' to create from scratch

- To solve this issue, there are the module bundlers, such as **Webpack**, **Parcel**, **Snowpack**, etc

### What is a Module Bundler?

    - The most fundamental thing it does is take multiple JS files, and combine them to a single JS file with all the code
        - As our code has dependencies, and the dependencies have more dependencies, the module bundler keeps track of them to bundle the code

    - Let's see in practice with our index.js file and lodash

    - When we run the code below, the browser return an error, as it can not understand where to find the camelCase method:

        ```
            import { camelCase } from "lodash";
            console.log(camelCase("Hello World"));
        ```
    - So we will install WebPack as a dev dependency
        - npm install --save-dev webpack webpack-cli
        - We usually create the build script in the package.json:
            - "build": "webpack"

    - Now we run the build script, and make the HTML look for the created dist/main.js file

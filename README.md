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

    - As default, the webpack will look for an index.js file. To edit this configurations, we will create a webpack.config.js file

### Adding SCSS (and Loaders)

     - We added a style.scss file. When we try to bundle it, it says we need a loader.
        - npm install --save-dev sass

     - Webpack Loaders process files that aren't JS
        - We want to get the css code, and tell JS to inject the css styles

    - We are going to install different loaders for that:
        - npm install --save-dev css-loader style-loader sass-loader

### Plugins

    -Loaders will do the most of the heavy lifting, but we can also use plugins
        - A plugin let you to tap into the entire compilation lifecycle

    - We are gonna use npm install --save-dev webpack-bundle-analyzer
        - Add it to the webpack config
        - It will let us analyze the impact of each library in our code

### Dev Server

    - Dev Servers help us to recompile the code automatically (so I don't have to run build manually)

    - npm install --save-dev webpack-dev-server

    - Config it in the webpack.config
        - Usually we also config a script in the package json:
            -  "dev": "webpack serve"

### Other Builders

- Other builders are kinda the same, but Snowpack kind of split the build in chuncks, in order to avoid redundancy when rebuilding (mainly the modules), so it will rebuild faster

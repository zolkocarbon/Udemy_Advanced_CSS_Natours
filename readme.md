# Notes from Udemy Course Advanced CSS and SASS

### Process of building CSS sheet
- Block Element Modifier - BEM
    ```css
        .block {};
        .block__element {}; /* two underscores */
        .block__element--modifier {};
    ```

### What is SASS?
- CSS preprocessor, an extension of CSS
- Called preprocessor because a compiler is needed to change it to CSS code
- Two syntax methods, SASS and SCSS, SCSS is used in this course
- **Features** ([Link to CodePen](https://codepen.io/zolkocarbon/pen/XEmJJg) using all examples below)
    + Variables: for reusable values such as color and font size
    ```scss
    $color-primary: #f9ed69; //comment in SASS
    ```

    + Nesting: nest selectors inside one another
        ```scss
        .navigation {
            list-style: none;
            float: left;

            li {
                display: inline-block;
                margin-left: 30px;

                &:first-child {
                margin: 0;
                }

                a:link { //translates to .navigation li a:link {}
                @include style-link-text($color-text-dark);
                } 
            }
        }
        ```
    + Operators: for mathmatical operations inside CSS (example below in [Functions](#functions))
    + Partials and imports: to write CSS in different files and import them all into one single file
    + Mixins: to write reusable pieces of CSS code
        ```scss
            @mixin clearfix {
                &::after {
                    content: "";
                    clear: both;
                    display: table;
                }
            }

            nav {  
                @include clearfix
            }
        ```
        A mixin with an argument
        ```scss
            @mixin style-link-text($color) {
                text-decoration: none;
                text-transform: uppercase;
                color: $color;
            }

            .btn-hot:link {
                @include style-link-text($color-text-light);
            }
        ```
    + <a name="functions"> Functions: like mixins, with the difference that they produce a value for later use </a>
        ```scss
        @function divide($a, $b) {
            @return $a / $b;
        }

        nav {
            margin: divide(60, 2) * 1px;
        }
        ```
        SASS also features built-in functions. [Link to list](http://sass-lang.com/documentation/Sass/Script/Functions.html) of built in fuctions.
    + Extends: to make different selectors inherit declarations that are common to all of them
        Before using extends
        ```scss
        .btn-main:link,
        .btn-hot:link {
            padding: 10px;
            display: inline-block;
            text-align: center;
            border-radius: 100px;
            width: $width-button;
            @include style-link-text($color-text-light);
        }

        .btn-main {
          &:link {
            background-color: $color-secondary;
          }

          &:hover {
            background-color: darken($color-secondary, 15%);
          } // darken is built-in SASS function
        }
        ```
        After using extend
        ```scss
            %btn-placeholder {
                padding: 10px;
                display: inline-block;
                text-align: center;
                border-radius: 100px;
                width: $width-button;
                @include style-link-text($color-text-light);
            }

            .btn-main {
                &:link {
                  @extend %btn-placeholder;
                  background-color: $color-secondary;
                }

                &:hover {
                    background-color: darken($color-secondary, 15%);
                } // darken is built-in SASS function
            }
        ```
        Note: while this may look similar to a mixin the complied CSS code does look different.
        The extend will create a class selector .btn-main:link, .btn-hot:link {} while the mixin would 
        create duplicates of code in the btn-main and btn-hot seperate selectors.
    + Control directives: for writing complex conditionals and loops (not covered in this course)

## Nodejs installation and SASS setup
1. Install nodejs from [here](https://nodejs.org/en/) on your computer.
    > Note: I was having issues installing node. After an hour of searching forums it turned out that I needed to turn off the virus protection.

1. Confirm node is installed by typing *node -v* in the terminal. (I did this in the Visual Studio terminal)

1. Navigate into project folder using the terminal commands.

1. Create package.json file by typing *npm init* in the terminal.
    + The prompt will prompt several questions for creating the file. In most cases the fields can be left blank or default values used.
    + If you download/clone someone's project and want to install all dependencies simply run *npm install* in the terminal and 
    all dependencies in the package.json file will be installed. This illustrates the main purpose of this file. Another scenario is working on one project on more than one computer.
    + When uploading a project to a repository don't upload the node_modules file as it is not necessary.

1. Install SASS npm package by typing *npm install node-sass --save-dev* in the terminal.
    + The --save-dev saves the development dependencie in the package.json file.
    + Other packages such as jQuery should be saved as *--save* because they are non-development dependencies.
    + To uninstall a package (jQuery example) type *npm uninstall jquery --save* in the terminal.

## Creating and compiling SASS/SCSS file.
    1. Create sass folder.
    1. Create main.scss file.
    1. Copy all content of style.css into it.
    1. Modify package.json file
        ```javascript
        "scripts": {
            "compile:sass": "node-sass sass/main.scss css/style2.css"
        },
       ```
        + *compile:sass* is the name of the command we will use in the terminal.
        + *sass/main.scss* is the name and location of the SASS file to compile.
        + *css/style2.css* is the CSS file you want SASS to create and it's location.
    1. Type *npm run compile:sass* in the terminal to compile the SASS file.
    






# Notes from Udemy Course Advanced CSS and SASS

### Process of building CSS sheet
- Block Element Modifier - BEM

    Example

    .block {}

    .block__element {}

    .block__element--modifier {}

### What is SASS?
- CSS preprocessor, an extension of CSS
- Called preprocessor because a compiler is needed to change it to CSS code
- Features
    + Variables: for reusable values such as color and font size
      ```css
        $color-primary: #f9ed69; //comment in SASS
      ```

    + Nesting: nest selectors inside one another
    + Operators: for mathmatical operations inside CSS
    + Partials and imports: to write CSS in different files and import them all into one single file
    + Mixins: to write reusable pieces of CSS code
    + Functions: like mixins, with the difference that they produce a vaule for later use
    + Extends: to make different selectors inherit declarations that are common to all of them
    + Control directives: for writing complex conditionals and loops (not covered in this course)


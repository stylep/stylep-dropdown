# stylep-dropdown
<img src=https://avatars1.githubusercontent.com/u/16121328?v=3&s=200 title=stylep align=right height=95>

A simple dropdown for your next project.

## Install
You can install using the [spm](https://github.com/stylep/stylep) command or install using npm and the project name.

``` shell
spm install dropdown
```

## Usage
``` css
/* dropdown.css */

@import “stylep-dropdown”;

.dropdown {

  /* Dropdown Design Pattern */
  @mixin dropdown-inline;
  @mixin dropdown-callout-inline;
  @mixin dropdown-callout-top-right;

  /* Customize your dropdown */
  @mixin dropdown-solid #fff, #efefef, #000;
  @mixin dropdown-callout-solid #fff;

  /* or roll your own */

  /* add something custom in here */
}
```

## Patterns
Placeholder selectors that contain common styles for structure and basic behavior.

#### `dropdown`
Simple mechanics of how all dropdowns are drawn.

##### Options

* `$dropdown-padding: 0` Option to add space inside the dropdown

#### `dropdown-inline`
A inline verison of the dropdown.

##### Options

* `$dropdown-padding: 0`
* `$dropdown-margin: 0`
* `$dropdown-min-width: 100px`

#### `dropdown-block`
A block version of the dropdown.

##### Options

* `$dropdown-padding: 0`
* `$dropdown-margin: 0`

#### `dropdown-callout-inline`
Generates a `::before` pseudo-class that draws a rotated square

* `$dropdown-callout-size: 15` **Note:** changing this may break positioning.

#### `dropdown-callout-margin`
Applys margin to the dropdown to account for the offset of the callout.

* `$side` Accepts `top`, `right`, `bottom`, `left`.
* `$offset: 7.5px`

#### `dropdown-callout-position`
Simply sets the positioning and margins of a callout for absolute positioning.

* `$top: auto`
* `$right: auto`
* `$bottom: auto`
* `$left: auto`

#### `dropdown-callout-<position>`
Places the dropdown-callout pinned to the main dropdown in the following accepted positions `top`, `top-right`, `top-left`, `bottom`, `bottom-right`, `bottom-left`, `right`, `right-top`, `right-bottom`, `left`, `left-top`, `left-top`, `left-bottom`.

##### Options

* `$offset: 7.5px`

## Styles
Customizable presets that give your pattern a specific style-set.

#### `dropdown-solid`
A dropdown with a solid background

##### Options

* `$dropdown-color: #f7f7f7`
* `$dropdown-selected-color: #e8e8e8`
* `$dropdown-text-color: #444`
* `$dropdown-radius: 0`
* `$dropdown-shadow: 0 0 3px 1px rgba(0, 0, 0, .4)`

#### `dropdown-hollow`
A dropdown with a hollow background

##### Options

* `$dropdown-color: #444`
* `$dropdown-background-color: #fff`
* `$dropdown-border-width: 1px`
* `$dropdown-radius: 0`

#### `dropdown-callout-solid`
A solid callout for a dropdown

##### Options

* `$dropdown-callout-color: #f7f7f7`
* `$dropdown-callout-shadow: 0 0 3px 1px rgba(0, 0, 0, .4)`

#### `dropdown-callout-hollow`
A hollow callout for a dropdown

##### Options

* `$dropdown-callout-color: #fff`
* `$dropdown-callout-border: 1px solid #444`

## License
This project is licensed under the MIT [license](LICENSE).

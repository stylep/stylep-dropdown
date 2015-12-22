# stylep-dropdown

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

.class {

  /* Button Design Pattern */
  @extend %dropdown-inline;

  /* Customize your button */
  @mixin dropdown-solid #fff, #efefef, #000;

  /* or roll your own */

  /* add something custom in here */
}
```

## Patterns
Placeholder selectors that contain common styles for structure and basic behavior.

#### `@extend %dropdown;`
Describe what this pattern does.

## Styles
Customizable presets that give your pattern a specific style-set.

### dropdown-solid
Describe the visual look and feel of this style.

##### Options

* `$param-dropdown: default-value` Describe what this does

##### Example
```css
/* describe in english what this following statement really means in detail */
@mixin dropdown default-value;
```


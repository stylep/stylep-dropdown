# stylep-dropdown

A simple dropdown for your next project.

## Install
``` shell
npm i --save-dev stylep-dropdown
```

## Usage
``` css
/* name.css */

@import “stylep-dropdown”;

.class {

  /* Button Design Pattern */
  @extend %dropdown;

  /* Customize your button */
  @mixin dropdown param, param;

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


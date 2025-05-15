# FloatingDropdown
Simple reusable web component for web games linking to the [Vault](https://vault.fielddaylab.wisc.edu/)

This repository houses a reusable HTML component for the Vault floating dropdown on free browser-based games. There are two pieces used for this component: 
1. The HTML template used to display the component on the dom 
2. the Unity javascript plugin to be used to remove the button after exiting the title screen.

## 1. Adding the Component
This example illustrates how this component can be added to a project

### Step 1: Add a custom component to the header of the index file

```javascript
<script src="FloatingDropdown/index.js"></script>
```

### Step 2: Add the custom element to the body of the file

This element uses ***slots*** to make the component more flexible. If you are unfamiliar with slots, you can read more [here](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots#adding_flexibility_with_slots)

Example template use:
```javascript
<body>
    <floating-dropdown>
        <style>
            /* custom styles here */
        </style>
        <img slot="header" src="FloatingDropdown/vault-library-logo.png" alt="Vault Games Library">
        <span slot="desc" class="content">
            Field Day presents the largest collection of
            <span style="color:#00ECD0">FREE</span>
            learning games on the web.
        </span>
        <span slot="button-label" class="content">
            OPEN VAULT
        </span>
    </floating-dropdown>
    <div id="BrainPOPsnapArea">
...
```

## 2. Modifying the component

The Vault component is designed to be adjusted across different games. Using a custom style tag (see example from step 1) you can easily modify these parameters with the following custom properties:

``--left-offset`` : Controls the horizontal position of the dropdown. The dropdown is controlled by an offset from the left of the screen that uses a "<length-percentage>" value.

``--custom-font`` : Defines the value used for the font-family parameter of the body of the dropdown. Accepts any "<string>" value 

``--scale-factor`` : Allows the size of the entire dropdown to be altered. Accepts any "<length-percentage>" value.

Example:
```javascript
    floating-dropdown {
        --custom-font: "brandon-grotesque";
        --left-offset: 65%;
        --scale-factor: 0.9;
    }
```

# Customization Guide

## Design System & Branding
RescueHope is built to be easily customizable. We use CSS variables to manage the global color palette and font settings, making it simple to adapt the template to your organization's brand.

### Modifying Colors
The core color palette is defined in `assets/css/style.css` under the `:root` scope. To change brand colors, update the following variables:

```css
:root {
    --primary: #f57c00;
    --primary-hover: #e65100;
    --secondary: #2e7d32;
    --accent: #0288d1;
}
```
*Tip: Also ensure you update the Tailwind CDN config block inside the `<head>` of your HTML files if you are using Tailwind utility classes for these colors.*

### Dark Mode
Dark mode is fully supported. Toggle styles and overrides are located in the `[data-theme="dark"]` selector block within the CSS files. Dark mode automatically detects system preferences and stores the user's choice in `localStorage`.

### Updating the Logo
1. Navigate to `assets/images/ui/` (or `assets/images/`).
2. Replace `favicon.png` or your logo image files. 
3. Ensure you update the image `src` inside the HTML navbar and footer sections.

### Editing Fonts
By default, the template uses Google Fonts (Outfit). To change the font:
1. Update the Google Fonts `<link>` tag in the `<head>` of the HTML files.
2. Update the `--font-main` and `--font-heading` CSS variables in `assets/css/style.css`.
3. Update the `fontFamily` setting in the Tailwind script config if necessary.

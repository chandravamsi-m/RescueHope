# Page Structure

This template adheres to a strict and clean monolithic architecture without heavy JavaScript frameworks, making it easy to read and modify.

## Directory Layout

```text
RescueHope/
├── assets/                  # Core assets (CSS, JS, Fonts, Images)
│   ├── css/                 # Global styles, dark mode, RTL overrides
│   ├── fonts/               # Self-hosted typography
│   ├── images/              # Local images (ui, hero, content)
│   └── js/                  # main.js, dashboard.js, etc.
├── auth/                    # Authentication templates
│   ├── login.html
│   └── register.html
├── documentation/           # You are here!
├── pages/                   # All internal service and info pages
│   ├── about.html
│   ├── adopt.html
│   ├── ...
├── index.html               # Homepage version 1
├── robots.txt               # SEO and spider permissions
├── sitemap.xml              # SEO structural mapping
└── README.md                # Project abstract
```

## HTML Component Re-use
We rely on a simple copy-paste approach rather than complex component injectors. 
* To add a new section, copy a `<section class="section">` block.
* Standardized sections are prepended with `<!-- SECTION: [NAME] -->` to keep the code clear.

## Navbars and Footers
With the exception of the authentication/dashboard pages, every standard public page contains the exact same Navbar and Footer HTML blocks. If you edit the navigation links or the footer copyright, make sure to update it across your `index.html` and the `pages/` templates manually or using your server's backend template includes (like PHP or Node partials) when you integrate the design.

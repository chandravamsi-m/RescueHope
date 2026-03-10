# 🐾 RescueHope — Local Non-Profit / Animal Rescue HTML Template
### Complete Development Blueprint

---

## Table of Contents

1. [Template Overview](#1-template-overview)
2. [Architecture Overview](#2-architecture-overview)
3. [Public Website Pages](#3-public-website-pages)
4. [Homepage Layouts](#4-homepage-layouts)
5. [Authentication Pages](#5-authentication-pages)
6. [User (Volunteer) Dashboard Pages](#6-user-volunteer-dashboard-pages)
7. [Admin Dashboard Pages](#7-admin-dashboard-pages)
8. [Navigation Structure](#8-navigation-structure)
9. [Component Library](#9-component-library)
10. [Feature Breakdown](#10-feature-breakdown)
11. [Folder Structure](#11-folder-structure)
12. [Responsive Design Strategy](#12-responsive-design-strategy)
13. [Animation & Interaction Ideas](#13-animation--interaction-ideas)
14. [SEO & Performance Strategy](#14-seo--performance-strategy)
15. [Development Notes](#15-development-notes)

---

## 1. Template Overview

| Field               | Details                                                                 |
|---------------------|-------------------------------------------------------------------------|
| **Template Name**   | RescueHope                                                                |
| **Template Category** | Non-Profit / Animal Rescue                                            |
| **Target Audience** | Local animal rescue organizations, shelters, foster networks, humane societies |
| **Template Purpose** | Drive donations and volunteer sign-ups; transparently showcase rescue impact through animal stories, photo galleries, adoption listings, and real-time impact statistics. Includes a volunteer-facing dashboard for shift sign-ups, foster animal medical records, and recurring donation management. |

---

## 2. Architecture Overview

RescueHope is a dual-surface template consisting of two tightly integrated systems:

### 2.1 Public Marketing Website
The public-facing website is the primary vehicle for community engagement. It is designed to emotionally connect visitors with the rescue's mission through storytelling, transparent impact reporting, and clear pathways to donate, volunteer, or adopt. It is fully accessible to unauthenticated visitors.

### 2.2 Volunteer User Dashboard
A protected portal for registered volunteers. Enables volunteers to browse and sign up for available shifts, track medical records for animals in their foster care, view their contribution history, and manage recurring donations. This is the primary operational tool for active community members.

### 2.3 Admin Dashboard
A protected back-office interface for organization staff and administrators. Enables full management of volunteers, animals, shifts, donation records, foster assignments, and website content (stories, events, adoptable animals).

> **Dashboard Requirement:** YES — required for shift scheduling, foster medical record tracking, and recurring donation management.

---

## 3. Public Website Pages

### 3.1 Core Pages (Required for All Templates)

| Page            | Slug              | Purpose                                                                 |
|-----------------|-------------------|-------------------------------------------------------------------------|
| Home 1          | `/index.html`     | Emotional hero, mission statement, impact stats, featured animals, CTA  |
| Home 2          | `/home-2.html`    | Story-led layout with photo essay hero, donation ticker, volunteer CTA  |
| About Us        | `/about.html`     | Organization history, mission & values, team/staff, board members       |
| Services        | `/programs.html`  | Overview of rescue programs (fostering, adoption, TNR, community outreach) |
| Contact         | `/contact.html`   | Contact form, location/service area map, social links, volunteer inquiry |
| 404 Error       | `/404.html`       | Custom error page with friendly animal illustration and navigation links |
| Coming Soon     | `/coming-soon.html` | Pre-launch or campaign countdown page with email capture               |

### 3.2 Non-Profit / Animal Rescue Specific Pages

| Page                    | Slug                        | Purpose                                                                  |
|-------------------------|-----------------------------|--------------------------------------------------------------------------|
| Adoptable Animals       | `/adopt.html`               | Filterable gallery of animals available for adoption                     |
| Animal Detail           | `/animal-detail.html`       | Single animal profile: photos, story, medical status, adoption form      |
| Success Stories         | `/stories.html`             | Grid of adoption and rescue stories with photos and testimonials         |
| Single Story            | `/story-detail.html`        | Full narrative of a single rescue or adoption story                      |
| Donate                  | `/donate.html`              | Donation landing page: one-time, recurring, and in-kind gift options     |
| Volunteer               | `/volunteer.html`           | Volunteer program overview, open roles, and sign-up prompt               |
| Events                  | `/events.html`              | Upcoming fundraisers, adoption fairs, and community events               |
| Single Event            | `/event-detail.html`        | Event details, registration, and map                                     |
| Foster Program          | `/foster.html`              | How fostering works, FAQ, and foster application form                    |
| Impact / Transparency   | `/impact.html`              | Annual stats, fund allocation breakdown, rescue milestones               |
| Blog / News             | `/blog.html`                | Organization news, rescue updates, and animal care tips                  |
| Single Blog Post        | `/blog-detail.html`         | Full article with author, tags, related posts, and comment prompt        |
| Privacy Policy          | `/privacy.html`             | Legal privacy policy                                                     |
| Terms of Service        | `/terms.html`               | Legal terms and conditions                                               |

---

## 4. Homepage Layouts

### 4.1 Home 1 — "Mission First" Layout

> Emotionally driven, urgency-focused layout designed to convert first-time visitors into donors or volunteers immediately.

| Section Order | Section Name            | Description                                                                 |
|---------------|-------------------------|-----------------------------------------------------------------------------|
| 1             | **Navbar**              | Transparent overlay on hero; scrolls to solid background                    |
| 2             | **Hero**                | Full-width image/video background; bold headline + mission tagline; dual CTA buttons: "Adopt" and "Donate Now" |
| 3             | **Impact Counter Bar**  | Animated counters: Animals Rescued / Adopted / In Foster Care / Active Volunteers |
| 4             | **Featured Animals**    | Horizontal scroll card row of 4–6 adoptable animals with name, species, age, quick "Meet Me" CTA |
| 5             | **Mission Statement**   | Two-column: Large pull-quote text left + illustrative image right           |
| 6             | **How You Can Help**    | Three icon cards: Adopt · Donate · Volunteer — each linking to deeper pages |
| 7             | **Latest Success Story**| Full-bleed story card with before/after photos and short narrative excerpt  |
| 8             | **Donation CTA**        | Warm-toned section with preset donation amount buttons ($10 / $25 / $50 / Custom) and a "Give Monthly" toggle |
| 9             | **Upcoming Events**     | Horizontal 3-card row of nearest upcoming events                            |
| 10            | **Volunteer Spotlight** | Testimonial card from a featured volunteer with photo and quote             |
| 11            | **News / Blog Preview** | 3-column blog card grid (latest posts)                                      |
| 12            | **Partners & Sponsors** | Grayscale logo strip (hover to color)                                       |
| 13            | **Newsletter Signup**   | Full-width banner with email input (Mailchimp-compatible placeholder)       |
| 14            | **Footer**              | Multi-column: About blurb / Quick links / Programs / Contact / Social icons |

---

### 4.2 Home 2 — "Story & Impact" Layout

> Photo-essay style layout centered on transparency and emotional storytelling; ideal for campaigns and awareness periods.

| Section Order | Section Name             | Description                                                                 |
|---------------|--------------------------|-----------------------------------------------------------------------------|
| 1             | **Navbar**               | Solid background with top utility bar (phone + hours + donate button)       |
| 2             | **Story Hero**           | Split-screen layout: large rescue photo left / headline + short story excerpt + CTA right |
| 3             | **Live Donation Ticker** | Scrolling or animated strip: "Sarah just donated $25" style social proof    |
| 4             | **Impact Infographic**   | Visual fund allocation breakdown (icon + percentage: Medical Care / Food / Rescue Ops / Community Outreach) |
| 5             | **Animal of the Week**   | Feature card: single animal with extended story, multiple photos, adoption link |
| 6             | **Story Gallery**        | Masonry photo grid of rescue and adoption stories (hover shows animal name + outcome badge) |
| 7             | **Foster Program CTA**   | Two-column: Foster program overview text + simple "Apply to Foster" form inline |
| 8             | **Volunteer Timeline**   | Visual step-by-step: How to become a volunteer (icon steps with descriptions) |
| 9             | **Donation Tiers**       | Card-based display of giving levels with named impact ("$50 feeds a litter for a week") |
| 10            | **Events Countdown**     | Highlight card for next major fundraising event with countdown timer        |
| 11            | **Press & Media**        | Logo strip of media outlets that covered the organization                   |
| 12            | **Social Feed Preview**  | Embedded social proof section (static placeholder cards mimicking Instagram/Facebook posts) |
| 13            | **FAQ Accordion**        | Common questions: adoption process, donation use, volunteering requirements |
| 14            | **Footer**               | Same structure as Home 1; may include additional donate button in footer bar |

---

## 5. Authentication Pages

All authentication pages share a consistent two-column layout: a branded emotional image/illustration on the left, and the form on the right. Full dark/light mode and RTL support required on all auth pages.

| Page               | Slug                      | Fields / Elements                                                       |
|--------------------|---------------------------|-------------------------------------------------------------------------|
| **Login**          | `/auth/login.html`        | Email, Password, "Remember Me" checkbox, Forgot Password link, Social login placeholder (Google), Sign Up link |
| **Sign Up**        | `/auth/register.html`     | First Name, Last Name, Email, Password, Confirm Password, Role selector (Volunteer / Foster / Donor), Terms checkbox, Submit |
| **Forgot Password**| `/auth/forgot-password.html` | Email field, Submit, Back to Login link, Confirmation state message   |
| **Reset Password** | `/auth/reset-password.html`  | New Password, Confirm Password, strength indicator, Submit            |
| **Email Verify**   | `/auth/verify-email.html` | Confirmation message state, Resend link, visual check animation        |

> **Note:** Role selection at registration determines which dashboard view the user sees upon first login.

---

## 6. User (Volunteer) Dashboard Pages

The volunteer dashboard is a clean, sidebar-based layout with a persistent top header showing the user's name, notification bell, and avatar. The primary functions are shift management, foster animal records, and donation management.

### 6.1 Dashboard Overview

**Slug:** `/dashboard/index.html`

**Widgets & Content:**
- Welcome card with user name and current volunteer tier/status badge
- "Your Next Shift" upcoming shift countdown card
- Animals currently in foster care (quick-link cards with photo + name)
- Total volunteer hours (current month + all-time)
- Recent donations summary card
- Notification feed (shift reminders, medical record updates, rescue alerts)
- Quick Actions bar: "Sign Up for a Shift" · "Log Medical Update" · "Make a Donation"

---

### 6.2 Shift Management

**Slug:** `/dashboard/shifts.html`

**Content:**
- Calendar view (month/week toggle) displaying available and registered shifts
- Shift list view with filters: Location / Animal Type / Shift Type (Transport / Shelter / Event)
- "Sign Up" CTA per available shift with capacity indicator (e.g., 3 of 5 spots filled)
- My Registered Shifts tab: upcoming confirmed shifts with cancel option
- Shift history table: past shifts with date, role, hours logged, and status badge

---

### 6.3 Foster Animal Records

**Slug:** `/dashboard/foster-animals.html`

**Content:**
- Grid of animals currently in the volunteer's foster care (photo, name, species, intake date)
- Per-animal detail panel / modal:
  - Animal profile: name, breed, age, weight, rescue date
  - Medical records timeline: vaccinations, vet visits, medications, next appointment
  - "Log New Medical Update" form (date, type, notes, photo upload placeholder)
  - Feeding / behavior notes section
  - Foster status badge: Active / Ready for Adoption / Pending Vet Clearance
- Return / Transfer request button (triggers admin notification)

---

### 6.4 My Donations

**Slug:** `/dashboard/donations.html`

**Content:**
- Active recurring donation card: amount, frequency, next billing date, pause/cancel controls
- One-time donation history table: date, amount, campaign, receipt download link
- "Make a New Donation" CTA with amount presets
- Total giving summary card (year-to-date + all-time)
- Tax receipt download section (PDF placeholder links per year)

---

### 6.5 My Events

**Slug:** `/dashboard/events.html`

**Content:**
- Registered upcoming events list with date, location, and cancel registration option
- Past events I attended table
- "Browse Open Events" CTA linking to public events page

---

### 6.6 My Profile

**Slug:** `/dashboard/profile.html`

**Content:**
- Avatar upload placeholder
- Personal info form: name, email, phone, address, emergency contact
- Volunteer skills/interests checklist (dog care, cat care, transport, photography, etc.)
- Availability schedule grid (days/times available per week)
- Notification preferences toggles (email, SMS placeholders)
- Password change form
- Account deletion section (with confirmation safeguard)

---

### 6.7 Notifications

**Slug:** `/dashboard/notifications.html`

**Content:**
- Full notification inbox with read/unread states
- Notification categories: Shift Reminders / Medical Alerts / Donation Receipts / Organization Updates
- Mark all as read, individual dismiss controls

---

### 6.8 Volunteer Hours Log

**Slug:** `/dashboard/hours.html`

**Content:**
- Monthly hours breakdown table (shift, date, hours, supervisor sign-off status)
- Total hours summary card with progress toward annual recognition tier
- Certificate of volunteer service download placeholder (for completed tiers)

---

## 7. Admin Dashboard Pages

The admin dashboard shares the same layout shell as the volunteer dashboard but exposes full organization management controls. Admin-specific navigation items are clearly distinguished.

### 7.1 Admin Overview

**Slug:** `/admin/index.html`

**Widgets:**
- KPI cards: Total Animals in Care / Active Volunteers / Open Shifts / Monthly Donations / Pending Adoptions
- Recent activity feed (new sign-ups, donations, medical log entries, adoption requests)
- Weekly shift fill rate chart (bar chart placeholder)
- Monthly donation trend chart (line chart placeholder)
- Urgent alerts: Animals with overdue vet appointments / Unfilled urgent shifts

---

### 7.2 Animal Management

**Slug:** `/admin/animals.html`

**Content:**
- Full paginated table of all animals: ID, name, species, breed, status, foster volunteer, intake date
- Status filters: Available / In Foster / Adopted / Medical Hold / Deceased
- Add New Animal form/modal: full intake form with photo upload placeholder
- Per-row actions: View Profile / Edit / Assign Foster / Mark Adopted / Archive
- Animal detail view: complete profile, full medical record timeline, foster history

---

### 7.3 Volunteer Management

**Slug:** `/admin/volunteers.html`

**Content:**
- Searchable table of all registered volunteers: name, email, role, status, hours logged, join date
- Status filters: Active / Pending Approval / Inactive / Flagged
- Volunteer approval workflow: review profile, approve or reject registration with note
- Per-row actions: View Profile / Edit Role / Deactivate / Export Record
- Bulk action support: export selected, send notification to selected

---

### 7.4 Shift Management

**Slug:** `/admin/shifts.html`

**Content:**
- Calendar view of all shifts (admin view shows all volunteers assigned per slot)
- Create Shift modal: date, time, location, type, capacity, required skills, description
- Shift list view with fill status progress bars
- Per-shift actions: Edit / Cancel / View Signups / Send Reminder
- Auto-reminder configuration placeholder (trigger x hours before shift)

---

### 7.5 Foster Management

**Slug:** `/admin/foster.html`

**Content:**
- Table of all active foster assignments: animal, foster volunteer, start date, status
- Assign Animal to Foster form (dropdown selects from available animals + verified fosters)
- Medical record oversight: flag overdue log entries
- Foster application review queue: approve / deny / request more info

---

### 7.6 Donation Management

**Slug:** `/admin/donations.html`

**Content:**
- Donation log table: donor name, amount, type (one-time / recurring), campaign, date, status
- Filters: date range, type, campaign, amount range
- Recurring donation management: list of active recurring donors with ability to flag or manage
- Export to CSV placeholder
- Donation campaign management: create, name, set goal, set duration, activate/deactivate

---

### 7.7 Adoption Management

**Slug:** `/admin/adoptions.html`

**Content:**
- Adoption application table: applicant name, animal, submission date, status
- Application status pipeline: Submitted → Under Review → Interview Scheduled → Approved / Denied
- Per-application detail view: applicant answers, household info, references
- Status update controls with note field
- Adoption success marking (triggers story creation prompt for public site)

---

### 7.8 Content Management

**Slug:** `/admin/content.html`

**Content:**
- Success Stories management: list, add, edit, publish/unpublish, delete
- Blog Posts management: list, add, edit, status (draft/published), delete
- Events management: list, create, edit, publish, cancel
- Homepage featured animals selector (choose which animals appear in public homepage cards)
- Impact stats editor: update the publicly displayed counters (animals rescued, adopted, etc.)

---

### 7.9 Reports & Analytics

**Slug:** `/admin/reports.html`

**Content:**
- Volunteer activity report: hours by volunteer, shifts by month, retention rate placeholder
- Donation report: monthly totals, year-over-year comparison, top donors table
- Animal outcome report: intake vs. adoption vs. return rate (chart placeholders)
- Foster program report: active fosters, average foster duration, recurrence rate
- Export all reports as CSV (placeholder)

---

### 7.10 Admin Settings

**Slug:** `/admin/settings.html`

**Content:**
- Organization profile: name, logo upload placeholder, address, contact info, mission blurb
- Email notification settings: which events trigger automated emails
- Volunteer tiers configuration: define hour thresholds for recognition badges
- Donation campaign defaults: default amounts, giving page copy
- User role management: define permissions per role (Admin / Staff / Volunteer / Foster / Donor)
- Danger zone: data export, account actions

---

## 8. Navigation Structure

### 8.1 Public Website Navbar

**Layout:** Logo left · Navigation center · Action buttons right  
**Behavior:** Transparent on hero pages (Home 1, Home 2), solid on scroll and on all interior pages  
**Mobile:** Collapses to hamburger menu (minimum 44px touch target)

```
LOGO
  Home ▾
    ├── Home 1 (Default)
    └── Home 2 (Story Layout)
  About
  Adopt ▾
    ├── Adoptable Animals
    ├── Animal of the Month
    └── Adoption Process
  Programs ▾
    ├── Foster Program
    ├── Volunteer
    └── Community Outreach
  Impact
  Stories
  Events
  Blog
  Contact
                                   [ 🌙 Dark Mode Toggle ]  [ Login ]  [ Donate Now ← Primary CTA ]
```

> The **"Home" nav item must include a dropdown** linking to both Home 1 and Home 2 as specified.

---

### 8.2 Volunteer Dashboard Sidebar

**Layout:** Fixed left sidebar · Collapsible on tablet/mobile · Top header bar persistent

```
[ LOGO + ORG NAME ]

  MAIN
  ├── 📊 Overview
  ├── 📅 My Shifts
  ├── 🐾 Foster Animals
  ├── 💳 My Donations
  ├── 🎟 My Events
  └── ⏱ Hours Log

  ACCOUNT
  ├── 👤 My Profile
  └── 🔔 Notifications

  ──────────────────
  [ 🌙 Light/Dark Toggle ]
  [ ← Logout ]
```

---

### 8.3 Admin Dashboard Sidebar

```
[ LOGO + "Admin Panel" badge ]

  OVERVIEW
  └── 📊 Dashboard

  ANIMALS
  ├── 🐶 All Animals
  ├── 🏠 Foster Assignments
  └── 📋 Adoptions

  PEOPLE
  ├── 👥 Volunteers
  └── 📅 Shift Management

  FINANCE
  └── 💰 Donations

  CONTENT
  ├── 📝 Blog & Stories
  ├── 🎟 Events
  └── 🏠 Homepage Content

  INSIGHTS
  └── 📈 Reports

  SYSTEM
  └── ⚙️ Settings

  ──────────────────
  [ 🌙 Light/Dark Toggle ]
  [ ← Logout ]
```

---

## 9. Component Library

All components must be built as self-contained, reusable HTML/CSS/JS blocks. Styles should use CSS custom properties (variables) for theming. Components must support both light and dark mode and RTL layout.

### 9.1 Navigation Components
- **Primary Navbar** — Transparent/solid variant, dropdown menus, mobile hamburger
- **Dashboard Top Header** — User avatar, notification bell badge, breadcrumb, sidebar toggle
- **Dashboard Sidebar** — Collapsible, active state indicators, icon + label pairs
- **Mobile Drawer Menu** — Slide-in overlay for public site mobile nav
- **Breadcrumb** — Contextual path indicator for interior and dashboard pages

### 9.2 Hero & Layout Components
- **Full-Width Video/Image Hero** — Overlay gradient, headline, subheading, dual CTA buttons
- **Split-Screen Hero** — 50/50 image-left / content-right (Home 2)
- **Page Banner** — Interior page header with title, subtitle, and breadcrumb
- **Section Wrapper** — Standardized padding/max-width container with optional background variants

### 9.3 Animal & Adoption Components
- **Animal Card** — Photo, name, species, age, location badge, "Meet Me" CTA; hover reveals quick stats
- **Animal Detail Gallery** — Multi-photo layout with thumbnail strip
- **Adoption Status Badge** — Color-coded: Available (green) / In Foster (yellow) / Pending (orange) / Adopted (gray)
- **Animal Filter Bar** — Horizontal chip-based filters: Species / Age / Size / Gender / Location
- **Medical Record Entry** — Timeline item: date, type icon, notes, logged-by tag

### 9.4 Donation Components
- **Donation Amount Selector** — Preset amount buttons with active/selected state + custom input
- **Recurring Toggle** — One-time / Monthly / Annually switch
- **Donation Tier Card** — Named giving level with impact description and CTA
- **Live Donation Ticker** — Animated scrolling social proof strip
- **Donation Progress Bar** — Campaign goal tracker with percentage fill and amount labels

### 9.5 Impact & Stats Components
- **Animated Counter Card** — Number animates up on scroll-into-view; icon + label + value
- **Impact Infographic Block** — Icon + percentage + description for fund allocation display
- **Milestone Timeline** — Horizontal or vertical chronological list of org achievements

### 9.6 Story & Content Components
- **Story Card** — Before/after photo pairing, animal name, short excerpt, "Read More" link
- **Story Detail Layout** — Full-width hero image, body content, sidebar with adoption outcome
- **Blog Card** — Thumbnail, category tag, title, date, author avatar, excerpt, read time
- **Masonry Gallery** — Responsive photo grid with hover overlay (name + outcome badge)

### 9.7 Shift & Scheduling Components
- **Shift Card** — Date, time, location, type badge, capacity bar (X/Y spots), Sign Up CTA
- **Availability Calendar** — Month/week view; color-coded: Available / Registered / Full / Past
- **Shift History Row** — Date, role, hours, status badge (Completed / Cancelled / Pending)
- **Hours Summary Card** — Total hours dial/progress and tier progress bar

### 9.8 Dashboard UI Components
- **KPI Stat Card** — Icon, label, value, trend indicator (up/down arrow + percentage)
- **Activity Feed Item** — Avatar, action text, timestamp, category color dot
- **Data Table** — Sortable columns, pagination, row actions (Edit / View / Delete), bulk select checkbox
- **Status Badge** — Inline colored pill: Active / Pending / Approved / Rejected / On Hold
- **Alert / Notification Banner** — Top-of-page contextual alerts: success / warning / error / info
- **Empty State Block** — Illustration + message + primary action CTA for zero-data views
- **Sidebar Mini Profile** — Avatar, name, role badge at bottom of sidebar

### 9.9 Form Components
- **Input Field** — Label, input, helper text, error state, success state
- **Textarea** — Expandable, character count indicator
- **Select Dropdown** — Styled custom select with search for long lists
- **Checkbox Group** — Used for skills/interests, notification preferences
- **Radio Button Group** — Used for donation frequency, role selection
- **File Upload Zone** — Drag-and-drop area with preview (for medical record photos, animal photos)
- **Multi-Step Form** — Progress indicator + step navigation (used for foster application, adoption inquiry)
- **Form Validation Messages** — Inline error text beneath fields with icon

### 9.10 Event Components
- **Event Card** — Date badge (large day/month display), title, location, registration CTA
- **Event Detail Header** — Cover image, title, meta row (date / time / location / spots left)
- **Countdown Timer** — Days / Hours / Minutes / Seconds display for upcoming events

### 9.11 Utility Components
- **Toast Notification** — Bottom-right corner pop-up: success / error / info
- **Modal Dialog** — Centered overlay with close button; used for confirmations and quick forms
- **Accordion / FAQ** — Expand/collapse Q&A pairs with smooth animation
- **Tabs** — Horizontal tab switcher (used in animal detail, dashboard sections)
- **Tooltip** — Hover information labels for icons and truncated content
- **Skeleton Loader** — Placeholder shimmer for cards, tables, and image blocks
- **Pagination** — Numbered page controls with prev/next and item count display
- **Back to Top Button** — Appears after scrolling, smooth scroll behavior
- **Cookie Consent Banner** — Bottom-of-page GDPR-style notice with accept/decline
- **Dark/Light Mode Toggle** — Icon button (moon/sun) with system preference detection
- **RTL Toggle** — Dev-facing utility for testing right-to-left layout

---

## 10. Feature Breakdown

### 10.1 Adoptable Animal Listings
- Filterable gallery by species, age range, size, gender, and availability status
- Each animal has a dedicated profile page with multi-photo gallery, full story narrative, medical clearance status, and personality traits
- "Add to Wishlist" placeholder (logged-in users) and "Start Adoption Inquiry" CTA (multi-step form)

### 10.2 Shift Sign-Up System (UI)
- Calendar and list views of available volunteer shifts
- Each shift shows type, location, required skills, current capacity fill, and sign-up CTA
- My Shifts section tracks upcoming and past shifts with cancellation option
- Hour logging and tier-based recognition system displayed in volunteer dashboard

### 10.3 Foster Animal Medical Records
- Per-animal medical timeline accessible to the assigned foster volunteer
- Admin and foster can both log entries: vaccination dates, vet visits, medications, behavioral notes
- Admin has oversight view of all overdue or missing record entries
- Photo attachment placeholder on each medical log entry

### 10.4 Recurring Donation Management
- Public donate page supports toggling between one-time and recurring (monthly/annually)
- Preset amount buttons with named impact labels
- Volunteer/donor dashboard shows active recurring plans with pause and cancel UI
- Donation history table with tax receipt download placeholder per year

### 10.5 Impact Transparency Section
- Dedicated Impact page with fund allocation infographic, rescued/adopted counters, and annual milestones
- Admin can update live counter values from the content management section
- Homepage impact bar features scroll-triggered animated number counters

### 10.6 Success Stories System
- Public stories grid and individual story detail pages
- Admin creates and publishes stories from the CMS section
- Stories automatically linked to an animal's profile page when applicable
- "Nominate a Story" prompt on adoption confirmation page (placeholder)

### 10.7 Events & Fundraiser Registration
- Public events listing with upcoming/past filter
- Individual event pages with countdown timer, location map placeholder, and registration form
- Volunteer dashboard tracks registered events and attendance history

### 10.8 Foster Application Workflow
- Multi-step public application form: personal info → household details → experience → agreement
- Submitted applications appear in admin Foster Management queue
- Approval/rejection notification triggered to applicant (email placeholder)

### 10.9 Newsletter & Email Capture
- Mailchimp-compatible email input in homepage, footer, and Coming Soon page
- Confirmation state with success animation after submission
- Separate interest checkboxes: adoption updates / volunteer opportunities / events / news

### 10.10 Social Proof & Community Trust
- Live donation ticker (Home 2)
- Volunteer spotlight testimonials
- Partner/sponsor logo strip
- Press & media mentions section
- Static social feed preview (Instagram-style card grid placeholder)

---

## 11. Folder Structure

```
RescueHope/
│
├── assets/
│   ├── css/
│   │   ├── style.css              # Master stylesheet with CSS custom properties
│   │   ├── dark-mode.css          # Dark mode overrides
│   │   ├── rtl.css                # Right-to-left layout overrides
│   │   ├── dashboard.css          # Shared dashboard layout styles
│   │   └── animations.css         # Keyframe animations and transitions
│   │
│   ├── js/
│   │   ├── main.js                # Global: navbar, dark mode toggle, scroll events
│   │   ├── dashboard.js           # Sidebar toggle, dashboard interactions
│   │   ├── filters.js             # Animal listing filter logic
│   │   ├── counter.js             # Scroll-triggered animated counters
│   │   ├── donate.js              # Donation amount selector, recurring toggle
│   │   ├── calendar.js            # Shift availability calendar
│   │   ├── multi-step-form.js     # Foster application, adoption inquiry multi-step
│   │   ├── validation.js          # Client-side form validation
│   │   └── plugins/
│   │       └── (third-party: minimal; see Development Notes)
│   │
│   ├── images/
│   │   ├── animals/               # Placeholder animal photos
│   │   ├── team/                  # Staff/volunteer placeholder photos
│   │   ├── events/                # Event cover placeholders
│   │   ├── stories/               # Success story image placeholders
│   │   ├── icons/                 # SVG icon files
│   │   └── logo/                  # Logo variants (color, white, dark)
│   │
│   └── fonts/                     # Self-hosted Google Font fallbacks (optional)
│
├── pages/
│   ├── index.html                 # Home 1
│   ├── home-2.html                # Home 2
│   ├── about.html
│   ├── programs.html
│   ├── adopt.html
│   ├── animal-detail.html
│   ├── stories.html
│   ├── story-detail.html
│   ├── donate.html
│   ├── volunteer.html
│   ├── foster.html
│   ├── events.html
│   ├── event-detail.html
│   ├── impact.html
│   ├── blog.html
│   ├── blog-detail.html
│   ├── contact.html
│   ├── 404.html
│   ├── coming-soon.html
│   ├── privacy.html
│   └── terms.html
│
├── auth/
│   ├── login.html
│   ├── register.html
│   ├── forgot-password.html
│   ├── reset-password.html
│   └── verify-email.html
│
├── dashboard/                     # Volunteer-facing dashboard
│   ├── index.html                 # Overview / Home
│   ├── shifts.html
│   ├── foster-animals.html
│   ├── donations.html
│   ├── events.html
│   ├── hours.html
│   ├── profile.html
│   └── notifications.html
│
├── admin/                         # Admin-facing dashboard
│   ├── index.html                 # Admin overview
│   ├── animals.html
│   ├── volunteers.html
│   ├── shifts.html
│   ├── foster.html
│   ├── adoptions.html
│   ├── donations.html
│   ├── content.html
│   ├── reports.html
│   └── settings.html
│
├── documentation/
│   ├── installation.md
│   ├── customization.md
│   ├── page-structure.md
│   └── credits.md
│
├── README.md
└── robots.txt
```

---

## 12. Responsive Design Strategy

Follow a **mobile-first** approach. All layout, typography, and spacing decisions begin at the smallest breakpoint and scale up.

### Breakpoints

```css
/* Mobile First */
--bp-mobile:  < 640px
--bp-tablet:  640px  – 1024px
--bp-desktop: 1024px – 1280px
--bp-large:   > 1280px
```

### Behavior Per Breakpoint

| Element                  | Mobile (< 640px)                          | Tablet (640–1024px)                    | Desktop (1024px+)                       |
|--------------------------|-------------------------------------------|----------------------------------------|------------------------------------------|
| Public Navbar            | Hidden; hamburger opens full-height drawer | Hamburger or compact nav               | Full horizontal nav with dropdowns       |
| Hero Section             | Single-column, stacked CTA buttons        | Slightly taller, side-by-side CTAs     | Full-width with video/parallax support   |
| Animal Card Grid         | 1 column                                  | 2 columns                              | 3–4 columns                             |
| Impact Counter Bar       | 2×2 grid                                  | 4 in a row                             | 4 in a row with larger typography        |
| Dashboard Sidebar        | Hidden; toggle-open drawer overlay        | Icons-only collapsed sidebar           | Full expanded sidebar (label + icon)     |
| Data Tables              | Horizontal scroll; priority columns shown | Horizontal scroll                      | Full table visible                       |
| Multi-Step Form          | Full-width single column                  | Centered, max-width constrained        | Two-column where fields allow            |
| Donation Amount Selector | 2×2 grid of buttons                       | Horizontal row                         | Horizontal row with custom field inline  |
| Gallery / Masonry        | Single column                             | 2 columns                              | 3+ columns                              |
| Footer                   | Stacked single column                     | 2-column grid                          | 4-column grid                           |

### Mobile-Specific Requirements
- All interactive touch targets must be a minimum of **44×44px**
- Hamburger menu must be reachable with thumb (bottom-right positioning preferred on mobile)
- Reduce or disable parallax and decorative animations on mobile for performance
- Simplified calendar view on mobile (list view default, calendar view optional toggle)
- Optimized image sizes: use responsive `srcset` and WebP format with JPEG fallback

---

## 13. Animation & Interaction Ideas

All animations must respect the `prefers-reduced-motion` media query. Provide a no-animation fallback for users who have this setting enabled.

### Public Website Animations

| Element                    | Animation / Interaction                                                                 |
|----------------------------|-----------------------------------------------------------------------------------------|
| Hero Section               | Subtle background image Ken Burns effect (slow zoom/pan); text fades up on load        |
| Impact Counters            | Numbers count up from 0 to final value when scrolled into viewport (Intersection Observer) |
| Animal Cards               | Lift shadow + slight scale-up on hover; "Meet Me" CTA slides up from bottom of card    |
| Donation Ticker            | Smooth horizontal infinite scroll (CSS animation, no JS library required)              |
| Story Cards                | Fade-in stagger effect as they enter viewport (CSS + Intersection Observer)            |
| Masonry Gallery            | Hover overlay fades in with animal name and outcome badge                              |
| Nav Dropdown               | Smooth height expand with subtle fade on open; collapses on outside click              |
| Page Transitions           | Fade-in on page load (CSS opacity transition on body)                                  |
| Scroll-to-Top Button       | Slides in from the right after 300px scroll; smooth scroll on click                   |
| Partner Logo Strip         | Grayscale to full color on hover; optional slow auto-scroll on mobile                 |
| FAQ Accordion              | Height transition on expand/collapse with icon rotation (plus to minus or chevron)     |
| Donation Amount Buttons    | Background fill animation on selection; custom input slides in when "Other" is chosen  |

### Dashboard Animations

| Element                    | Animation / Interaction                                                                  |
|----------------------------|------------------------------------------------------------------------------------------|
| Sidebar                    | Smooth slide-in/out on toggle; icon tooltip appears when sidebar is collapsed            |
| KPI Cards                  | Subtle fade-up stagger on dashboard load                                                |
| Activity Feed              | New items appear with a brief highlight flash before settling                           |
| Chart Areas                | Placeholder chart containers with loading shimmer; draw-in animation on data load       |
| Status Badge               | Pulsing dot animation for "Pending" states                                              |
| Shift Calendar             | Smooth month-to-month transition (slide direction based on forward/back)                |
| Toast Notifications        | Slide in from bottom-right; auto-dismiss after 4 seconds with progress bar             |
| Table Row Actions           | Action buttons fade in on row hover                                                     |
| Modal Open/Close           | Background overlay fade + modal scale-up from center                                   |
| Skeleton Loaders           | Shimmer sweep animation on all card and table placeholders during "loading" state       |
| Form Field Focus           | Smooth border color transition and label float animation                                |
| Capacity Progress Bars     | Fill animation on render for shift capacity indicators                                  |

---

## 14. SEO & Performance Strategy

### 14.1 On-Page SEO

- **Title Tags:** Unique per page, max 60 characters. Format: `[Page Topic] | RescueHope Animal Rescue`
- **Meta Descriptions:** Unique per page, 150–160 characters, action-oriented and emotionally resonant
- **Header Hierarchy:** One `<h1>` per page (page title or hero headline); logical `<h2>` → `<h3>` nesting
- **Semantic HTML:** Use `<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<section>`, `<aside>` throughout. Never use `<div>` when a semantic element is appropriate.
- **Image Alt Text:** Every `<img>` must have descriptive, keyword-aware alt text. Animal photos: include animal name and breed.
- **Image Formats:** Provide WebP with `<picture>` / `<source>` fallback to JPEG/PNG
- **Structured Data (JSON-LD):** Include on key pages:
  - `Organization` schema on About and Home pages
  - `Event` schema on all Event pages
  - `BreadcrumbList` schema on all interior pages
  - `FAQPage` schema on the FAQ accordion sections
  - `LocalBusiness` schema on Contact page (shelter location)
- **XML Sitemap:** `sitemap.xml` template included in root; all public pages listed
- **robots.txt:** Block `/admin/` and `/dashboard/` from crawlers; allow all public pages
- **Canonical Tags:** `<link rel="canonical">` on all pages to prevent duplicate content issues
- **Open Graph & Twitter Cards:** Meta tags for all public pages to ensure rich social sharing previews

### 14.2 Performance Targets

| Metric           | Target         |
|------------------|----------------|
| PageSpeed Score  | 90+ mobile & desktop |
| LCP              | < 2.5 seconds  |
| FID / INP        | < 100ms        |
| CLS              | < 0.1          |
| Total Page Weight| < 500KB (initial load, excluding images) |

### 14.3 Performance Techniques

- **Images:** Lazy load all below-fold images (`loading="lazy"`); use `srcset` for responsive images; compress all placeholders to WebP
- **CSS:** CSS custom properties for all theming values; avoid `@import` in CSS (use `<link>` in HTML); minify for production
- **JavaScript:** ES6+ modules; no blocking scripts in `<head>` (use `defer` or `async`); no `console.log` in production build
- **Fonts:** Load Google Fonts with `display=swap`; preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`
- **Critical CSS:** Inline above-the-fold styles or use preload link for main stylesheet
- **No Render-Blocking Resources:** All non-critical JS and CSS deferred or async loaded
- **External Plugin Minimization:** Avoid plugin dependencies wherever native CSS/JS can achieve the same result

---

## 15. Development Notes

### 15.1 Technology Constraints
- Built with **vanilla HTML, CSS, and JavaScript only** — no frameworks (React, Vue, Angular, etc.)
- No CSS preprocessors assumed (write native CSS with custom properties)
- External JavaScript plugins must be minimized; use only where native implementation is impractical
- All JS written in **ES6+** with modular structure (one concern per file, see Folder Structure)

### 15.2 Permitted External Libraries (Minimal)
The following lightweight, CDN-deliverable libraries are acceptable where needed:

| Library          | Use Case                          | CDN Source       |
|------------------|-----------------------------------|------------------|
| Swiper.js        | Touch carousel for animal cards and galleries | cdnjs |
| Flatpickr        | Date/time picker for shift calendar and booking forms | cdnjs |
| Chart.js (lite)  | Admin dashboard chart placeholders | cdnjs |
| Iconify / Phosphor Icons | Icon system (SVG-based, no font icons) | CDN |

> Do not use jQuery. Do not use Bootstrap. All layout must use CSS Grid and Flexbox.

### 15.3 CSS Architecture
- Use **CSS custom properties** (variables) for all colors, spacing, typography, and transitions
- Define all tokens in `:root` — dark mode overrides via `[data-theme="dark"]` attribute on `<html>`
- RTL overrides via `[dir="rtl"]` attribute on `<html>`
- Use **BEM naming convention** (optional but recommended for component classes)
- Maintain consistent 8px base spacing scale (`--space-1: 8px`, `--space-2: 16px`, etc.)

### 15.4 Dark Mode Implementation
- Toggle sets `data-theme="dark"` on `<html>` element; preference stored in `localStorage`
- On first load, detect system preference via `window.matchMedia('(prefers-color-scheme: dark)')`
- `dark-mode.css` overrides only the necessary custom property values — do not duplicate full rulesets
- All images with white backgrounds should have a `dark-mode` variant or use transparent PNG/SVG
- Dashboard charts must have dark-mode compatible color palettes defined

### 15.5 RTL Implementation
- `rtl.css` targets `[dir="rtl"]` for: text-align flips, margin/padding flips, flex-direction reverses
- Use CSS logical properties where possible (`margin-inline-start` instead of `margin-left`) to reduce RTL overrides
- All icons with directional meaning (arrows, chevrons) must rotate 180° in RTL
- Dashboard sidebar animates from right in RTL layout

### 15.6 Accessibility Standards (WCAG 2.1 AA)
- All interactive elements must be keyboard-navigable with visible `:focus` styles
- Minimum color contrast: 4.5:1 for normal text, 3:1 for large text
- All images must have descriptive alt text; decorative images use `alt=""`
- ARIA labels on icon-only buttons and nav landmarks (`aria-label`, `role`, `aria-expanded`, `aria-current`)
- Modal dialogs must trap focus and be dismissible via Escape key
- Form errors must be announced to screen readers (use `aria-live` or `aria-describedby`)
- Skip navigation link at the top of every page for screen reader / keyboard users

### 15.7 Integration Placeholders
All third-party integrations should be marked with `<!-- TODO: Integration -->` comments and structured so the backend connection point is obvious:

| Integration        | Implementation Approach                              |
|--------------------|------------------------------------------------------|
| Contact Form       | HTML form with `action` pointing to Formspree/Netlify Forms endpoint placeholder |
| Newsletter         | Mailchimp embed form HTML block with placeholder `action` URL |
| Google Maps        | `<div id="map">` placeholder with API key comment and dimensions set |
| Donation Payment   | Stripe/PayPal button containers with placeholder `data-` attributes |
| Booking Calendar   | Flatpickr instance connected to shift availability `data` attributes |

### 15.8 Demo Content Guidelines
- Use realistic, emotionally appropriate placeholder content: actual animal names, plausible rescue stories, real-looking volunteer testimonials
- Animal photos: use high-quality royalty-free placeholder images (not the same image repeated)
- Avoid "Lorem Ipsum" — write short, mission-appropriate placeholder copy throughout
- Donation amounts and impact stats should be plausible and internally consistent (e.g., "247 animals rescued this year" should match counter and story counts)
- All personal data in dashboards must be clearly marked as demo/placeholder data

### 15.9 Code Comments & Documentation
- Every HTML file must include section header comments: `<!-- ===== HERO SECTION ===== -->`
- Every JS function must include a one-line description comment above it
- CSS file sections organized with comment dividers: `/* ===== COMPONENT: Animal Card ===== */`
- Mark all customization points with `/* TODO: customize — [instruction] */`

### 15.10 Quality Checklist Before Submission

- [ ] All 35+ pages exist and are internally linked with no broken links  
- [ ] Both homepage variants (Home 1 and Home 2) are complete  
- [ ] Home nav dropdown includes links to both homepage variants  
- [ ] All pages validate with W3C HTML Validator  
- [ ] Responsive layout verified at all four breakpoints  
- [ ] Cross-browser tested: Chrome, Firefox, Safari, Edge  
- [ ] Dark mode tested on all public pages, auth pages, and dashboard pages  
- [ ] Light mode is the default; system preference auto-detected on first visit  
- [ ] RTL layout tested on at least Home 1, dashboard overview, and a form page  
- [ ] All forms have client-side validation with accessible error messages  
- [ ] All interactive elements are keyboard-accessible with visible focus styles  
- [ ] Skeleton loaders present on dashboard sections and dynamic content areas  
- [ ] All images have alt text; WebP format with fallback  
- [ ] SEO meta tags, Open Graph tags, and JSON-LD structured data on all public pages  
- [ ] `sitemap.xml` and `robots.txt` included in root  
- [ ] `prefers-reduced-motion` media query respected in all animations  
- [ ] No `console.log` statements in any JS file  
- [ ] Documentation folder complete (installation, customization, page structure, credits)  
- [ ] All third-party credits properly attributed in documentation  
- [ ] License file included  

---

*RescueHope HTML Template — Development Blueprint v1.0*  
*Generated from: HTML Template Development Guide + Client Requirement: Local Non-Profit / Animal Rescue*

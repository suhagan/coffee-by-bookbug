# **Coffee by BookBug ☕**

A React + TypeScript dashboard styled entirely with **Tailwind CSS**.
Includes cards, lists, filtering, dark mode, and responsive layout.
Built as part of the Tailwind CSS dashboard assignment.

---

## **Features**

### Fully Styled With Tailwind

All styling is done using Tailwind utility classes — no custom CSS.

### Responsive Dashboard Layout

- Header
- Summary cards
- Drink list
- Buttons
- Proper layout spacing
- Scales from mobile → desktop

### Live Data From API

Data is fetched from:

```
https://api.sampleapis.com/coffee/hot
```

Because API data is inconsistent, a custom classifier is used to split items into:

- **Hot Drinks**
- **Iced Drinks**

### Filtering & Search

- Dropdown: Hot / Iced
- Search input: filter by drink title
- Handles empty results gracefully

### Card-Based List

- Image on the left
- Text on the right
- Hover animation
- Dark/light support

### Dark Mode

- Implemented using a custom `useDarkMode` hook
- Persists theme using `localStorage`
- Page-wide background adapts
- Smooth animated transitions

### Reusable Components

- `Header`
- `Card`
- `Button`
- `CoffeeList`
- `Dashboard`
- `useFetch` hook
- `useDarkMode` hook

---

# **Tech Stack**

- React + Vite
- TypeScript
- Tailwind CSS
- Custom Hooks
- Responsive Layout
- API Integration

---

## **Installation**

Clone the repo:

```bash
git clone https://github.com/suhagan/coffee-by-bookbug.git
cd coffee-by-bookbug
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

---

# **Tailwind Installation Steps (as performed in this project)**

These are the **exact steps** used to set up Tailwind in this project.

### 1. Install Tailwind + PostCSS + Autoprefixer

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 2. Initialize Tailwind & PostCSS config files

```bash
npx tailwindcss init -p
```

This created:

```
tailwind.config.js
postcss.config.js
```

### 3. Configure Tailwind content paths

In **tailwind.config.js**:

```js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4. Add Tailwind directives to index.css

In `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#root {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
}

body {
  @apply bg-gray-50 dark:bg-gray-900 transition-colors;
}
```

---

## **Project Structure**

```
src/
├── components/
│   ├── Header.tsx
│   ├── Card.tsx
│   ├── Button.tsx
│   ├── CoffeeList.tsx
│
├── hooks/
│   ├── useFetch.ts
│   ├── useDarkMode.ts
│
├── pages/
│   └── Dashboard.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## **Author**

**Suhagan Mostahid**

# Daniel D'Souza — Interactive Portfolio

A modern, high-performance personal portfolio and developer hub built with **React**, **Vite**, and **Tailwind CSS**. Designed around an interactive command-line interface (CLI) experience, allowing visitors to navigate site sections and deep-dive pages using either traditional UI elements or terminal commands.

Live Site: [daniel-dsouza-portfolio.vercel.app](https://daniel-dsouza-portfolio.vercel.app/)
[dsdsouza.github.io/](https://dsdsouza.github.io/) redirects to [daniel-dsouza-portfolio.vercel.app](https://daniel-dsouza-portfolio.vercel.app/)

---

## Key Features

* **Interactive Command Palette (CLI):** Press `Ctrl+K` / `Cmd+K` or click the global terminal button to open a functional shell. Supports directory navigation (`cd experience/`, `cd projects/`), file shortcuts (`ls`, `dir`), tab-completion, and automatic scrolling/routing.
* **Responsive Mobile & Desktop Design:** Features a floating terminal action button (`>_`) for seamless phone and tablet navigation.
* **Animated Hero Terminal:** Features a dynamic typing/backspacing greeting sequence styled after a live shell environment.
* **Rich Embed / Open Graph Meta Tags:** Custom Discord and social media link preview cards showcasing your professional background as a Computer Science Honors student and software engineer.
* **Robust Error Handling:** A custom terminal-themed 404 page with an automatic redirect countdown timer for mistyped URLs.

---

## Tech Stack

* **Frontend Framework:** React (with React Router DOM for SPA routing)
* **Styling & UI:** Tailwind CSS, React Icons
* **Build Tool:** Vite
* **Deployment & Hosting:** Vercel

---

## Project Structure

```text
src/
├── components/
│   ├── About.jsx             # Bio and background section
│   ├── CommandPalette.jsx    # Core CLI terminal component
│   ├── Experience.jsx        # Professional work overview
│   ├── Hero.jsx              # Typing banner & quick-action triggers
│   ├── Navbar.jsx            # Global navigation bar
│   ├── NotFound.jsx          # Terminal-themed 404 error page
│   ├── Projects.jsx          # Featured software projects overview
│   ├── Resume.jsx            # Resume download and preview section
│   ├── TechStack.jsx         # Skills and tools grid
│   └── TerminalTrigger.jsx   # Global floating CLI access button
├── Experience/               # Deep-dive pages for specific roles (ReWild, RTX, etc.)
├── Projects/                 # Detailed project case study pages
├── App.jsx                   # Main layout routing and wrapper configuration
├── main.jsx                  # React DOM entry point
└── index.css                 # Tailwind CSS imports & global styles

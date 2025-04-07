# 🌐 HD Globe Trade

A modern, responsive, and dynamic frontend web application designed using **ReactJS**, **Vite**, and **Tailwind CSS** — built to scale and deliver immersive user experiences for global trade engagement.

---

## 📦 Tech Stack

| Technology          | Purpose                                |
|---------------------|----------------------------------------|
| **ReactJS**         | Component-based UI Development         |
| **Vite**            | Lightning-fast Build Tool              |
| **Tailwind CSS**    | Utility-first CSS Framework            |
| **Framer Motion**   | Rich Animations and Transitions        |
| **Three.js & OGL**  | WebGL-based 3D Visualizations          |
| **React Leaflet**   | Interactive Maps                       |
| **Lucide Icons**    | Elegant Icon Set                       |
| **Formspree**       | Contact Form Integration               |

---

## 🚀 Project Structure

HD Globe Trade/
│
├── index.html                # HTML entry point
├── package.json              # Project metadata and dependencies
├── vite.config.js            # Vite build configuration
├── tailwind.config.js        # Tailwind theming and utility config
├── postcss.config.js         # PostCSS setup for Tailwind
├── .gitignore                # Git ignored files
│
├── public/                   # Static public assets (e.g., favicon, images)
│
├── src/                      # Main source code directory
│   ├── assets/               # Images, fonts, and other static assets
│   ├── components/           # Reusable React UI components
│   ├── data/                 # Static data files (JSON, etc.)
│   ├── pages/                # Page-level components (Home, About, Contact)
│   ├── sections/             # Section-based layout components
│   ├── App.jsx               # Root component
│   └── main.jsx              # Application entry script
│
└── dist/                     # Production-ready build output (after `npm run build`)

---

## 📂 Scripts

Run these from the root directory:

| Script           | Description                           |
|------------------|---------------------------------------|
| `npm install`    | Install all dependencies              |
| `npm run dev`    | Run the app in development mode       |
| `npm run build`  | Create a production-ready build       |
| `npm run preview`| Preview the production build          |
| `npm run lint`   | Check code quality via ESLint         |

---

## 📍 Key Features

- 🌍 **Location Intelligence** with `React Leaflet`
- 🌀 **Immersive 3D Graphics** via `Three.js` + `OGL`
- 💬 **Integrated Contact Forms** using `Formspree`
- 🎨 **Highly Customizable UI** with Tailwind Utility Classes
- ⚡ **Lightning-Fast Load Time** powered by Vite
- 📱 **Mobile Responsive Design** out-of-the-box

---

## 📈 Deployment Strategy

> Recommended platforms: **Vercel**, **Netlify**, or **GitHub Pages**

### Steps:
1. Run `npm run build` to generate the `/dist` folder.
2. Deploy the `dist` folder to your hosting platform.
3. Ensure correct **base path** configuration in `vite.config.js` if deploying to a subpath.

---

## 🛠️ Developer Notes

- Ensure **Node.js v16+** is installed.
- ESLint is configured for code consistency (`npm run lint`).
- Formspree integration may require setting environment variables for secure handling of API tokens.

---

## 🤝 Contributing

If you'd like to contribute or customize this project:
- Fork the repository
- Create a new feature branch
- Submit a pull request with a detailed description

---

## 🧾 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

For any business inquiries or support:  
📧 **contact@hdglobetrade.com**  
🌐 [HD Globe Trade Website](#)

---

> _Crafted with precision for the global market — a future-ready web experience._

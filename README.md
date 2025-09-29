# EJS Traditional Framework

A modern web application built with **Express.js** and **EJS** templating engine. This project demonstrates best practices for server-side rendering and dynamic page generation.

## 🌟 Features

- ✅ **Dynamic Page Rendering** - Server-side rendering with EJS templates
- ✅ **CRUD Operations** - Add, view, and delete items
- ✅ **RESTful API** - Get items via JSON API endpoint
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Modern UI** - Clean and professional interface
- ✅ **Error Handling** - Proper error pages and handling
- ✅ **Easy to Extend** - Well-organized folder structure

## 📦 Tech Stack

- **Backend**: Node.js + Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data**: In-Memory Storage (can be extended to use databases)

## 📁 Project Structure

```
EJS-traditional-framework/
├── public/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   └── js/
│       └── main.js             # Frontend JavaScript
├── views/
│   ├── header.ejs              # Header/Navigation template
│   ├── footer.ejs              # Footer template
│   ├── index.ejs               # Home page
│   ├── shop.ejs                # Shopping page
│   ├── about.ejs               # About page
│   ├── 404.ejs                 # 404 error page
│   └── error.ejs               # Error page
├── server.js                   # Main Express server
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the project**
   ```bash
   cd EJS-traditional-framework
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📖 Usage

### Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page with statistics |
| `/shop` | GET | Shopping page to view and add items |
| `/about` | GET | About page with project info |
| `/add-item` | POST | Add new item (form submission) |
| `/delete/:id` | GET | Delete item by ID |
| `/api/items` | GET | Get all items as JSON |

### Adding Items

1. Go to the **Shop** page
2. Enter item name and price
3. Click **Add Item**
4. Item will appear in the list below

## 🎨 Customization

### Change Colors

Edit `/public/css/style.css` and modify the CSS variables.

### Add New Routes

Edit `/server.js` and add new routes.

## 📝 EJS Template Syntax

### Variables
```ejs
<h1><%= title %></h1>
```

### Loops
```ejs
<% items.forEach(item => { %>
  <h3><%= item.name %></h3>
<% }) %>
```

## 🚀 Commands

```bash
npm run dev      # Development server
npm start        # Production server
npm test         # Run tests
```

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [Node.js Documentation](https://nodejs.org/)

## 📄 License

MIT License

## 👨‍💻 Author

**Azizbeccoder**

---

**Made with ❤️ using Express.js and EJS**
<!-- Updated 2025-09-09 11:20:00 -->
<!-- Updated 2025-09-19 11:00:00 -->
<!-- Updated 2025-09-29 11:50:00 -->

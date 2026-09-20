# 📚 BookNest — Book Management Application

A modern and responsive **Book Management Application** built with **Next.js, TypeScript, Tailwind CSS, DaisyUI, Context API, and Recharts**.

Users can explore books, view detailed information, add books to their **Read Books** list or **Wishlist**, sort their listed books, and visualize their reading data through an interactive chart.

---

## 🚀 Live Project

🔗 **Live Demo:** Add your live deployment URL here

🔗 **GitHub Repository:** Add your GitHub repository URL here

---

## ✨ Features

### 📖 Book Browsing

* Display all available books
* Responsive book card design
* Book information displayed in an attractive UI
* View individual book details

### 📚 Book Details

* Dynamic book detail pages
* Displays detailed information about a selected book
* Dynamic routing using Next.js App Router
* Loading state for book detail pages
* Handles unavailable book data

### ✅ Read Books

* Add books to the Read Books list
* View all books marked as read
* Display total number of read books
* Prevent duplicate books from being added

### ❤️ Wishlist

* Add books to Wishlist
* View all wishlist books
* Display wishlist count
* Prevent duplicate wishlist entries

### 🔃 Book Sorting

Listed books can be sorted by:

* ⭐ Rating
* 📄 Number of Pages
* 📅 Publishing Year

The sorting is handled dynamically using React state.

### 📊 Reading Statistics

* Visualize read books using a bar chart
* Chart data comes directly from the Books Context
* Displays book name and rating
* Responsive Recharts visualization

### ⏳ Loading UI

* Global loading screen
* Book detail page loading skeleton
* Responsive loading states using DaisyUI

### 📱 Responsive Design

The application is responsive across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

---

## 🛠️ Technologies Used

| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| Next.js          | React framework              |
| React            | UI development               |
| TypeScript       | Type safety                  |
| Tailwind CSS     | Styling                      |
| DaisyUI          | UI components                |
| Context API      | Global book state management |
| Recharts         | Data visualization           |
| JavaScript / ES6 | Application logic            |

---

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── context/
│   │   └── BookContext.tsx
│   │
│   ├── listed-books/
│   │   └── page.tsx
│   │
│   ├── books/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── loading.tsx
│   │
│   └── ...
│
├── components/
│   ├── BooksAll/
│   │   ├── BooksCard.tsx
│   │   └── ...
│   │
│   └── shared/
│       └── ListCard.tsx
│
├── types/
│   └── books.types.ts
│
└── ...
```

---

## 🧠 State Management

The application uses **React Context API** to manage book-related global state.

The `BooksContext` manages:

```text
readBooks
wishlist
```

Components can access these values using:

```tsx
const { readBooks, wishlist } = useContext(BooksContext)
```

This allows different components and pages to access the same book data without passing props through multiple levels.

---

## 🔃 Sorting System

The Listed Books page supports three sorting options:

```tsx
const [sortBy, setSortBy] =
  useState<'rating' | 'pages' | 'year'>('rating')
```

The sorting function creates a new array so that the original Context data is not mutated:

```tsx
const sortBooks = (books: Ibook[]) => {
  return [...books].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating
    }

    if (sortBy === 'pages') {
      return b.totalPages - a.totalPages
    }

    if (sortBy === 'year') {
      return b.yearOfPublishing - a.yearOfPublishing
    }

    return 0
  })
}
```

The sorted data is then passed to the reusable `ListCard` component.

---

## 📊 Chart System

The reading chart uses **Recharts**.

The data is generated from the books stored in the Context:

```tsx
const chartData = readBooks.map((book) => ({
  name: book.bookName,
  rating: book.rating,
}))
```

The chart then displays:

```text
Book Name → X Axis
Rating    → Y Axis
```

This makes it easy to visualize the ratings of books the user has read.

---

## 🎨 UI & Design

The project uses:

* Tailwind CSS
* DaisyUI
* Responsive Grid
* Skeleton Loading
* Responsive Tabs
* Responsive Cards
* Responsive Charts

Example responsive book grid:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
```

### Responsive behavior

```text
Mobile       → 1 column
Small        → 2 columns
Large        → 3 columns
Extra Large  → 4 columns
```

---

## ⏳ Loading States

Next.js loading UI is used to provide a better user experience while data is loading.

### Global Loading

Displays a full-screen loading indicator while navigation or page data is loading.

### Book Detail Loading

Uses skeleton components to represent:

* Book image
* Book title
* Book information
* Buttons

This prevents the page from feeling empty while content is being loaded.

---

## 🧩 Reusable Components

The project follows a reusable component structure.

### `BooksCard`

Responsible for displaying an individual book.

### `ListCard`

Responsible for displaying a list of books.

It receives:

```tsx
<ListCard
  books={sortedReadBooks}
  emptyText="No Read Books Found"
/>
```

This allows the same component to be reused for:

* Read Books
* Wishlist

---

## 📦 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd YOUR_PROJECT_NAME
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## ⚙️ Available Scripts

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## 🔐 Data & Context Flow

The basic application flow is:

```text
Book Data
   ↓
Books Context
   ↓
┌───────────────────────┐
│                       │
Read Books          Wishlist
│                       │
└──────────┬────────────┘
           ↓
      Listed Books
           ↓
       Sorting
           ↓
      ListCard
           ↓
      BooksCard
```

For the statistics page:

```text
BooksContext
     ↓
  readBooks
     ↓
    map()
     ↓
  chartData
     ↓
   Recharts
     ↓
  Bar Chart
```

---

## 🎯 Main Learning Concepts

This project demonstrates practical use of:

* Next.js App Router
* Client Components
* Dynamic Routes
* TypeScript interfaces
* React Context API
* `useContext`
* `useState`
* Array `.map()`
* Array `.sort()`
* Spread Operator
* Conditional Rendering
* Reusable Components
* Responsive Tailwind CSS
* DaisyUI
* Loading UI
* Skeleton Components
* Data Visualization
* Recharts

---

## 🔮 Future Improvements

Possible future features:

* 🔎 Search books
* 🏷️ Filter by category
* 📚 Pagination
* 👤 User authentication
* ☁️ Backend database
* ⭐ User reviews and ratings
* 📊 More reading statistics
* 🌙 Dark mode customization
* 🔖 Reading progress tracking
* 📅 Reading history
* 🔔 Toast notifications
* 📱 Improved mobile navigation

---

## 👨‍💻 Author

**Sady Chowdhury**

Web Developer

### Skills

* HTML
* CSS
* JavaScript
* React
* Next.js
* TypeScript
* Tailwind CSS
* Node.js
* Express.js
* MongoDB
* Git & GitHub

---

## 📄 License

This project is created for learning and development purposes.

## **CV Library - Frontend**
🚀 A Next.js-based job listing platform that allows users to search for jobs by **location** or **industry**. The project is built with **TypeScript**, **React.js**, **Next.js**, and **SCSS**, and follows production-level best practices with optimized code.

---

## **📌 Features**
- **Job Search**
  - Users can search jobs by **location** or **industry**.
  - Live location suggestions using **debounced API calls**.
- **Optimized UI/UX**
  - Responsive and accessible UI with **SCSS & TailwindCSS**.
  - Mobile-friendly **Tabs & Job Listings**.
- **Internationalization**
  - Supports **multiple languages** using `next-i18next`.
- **High-Performance Architecture**
  - **Lazy loading** of components.
  - **Debounced search** to reduce unnecessary API calls.
  - **Error handling** and **fallback UI** for robust reliability.


---

## **📂 Folder Structure**
```
cv-library-frontend/
│── src/
│   ├── components/        # Reusable UI components (Header, SearchBar, Tabs, JobList)
│   ├── hooks/             # Custom React hooks (useSearch, useDebounce)
│   ├── pages/             # Next.js pages (Home, Jobs)
│   ├── services/          # API services (fetchLocations)
│   ├── styles/            # SCSS stylesheets
│   ├── utils/             # Helper functions and constants
│── public/                # Static assets
│── next.config.js         # Next.js configuration
│── tsconfig.json          # TypeScript configuration
│── README.md              # Project documentation
```

---

## **🛠️ Tech Stack**
| Technology  | Description |
|-------------|------------|
| **Next.js** | Framework for SSR and static site generation |
| **React.js** | UI library for building components |
| **TypeScript** | Strongly typed JavaScript |
| **SCSS** | Stylesheets with modular support |
| **Tailwind CSS** | Utility-first CSS framework |
| **Axios** | HTTP client for API calls |
| **next-i18next** | Internationalization support |

---

## **🚀 Getting Started**
### **1️⃣ Prerequisites**
- Install **Node.js** (v18+)
- Install **npm** or **yarn**

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/SineRaja/cv-library-tests.git
cd cv-library-frontend
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Start the Development Server**
```sh
npm run dev
```
Visit **http://localhost:3000** in your browser.



---

## **📋 API Services**
- **fetchLocations(query)** → Fetches job locations from API (debounced).

Example:
```ts
import { fetchLocations } from "../services/locationService";

const locations = await fetchLocations("New York");
console.log(locations); // ["New York", "London"]
```

---

## **📌 Production Readiness**
✔ **Optimized Performance**
- Uses **Next.js automatic static optimization**.
- Implements **code splitting & lazy loading**.

✔ **Secure & Scalable**
- Uses **TypeScript** for type safety.
- Implements **error handling with Error Boundaries**.

✔ **Mobile-First Design**
- Fully responsive UI.
- Optimized **job listings & search components** for mobile.


✔ **Deployment-Ready**
- Can be deployed to **Vercel** or **AWS** with simple commands:
  ```sh
  npm run build
  npm start
  ```

---



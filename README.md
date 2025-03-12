# *TypeScript Express MVC App*

*This is a ****server-side rendered (SSR) Node.js application**** built with ****TypeScript****, ****Express****, and ****EJS/Pug**** following the ****MVC pattern**** with ****dependency injection****.*

## *🚀 Features*

- *TypeScript with automatic compilation*
- *MVC structure (Models, Views, Controllers, Services)*
- *Dependency Injection for flexibility*
- *Express for routing*
- *EJS or Pug for SSR views*
- *Static assets (images, CSS, JS) support*
- *Environment variable support*
- *Unit and integration testing with Jest & Supertest*

---

## *📂 Project Structure*

```
/my-app
│── /src
│   ├── /config        # App configurations (e.g., database setup)
│   ├── /controllers   # Handles request logic (uses services)
│   ├── /models        # Database models/interfaces
│   ├── /routes        # Express route definitions
│   ├── /services      # Business logic layer (injected into controllers)
│   ├── /views         # EJS/Pug templates for SSR
│   ├── app.ts         # Express app setup
│── /public            # Static assets (images, CSS, JS)
│   ├── /images        # Image files
│   ├── /css           # CSS stylesheets
│   ├── /js            # Client-side JavaScript
│── /tests             # Unit & integration tests
│   ├── /controllers   # Tests for API routes
│   ├── /services      # Tests for business logic
│── /dist              # Compiled TypeScript files
│── .gitignore         # Ignored files
│── tsconfig.json      # TypeScript config
│── package.json       # Project dependencies
│── server.ts          # Entry point
```

---

## *🛠️ Setup & Installation*

### ***1️⃣ Install Dependencies***

```sh
npm install
```

### ***2️⃣ Run in Development Mode***

```sh
npm run dev
```

- *Uses **`ts-node-dev`** to watch for file changes and restart automatically.*

### ***3️⃣ Build & Run Production***

```sh
npm run build   # Compiles TypeScript into /dist
npm start       # Runs the compiled JavaScript code
```

---

## *📄 Serving Static Assets*

Static assets (e.g., images, CSS, JavaScript) should be placed in the `/public` directory.

- **CSS files:** `/public/css/styles.css`
- **Images:** `/public/images/logo.png`
- **JavaScript files:** `/public/js/script.js`

### *Using Static Files in EJS*
Example usage in `views/index.ejs`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Home</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <h1>Welcome to My Site</h1>
    <img src="/images/logo.png" alt="Logo">
    <script src="/js/script.js"></script>
</body>
</html>
```

---

## *🔗 API Routes*

| *Method* | *Route*        | *Description*    |
| -------- | -------------- | ---------------- |
| *GET*    | *`/users`*     | *Get all users*  |
| *GET*    | *`/users/:id`* | *Get user by ID* |

---

## *🧪 Testing*

This project includes **unit and integration testing** using **Jest** and **Supertest**.

### **Installing Testing Dependencies**
```sh
npm install --save-dev jest ts-jest @types/jest supertest @types/supertest
```

### **Running Tests**
```sh
npm test
```

### **Test Coverage**
- **Services:** Unit tests for business logic.
- **Controllers:** Integration tests using **Supertest**.
- **Routes & Views:** Tested indirectly via controller tests.

Example service test (`tests/services/UserService.test.ts`):
```typescript
test("should return all users", async () => {
    const users = await userService.getUsers();
    expect(users).toEqual(["Alice", "Bob"]);
});
```

---

## *🛠️ Technologies Used*

- ***Node.js**** with ****Express***
- ***TypeScript***
- ***EJS**** or ****Pug**** for server-side rendering*
- ***Dependency Injection**** for modular architecture*
- ***Static assets management (CSS, JS, Images)***
- ***Jest & Supertest for automated testing***
- ***`ts-node-dev`**** for automatic TypeScript compilation*

---

## *🐜 License*

*This project is open-source and available under the ****MIT License****.*

---

## *📌 Notes*

- *Update the ****`.env`**** file for environment variables (not included in Git).*
- *Modify **`tsconfig.json`** as needed for TypeScript settings.*
- *Use **`npm run build`** before deploying to production.*

---

*Happy coding! 🚀*


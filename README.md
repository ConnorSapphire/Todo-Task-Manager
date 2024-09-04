# Todo-Task-Manager
Todo-Task-Manager is a task management web application built with Next.js. This project serves as a simple yet effective tool to manage daily tasks.

## Getting Started
### Prerequisites
Ensure you have Node.js installed.

### Setup
1. **Clone the repository:**
```bash
git clone https://github.com/ConnorSapphire/Todo-Task-Manager.git
```


2. **Set up the database:**
- Add a .env file in the parent directory with the content:
```makefile
DATABASE_URL="file:./dev.db"
```

- Run the migration:
```bash
npx prisma migrate dev --name init
```


3. **Install dependencies:**
```bash
npm install
```


4. **Run the development server:**
```bash
npm run dev
```

Open http://localhost:3000 to view it in the browser.


## Deployment
Deploy the app on Vercel for seamless hosting. Refer to the Next.js deployment documentation for details.

## License
This project is licensed under the MIT License.


It is a TypeScript-based Node.js CRUD application using Express and MongoDB for server-side development. It includes features like user authentication (using bcrypt for password hashing), CORS support, environment variable management with dotenv, and object schema validation using Zod.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (Make sure it's running)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/assignment-2.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd assignment-2
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the root directory with the following content:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your-database-name
   SECRET_KEY=your-secret-key
   ```

   Modify the values accordingly.

5. **Build TypeScript Files:**

   ```bash
   npm run build
   ```

## Running the Application

### Production Mode

To start the application in production mode:

```bash
npm start:prod
```

### Production Mode

```bash
npm run start:dev

```

### Linting and Formatting

```bash
npm run lint

```

### Linting and Formatting Issuse Fixed

```bash
npm run lint:fix

```

# My-portfolio
I’m Tanmay Sharma, a passionate full-stack developer creating modern web apps, e-commerce platforms, and desktop tools. My projects focus on clean code, seamless UX, and innovative solutions. Explore my portfolio to see creativity, technical skills, and problem-solving in action.



PROJECT_NAME="my-portfolio"

mkdir -p $PROJECT_NAME
cd $PROJECT_NAME || exit

mkdir -p public api src

touch public/index.html
touch api/feedback.js
touch src/App.jsx
touch src/main.jsx
touch package.json
touch README.md

npm init -y

npm install react react-dom lucide-react @vercel/kv
npm install -g vercel

cat > README.md <<EOL
# My Portfolio

Welcome to **My Portfolio** – a modern, full-stack web portfolio built with **React** and **Vercel**. This project showcases my work, skills, and projects in a clean, interactive, and responsive interface.

## Features

- Fully built with **React** for the frontend.
- Serverless API using **Vercel Functions** (\`api/feedback.js\`) for handling user feedback.
- Modern UI components with **Lucide React** icons.
- Easy to deploy with **Vercel CLI**.

## Folder Structure

\`\`\`
my-portfolio/
├── public/
│   └── index.html
├── api/
│   └── feedback.js
├── src/
│   ├── App.jsx
│   └── main.jsx
└── package.json
\`\`\`

## Getting Started

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/<your-username>/my-portfolio.git
cd my-portfolio
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Run the project locally
\`\`\`bash
vercel dev
\`\`\`

### 4. Deploy
\`\`\`bash
vercel
\`\`\`

## Dependencies

- react
- react-dom
- lucide-react
- @vercel/kv

## Author

**Tanmay Sharma**
EOL

echo "Project setup complete. Navigate to $PROJECT_NAME and start developing."

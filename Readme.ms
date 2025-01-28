const fs = require('fs');

const readmeContent = `
# Instagram Merch Store

This project is a web application for selling merchandise based on an Instagram page. Users can browse products, create accounts, log in, and subscribe to a newsletter.

## Features

- Product browsing
- User account creation and authentication
- Shopping cart functionality
- Newsletter subscription

## Installation

1. Clone the repository
   \`\`\`
   git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   \`\`\`
2. Navigate to the project directory
   \`\`\`
   cd YOUR_REPO_NAME
   \`\`\`
3. Install dependencies
   \`\`\`
   npm install
   \`\`\`
4. Start the development server
   \`\`\`
   npm run dev
   \`\`\`

## Usage

After starting the development server, open your browser and navigate to \`http://localhost:3000\`. You can browse products, add them to your cart, and go through the checkout process.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`;

try {
  console.log('Updating README.md...');
  fs.writeFileSync('README.md', readmeContent.trim());
  console.log('README.md updated successfully.');
} catch (error) {
  console.error('Error updating README.md:', error.message);
}

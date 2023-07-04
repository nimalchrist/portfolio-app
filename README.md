# My Single Page Portfolio Documentation

Welcome to the documentation for my single-page portfolio, developed using React, Bootstrap and hosted on GitHub Pages. This portfolio showcases my work, skills, and experience in a responsive manner, adapting to different views across desktop, tablet, and mobile devices.

## Installation and Setup

To set up the portfolio locally, follow these steps:

1. Clone the repository from GitHub: 
   ```
   git clone https://github.com/nimalchrist/portfolio-app.git
   ```

2. Install project dependencies:
   ```
   cd portfolio-app/
   npm install
   ```

## Development

To run the project locally for development:

```
npm start
```

This command starts the development server, and you can access the portfolio in your browser at [http://localhost:3000](http://localhost:3000).

## Building and Deployment

To build the project for production and deploy it to GitHub Pages:

```
npm run build
```

This command generates a production-ready bundle in the `build` directory. Deploy the contents of this directory to your GitHub Pages repository.

For detailed instructions on deploying a React app to GitHub Pages, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Project Structure

The project structure is as follows:

- `src/` - Contains the source code of the portfolio.
- `public/` - Holds static assets and the main HTML file.
- `src/components/` - Contains React components used in the portfolio.

## React Components

The portfolio consists of the following major components:

- `Home` - Displays the navigation bar and page title.
- `About` - Provides information about myself
- `Resume` - To provide the information about skills, education, and experience.
- `Projects` - Showcases my projects, including descriptions, technologies used, and links.
- `Contact` - Displays contact information.

Here's an example of how to use the `Projects` component:

```jsx
import React from 'react';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Projects />
    </div>
  );
}

export default App;
```

## Responsive Design

The portfolio is designed to be responsive, ensuring optimal user experience on various devices and screen sizes. The layout and content adapt seamlessly between desktop, tablet, and mobile views. CSS media queries and responsive design techniques are employed to achieve this.

## Hosting on GitHub Pages

You can access my portfolio online at [https://nimalchristo.github.io/portfolio-app/](https://nimalchrist.github.io/portfolio-app/). It is hosted on GitHub Pages, making it easy to share and showcase my work.

## Usage Instructions

To navigate and interact with my portfolio:

- Use the navigation bar at the top to access different sections: Home, About, Resume, Projects, and Contact.
- Scroll down the page to view each section's content.
- Click on the links within the Projects section to visit the project websites or repositories.

Feel free to explore, provide feedback, and get in touch!

## Future Updates

I have plans to further enhance my portfolio by adding additional projects and sections. Stay tuned for updates! If you have any suggestions or feedback, feel free to reach out or contribute to the project.

---

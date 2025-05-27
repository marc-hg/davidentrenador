import React from "react"

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>© {year} My Gatsby Site. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://twitter.com" className="text-gray-300 hover:text-white mx-2">
            Twitter
          </a>
          <a href="https://github.com" className="text-gray-300 hover:text-white mx-2">
            GitHub
          </a>
          <a href="https://linkedin.com" className="text-gray-300 hover:text-white mx-2">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

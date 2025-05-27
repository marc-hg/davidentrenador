import React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Contact Us</h1>
      <p>
        Have questions or want to get in touch? This is the contact page where you can
        find our contact information.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">
          <strong>Email:</strong> info@mygatsbysite.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> (555) 123-4567
        </p>
        <p className="mb-2">
          <strong>Address:</strong> 123 Web Dev Lane, Internet City
        </p>
      </div>
    </Layout>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact Us</title>

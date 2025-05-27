import React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>
        This is the about page of our Gatsby site. 
        Here you would typically share information about your project, company, or yourself.
      </p>
      <p>
        The layout component ensures consistent header and footer across all pages.
      </p>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Us</title>

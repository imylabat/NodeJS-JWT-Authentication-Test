// src/pages/Dashboard.jsx
import React from "react";
import Navbar from "../components/NavBar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4" aria-label="Dashboard Page">
          Dashboard
        </h1>

        {/* 200-word summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Project Summary</h2>
          <p className="leading-relaxed">
            {/* Replace this placeholder text with your real 200-word article summary */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel 
            dictum magna. Integer porttitor velit nec risus porttitor, eget 
            bibendum velit pretium. Vivamus vulputate magna sed orci posuere, 
            non ultricies eros ornare. Phasellus dictum justo ac mi aliquet 
            vehicula. Sed varius lorem id dolor cursus, id porttitor orci 
            interdum. Aliquam erat volutpat. Morbi cursus lacus non massa 
            vehicula luctus. Cras volutpat dui non lectus tincidunt, sed 
            fermentum lacus malesuada. Etiam maximus risus a nisl interdum 
            tincidunt. Donec suscipit augue a turpis aliquam iaculis. Maecenas 
            id mauris a erat volutpat cursus vitae id velit.
          </p>

          <p className="mt-2">
            <strong>Source: </strong>
            <a
              href="https://example.com/article"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://example.com/article
            </a>
          </p>
        </section>

        {/* Technical explanation paragraph */}
        <section>
          <h2 className="text-xl font-semibold mb-2">
            Technical Implementation
          </h2>
          <p className="leading-relaxed">
            {/* Replace this with your tech paragraph once polished */}
            This application is built as a decoupled MERN-based SPA using React 
            on the frontend and Node.js/Express on the backend. JWT 
            authentication ensures secure access to protected routes, and 
            MongoDB is used as the primary database to store chart data. The 
            frontend communicates with the backend over RESTful HTTP calls, 
            and NGINX will serve the production build on port 80 while the 
            backend runs independently on port 3000. Accessibility features 
            and ARIA-friendly components are incorporated throughout the UI.
          </p>
        </section>
      </main>
    </div>
  );
}

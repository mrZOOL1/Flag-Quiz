'use client';
import React from 'react';
import '../app/globals.css'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/e4c421bb39.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )   
}
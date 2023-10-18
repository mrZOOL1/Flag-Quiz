'use client';
import React from 'react';
import '../app/globals.css'

export default function RootLayout({ children }) {

  localStorage.setItem('firstload', 'true');

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
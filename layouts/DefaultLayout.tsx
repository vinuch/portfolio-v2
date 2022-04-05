import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
export default function DefaultLayout({ children }) {
    return (
        <div className="h-scre">
          
            <Nav />
         <div className="z-20">
                  {children}   
            </div>
            <Footer />
        </div>

    )
}

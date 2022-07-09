import React, { useEffect } from "react";
import './loader.css'

import { motion, AnimatePresence } from "framer-motion";


const Loader = ({ setLoading }) => {
    /*useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }, []);*/

    return (
        <motion.div className='loader-container' initial={{ y: 0, opacity: 1 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ type: "spring", duration: 0.5 }}>
            <div className='loader'>
                <svg id="logo" width="282" height="282" viewBox="0 0 282 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M202.075 178.5H171.5V143.5H214H257H267.476C266.144 212.21 210.029 267.5 141 267.5C71.136 267.5 14.5 210.864 14.5 141C14.5 71.136 71.136 14.5 141 14.5C162.977 14.5 183.639 20.1023 201.642 29.9551L176.125 74.1515C165.631 68.6263 153.677 65.5 141 65.5C99.3025 65.5 65.5 99.3025 65.5 141C65.5 182.697 99.3025 216.5 141 216.5C167.426 216.5 190.68 202.921 204.166 182.372L206.706 178.5H202.075Z" stroke="black" strokeWidth="5" />
                    <path d="M277.37 134.978L277.349 134.5H276.87H168.5V131.5H276.638H281H281.184C281.394 134.639 281.5 137.807 281.5 141C281.5 218.596 218.596 281.5 141 281.5C63.404 281.5 0.5 218.596 0.5 141C0.5 63.404 63.404 0.5 141 0.5C165.772 0.5 189.046 6.91062 209.253 18.163L207.168 21.5814C187.568 10.698 165.007 4.5 141 4.5C65.6131 4.5 4.5 65.6131 4.5 141C4.5 216.387 65.6131 277.5 141 277.5C216.387 277.5 277.5 216.387 277.5 141C277.5 138.982 277.456 136.975 277.37 134.978Z" stroke="black" />
                </svg>
            </div>
        </motion.div>
    )
}

export default Loader
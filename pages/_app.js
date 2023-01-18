import { Toaster } from "react-hot-toast";
import Navbar from "@components/Navbar";

import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className="h-screen">
            <Navbar />
            <Component {...pageProps} />
            <Toaster />
        </div>
    );
}

export default MyApp;

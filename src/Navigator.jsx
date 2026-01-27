import React from 'react'

const Navigator = () => {
    return (
        <div>
            {/* Shows the operating system or device platform (Windows, Linux, Mac, etc.) */}
            <h1>Platform: {navigator.platform}</h1>

            {/* Shows the browser's default language (example: en-US, hi-IN) */}
            <h1>Language: {navigator.language}</h1>

            {/* Tells whether "Do Not Track" is enabled in browser settings */}
            <h1>Do Not Track: {navigator.doNotTrack}</h1>

            {/* Gives complete browser and device information */}
            <h1>User Agent: {navigator.userAgent}</h1>

            {/* Checks if the user is currently online or offline */}
            <h1>Online: {navigator.onLine ? "Yes" : "No"}</h1>

            {/* Checks whether cookies are enabled in the browser */}
            <h1>Cookies Enabled: {navigator.cookieEnabled ? "Yes" : "No"}</h1>

            {/* Shows the number of logical CPU cores available */}
            <h1>CPU Cores: {navigator.hardwareConcurrency}</h1>

            {/* Shows approximate device memory in GB */}
            <h1>Device Memory: {navigator.deviceMemory} GB</h1>

            {/* Shows the browser vendor name (like Google Inc.) */}
            <h1>Vendor: {navigator.vendor}</h1>

            {/* Shows the browser application name */}
            <h1>App Name: {navigator.appName}</h1>

            {/* Shows browser version information */}
            <h1>App Version: {navigator.appVersion}</h1>
        </div>
    )
}

export default Navigator

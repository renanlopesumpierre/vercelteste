import React, { useEffect } from 'react';

export const HeroAlternative = () => {
    useEffect(() => {
        // Load the Spline hana-viewer script dynamically safely
        const scriptId = 'hana-viewer-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.type = 'module';
            script.src = 'https://cdn.spline.design/@splinetool/hana-viewer@1.2.48/hana-viewer.js';
            document.head.appendChild(script);
        }

        // Cleanup isn't strictly necessary for this global tool, but good practice
        return () => {
            const script = document.getElementById(scriptId);
            if (script) {
                // Not removing to prevent re-fetching if user navigates back and forth frequently
                // document.head.removeChild(script); 
            }
        };
    }, []);

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#0a0a0f' }}>
            <hana-viewer
                url="https://prod.spline.design/KjhlEwbMVwgRaZTD-8qO/scene.hanacode"
                style={{ width: '100%', height: '100%' }}
            ></hana-viewer>
        </div>
    );
};

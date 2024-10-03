import React, { useEffect } from "react";

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

const SkyFarmBot = () => {
    useEffect(() => {
        const loadBotpress = async () => {
            try {
                await loadScript("https://cdn.botpress.cloud/webchat/v2.2/inject.js");
                await loadScript("https://files.bpcontent.cloud/2024/10/03/14/20241003141350-Y9798VLB.js");
                if (window.botpress) {
                    // Initialize Botpress client here
                } else {
                    console.error("Botpress script not loaded");
                }
            } catch (error) {
                console.error("Failed to load Botpress script", error);
            }
        };

        loadBotpress();
    }, []);

    return (
        <div style={{ width: '0px', height: '0px'}}>
            {/* Botpress chatbot */}
        </div>
    );
};

export default SkyFarmBot;
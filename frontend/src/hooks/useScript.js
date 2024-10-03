import { useEffect } from 'react';

const useScript = (url) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        const handleLoad = () => {
            console.log(`Script loaded: ${url}`);
        };

        const handleError = (error) => {
            console.error(`Script error: ${url}`, error);
        };

        script.addEventListener('load', handleLoad);
        script.addEventListener('error', handleError);

        document.body.appendChild(script);

        return () => {
            script.removeEventListener('load', handleLoad);
            script.removeEventListener('error', handleError);
            document.body.removeChild(script);
        };
    }, [url]);
};

export default useScript;
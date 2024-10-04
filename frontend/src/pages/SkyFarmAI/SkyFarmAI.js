import Menu from "../../components/Menu/Menu";
import React from 'react';
import { getClient } from '@botpress/webchat';
import { buildTheme } from "@botpress/webchat-generator";
import { Container, Header, MessageList, Composer, WebchatProvider } from '@botpress/webchat';
import "./SkyFarmAI.css"
import botAvatar from "../../assets/botAvatar.png"

const theme = buildTheme({
    palette: {
        primary: '#00B0FF',
        secondary: '#FFC107',
        background: '#121212',
        text: '#FFFFFF'
    },
    fontFamily: 'Arial, sans-serif'
});

const config = {
    composerPlaceholder: "How can SkyFarm AI help my farm?",
    botName: "SkyFarm AI",
    botAvatar: botAvatar,
    botDescription:
    "SkyFarm AI harnesses NASA's Earth data to deliver real-time insights for farmers, helping optimize crop management, monitor land conditions, and boost productivity through advanced satellite analytics. Grow smarter with AI-powered precision farming!",
    email: {
        title: "admin@skyfarmanalytics.com",
        link: "mailto:admin@skyfarmanalytics.com",
    },
    website: {
        title: "https://skyfarmanalytics.com",
        link : "https://skyfarmanalytics.com",
    },
};

const clientId = "69e065e5-1087-475c-8eff-dfb94958226a";

const SkyFarmAI = () => {
    const client = getClient({ clientId });
    return (
        <div className="mx-auto p-6 text-gray-200 bg-gray-900 h-screen relative">
            <div className='absolute top-5 left-5'>
                <Menu/>
            </div>
            <header className="text-center text-2xl font-bold text-white mb-4">
                SkyFarm AI Chatbot
            </header>
            <section className="px-28 flex justify-center">
                <WebchatProvider
                    key={JSON.stringify(config)}
                    configuration={config}
                    client={client}
                    theme={theme}>
                    <Container>
                        <Header />
                        <MessageList />
                        <Composer>
                        </Composer>
                    </Container>
                </WebchatProvider>
            </section>
        </div>
    );
}

export default SkyFarmAI;
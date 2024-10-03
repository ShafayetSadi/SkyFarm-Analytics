import Menu from "../../components/Menu/Menu";
import React, { useEffect, useState } from 'react';
import { getClient } from '@botpress/webchat';
import ReactMarkdown from 'react-markdown';

const clientId = "69e065e5-1087-475c-8eff-dfb94958226a";

const SkyFarmAI = () => {
    const [client, setClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const initClient = async () => {
            const clientInstance = getClient({ clientId });
            clientInstance.on("message", (message) => {
                console.log("Received message:", message); // Log received messages
                const text = message.payload.block.text; // Extract the text from the payload
                setMessages((prevMessages) => [...prevMessages, { text, from: 'bot' }]);
            });
            await clientInstance.connect();
            setClient(clientInstance);
        };

        initClient();
    }, []);

    const sendMessage = async () => {
        if (client && input.trim()) {
            console.log("Sending message:", input); // Log sent messages
            await client.sendMessage(input);
            setMessages((prevMessages) => [...prevMessages, { text: input, from: 'user' }]);
            setInput('');
        }
    };

    return (
        <div className="floodMapContainer mx-auto p-6 text-gray-200 bg-gray-900 min-h-screen relative">
            <div className='absolute top-5 left-5'>
                <Menu />
            </div>
            <header className="text-center text-2xl font-bold text-white mb-4">
                Sky Farm AI Chatbot
            </header>
            <section className="map-container">
                <div className="flex flex-col h-[600px] text-black w-full max-w-md mx-auto border border-green-300 rounded-lg overflow-hidden">
                    <div className="flex-1 p-4 overflow-y-auto bg-green-600">
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-2 my-2 rounded ${msg.from === 'user' ? 'bg-green-200 self-end' : 'bg-red-200 self-start'}`}>
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                        ))}
                    </div>
                    <div className="flex p-4 border-t border-gray-300 bg-white">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="How can SkyFarm AI help my farm?"
                            className="flex-1 p-2 border border-gray-300 rounded mr-2"
                        />
                        <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded">Send</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkyFarmAI;
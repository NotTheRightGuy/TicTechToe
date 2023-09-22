/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
            },
            backgroundImage: {
                "sin-wave":
                    "url('https://media0.giphy.com/media/XJcyknmx8qtkA/giphy.gif?cid=ecf05e47p2tcr8yv4tcxnq24al6aog58rjtl3ba464fkr8na&ep=v1_stickers_search&rid=giphy.gif&ct=s')",
            },
        },
    },
    plugins: [],
};

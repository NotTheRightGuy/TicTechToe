export default function Hero() {
    return (
        <div className=" h-[90vh] w-screen text-white flex justify-between relative pt-24">
            <div className="absolute left-[42vw] top-[22vh]">
                <img
                    src="https://media0.giphy.com/media/h5cth74Jg7q2jW51Vk/giphy.gif?cid=ecf05e47ghft8q02kh92cyxkttdg8t1rq78hedo56vy0zvfh&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                    className="h-14"
                />
            </div>
            <div className="w-1/2 pl-8 ">
                <div className="text-6xl pt-24 font-satoshi font-bold">
                    Your unique voiceprint: the future of secure digital access.
                </div>
                <div className="text-xl pt-16 font-satoshi opacity-40">
                    As a powerful addition to traditional logins, Voice Vault
                    acts as your second line of defense, making every access
                    attempt doubly secure. Don&rsquo;t just rely on what you
                    know; trust in who you are. With Voice Vault, your voice
                    isn&rsquo;t just heard—it&rsquo;s your ultimate
                    authenticator. Combine the strength of a password with the
                    uniqueness of your voice. Speak, strengthen, secure.
                </div>
                <button
                    onClick={() => {
                        window.location.href = "/sign-in";
                    }}
                    className="text-[#9f9f9f] border border-[#9f9f9f] px-5 py-2 rounded-full mt-8 transition-all hover:border-white hover:text-white"
                >
                    Jump in
                </button>
            </div>
            <div>
                <img
                    src="https://media1.giphy.com/media/Pn6MsQ9ftT5AZSMOua/giphy.gif?cid=ecf05e474ss8cu9o5cfzy647o6ne00kgtsreigob6jciwsmn&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                    alt="Sine wave background"
                    className="translate-y-16 h-[80vh] w-[50vw]"
                />
            </div>
        </div>
    );
}

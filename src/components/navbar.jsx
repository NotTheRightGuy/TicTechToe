import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
    return (
        <div className="h-20 w-screen fixed top-0 z-10">
            <div className="flex justify-between items-center">
                <div className="font-satoshi flex items-center h-max pl-4 ">
                    <img
                        src="second_logo.png"
                        alt="Logo"
                        className="h-24 w-24"
                    />
                </div>
                <div className="font-satoshi text-white gap-10 text-[13px] flex  transition-opacity">
                    <button className="cursor-pointer opacity-80 hover:opacity-95">
                        Home
                    </button>
                    <button className="cursor-pointer opacity-80 hover:opacity-95">
                        About
                    </button>
                    <button className="cursor-pointer opacity-80 hover:opacity-95">
                        Contact Us
                    </button>
                </div>
                <SignedOut>
                    <div>
                        <button
                            className="font-satoshi text-[#1f1f1f] mr-10 py-2 px-3 text-sm rounded-3xl hover:bg-[#dfdfdf] transition-all cursor-pointer bg-white"
                            onClick={() => {
                                window.location.href = "/sign-up";
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </SignedOut>
                <SignedIn>
                    <div className="flex gap-8 items-center">
                        <div className="text-white opacity-80 cursor-pointer hover:opacity-95 transition-opacity">
                            Vault
                        </div>
                        <div className="mr-10">
                            <UserButton />
                        </div>
                    </div>
                </SignedIn>
            </div>
        </div>
    );
}

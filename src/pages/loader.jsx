import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Loader() {
    const vaultDoor = useRef(null);
    const vaultBar = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        gsap.to(vaultDoor.current, {
            duration: 2,
            delay: 1,
            y: 0,
            ease: "power4.out",
        });
        gsap.to(vaultBar.current, {
            duration: 2,
            delay: 1,
            rotate: 360,
            ease: "power4.out",
        });
        gsap.to(vaultBar.current, {
            duration: 0.5,
            delay: 3.1,
            rotate: 400,
            ease: "power4.out",
        });

        gsap.to(vaultBar.current, {
            delay: 3.7,
            height: "300px",
            duration: 0.2,
            ease: "power4.out",
        });
        gsap.to(container.current, {
            duration: 1,
            delay: 4.1,
            y: "-100%",
            ease: "power4.out",
        });
        gsap.to(container.current, {
            duration: 0.1,
            delay: 5.2,
            display: "none",
        });
    }, []);

    return (
        <div
            className="bg-white absolute h-screen w-screen flex justify-center items-center flex-col z-[100]"
            ref={container}
        >
            <div
                className="absolute h-[600px] w-[40px]  bg-[#1f1f1f] z-[1] rounded-[20px] font-satoshi font-extrabold"
                ref={vaultBar}
            ></div>
            <div className="overflow-clip pt-2 h-[6.2rem] absolute z-[2]">
                <div className="text-right border-2 p-3 border-[#1f1f1f] rounded-br-2xl bg-white">
                    <div className="font-satoshi font-extrabold text-4xl">
                        Voice
                    </div>
                    <div className="font-satoshi font-bold">vault</div>
                </div>
                <div
                    ref={vaultDoor}
                    className="text-right border-2 p-3 border-[#1f1f1f] border-l-8 rounded-br-2xl border-r-8 h-24 w-32 bg-white -translate-y-full"
                ></div>
            </div>
        </div>
    );
}

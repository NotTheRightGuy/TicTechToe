import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { BiSolidMicrophoneAlt } from "react-icons/bi";

export default function Record() {
    const [recording, setRecording] = useState(false);
    const micOff = useRef(null);
    const audioContainer = useRef(null);
    const handleRecording = () => {
        setRecording(!recording);
        if (recording) {
            gsap.to(micOff.current, {
                duration: 0.2,
                height: "400px",
                ease: "power4.out",
            });
        }
        if (!recording) {
            gsap.to(micOff.current, {
                duration: 0.2,
                height: "0px",
                ease: "power4.out",
            });
        }
    };

    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        audioContainer.current.appendChild(audio);
    };

    const {
        startRecording,
        stopRecording,
        togglePauseResume,
        recordingBlob,
        isRecording,
        isPaused,
        recordingTime,
        mediaRecorder,
    } = useAudioRecorder();

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col gap-4">
            {/* <div
                className="h-[400px] w-[50px] absolute rounded-3xl bg-gray-500 rotate-45 cursor-pointer"
                onClick={() => handleRecording()}
                ref={micOff}
            ></div>
            <div>
                <BiSolidMicrophoneAlt
                    onClick={() => handleRecording()}
                    className="text-[300px] text-gray-500 cursor-pointer transition-colors"
                />
            </div> */}

            <div id="audio-container" ref={audioContainer}></div>
        </div>
    );
}

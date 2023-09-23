import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { HiPlay } from "react-icons/hi";
import { VscDebugRestart } from "react-icons/vsc";

export default function Record() {
    const [error, setError] = useState("");
    const micOff = useRef(null);
    const microphone = useRef(null);
    const transcriptContainer = useRef(null);
    const [transcript, setTranscript] = useState("");
    const { startRecording, stopRecording, recordingBlob, isRecording } =
        useAudioRecorder();

    let recognition;

    if ("SpeechRecognition" in window) {
        recognition = new window.SpeechRecognition();
    } else if ("webkitSpeechRecognition" in window) {
        recognition = new window.webkitSpeechRecognition();
    } else {
        setError("Speech Recognition is not supported in this browser");
        micOff.current.className =
            "h-[350px] w-[30px] absolute rounded-3xl bg-red-500 rotate-45 cursor-pointer";
    }

    if (recognition) {
        recognition.onresult = (event) => {
            const current = event.resultIndex;
            const newTranscript = event.results[current][0].transcript;
            setTranscript(
                (prevTranscript) => prevTranscript + " " + newTranscript
            );
        };
    }

    const handleRecording = () => {
        if (!isRecording) {
            startRecording();

            gsap.to(micOff.current, {
                duration: 0.2,
                opacity: 0,
            });

            gsap.to(microphone.current, {
                duration: 0.2,
                scale: 1.1,
                ease: "power1.inOut",
            });

            recognition && recognition.start();
        } else {
            stopRecording();

            gsap.to(micOff.current, {
                duration: 0.2,
                opacity: 1,
            });

            gsap.to(microphone.current, {
                duration: 0.2,
                scale: 1,
                ease: "power1.inOut",
            });

            recognition && recognition.stop();
        }
    };

    useEffect(() => {
        if (recordingBlob && transcriptContainer.current) {
            const transcriptElem = document.createElement("p");
            transcriptElem.textContent = transcript;
            transcriptContainer.current.innerHTML = transcriptElem.textContent;
        }
    }, [recordingBlob, transcript]);

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col gap-y-12">
            {error && (
                <div className="font-satoshi border-2 border-red-400 px-4 py-2 text-red-400 text-md uppercase font-bold">
                    {error}
                </div>
            )}

            <div className=" w-1/2 font-satoshi text-center text-gray-300 font-bold">
                To register, speak your chosen words aloud now. Remember, these
                words will be required for future access to your documents and
                cannot be changed later. Click the microphone icon to start. If
                you&apos;re unsatisfied, click the restart icon. When finished,
                click the play icon.
            </div>

            <div ref={microphone} className="relative">
                <BiSolidMicrophoneAlt
                    onClick={handleRecording}
                    className="text-[300px] text-gray-500 cursor-pointer transition-colors"
                />
                <div
                    className="h-[350px] w-[30px] absolute -top-4 right-32 rounded-3xl bg-gray-500 rotate-45 cursor-pointer"
                    onClick={handleRecording}
                    ref={micOff}
                ></div>
            </div>

            <div
                id="transcript-container"
                ref={transcriptContainer}
                className="font-satoshi font-semibold text-2xl uppercase text-[#333]]"
            ></div>

            <div className="flex gap-16">
                <div>
                    <VscDebugRestart
                        className="text-6xl text-gray-500 cursor-pointer transition-colors hover:text-gray-400"
                        onClick={() => {
                            setTranscript("");
                        }}
                    />
                </div>
                <div>
                    <HiPlay className="text-6xl text-gray-500 cursor-pointer transition-colors hover:text-gray-400" />
                </div>
            </div>
        </div>
    );
}

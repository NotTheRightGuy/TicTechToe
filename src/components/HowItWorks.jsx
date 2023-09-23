export default function HowItWorks() {
    return (
        <div className="grid grid-cols-2 w-screen mt-48 gap-32 ">
            <div className="pl-20">
                <div className="font-satoshi font-extrabold text-6xl">
                    How do we solve it?
                </div>
                <div className="text-xl font-satoshi opacity-40 mt-16">
                    Neural speaker embedding systems convert human utterances
                    into unique points within a hyperspherical space, capturing
                    vocal nuances. This representation, rooted in a
                    Convolutional Neural Network (CNN) developed using
                    TensorFlow, benefits from pre-trained models, ensuring
                    precise vocal recognition.
                    <br />
                    <br /> The essence lies in comparing voice embeddings using
                    cosine similarity. A high score suggests similar voices,
                    while a low one indicates differences. Leveraging this
                    method, tasks like voice identification, verification, and
                    clustering become efficient and accurate, promising broad
                    applications in voice-based technologies.
                </div>
            </div>
            <div>
                <img
                    src="/3d-const.png"
                    alt="what this"
                    className="h-[60vh] pl-32"
                />
            </div>
        </div>
    );
}

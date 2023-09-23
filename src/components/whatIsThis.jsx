export default function WhatsThis() {
    return (
        <div className="grid grid-cols-2 w-screen mt-32 gap-32 pr-20">
            <div>
                <img
                    src="/3d-blocks-3.png"
                    alt="what this"
                    className="h-[60vh] pl-16 "
                />
            </div>
            <div>
                <div className="font-satoshi font-extrabold text-6xl">
                    The problem that needs to be solved
                </div>
                <div className="text-xl pt-16 font-satoshi opacity-40">
                    Passwords are the most common form of authentication. They
                    are used to prove your identity or gain access to
                    information or an account. But they are also the weakest
                    form of authentication. Passwords can be guessed, stolen, or
                    hacked. They can be forgotten or written down. And they are
                    often reused, so if one password is compromised, multiple
                    accounts are at risk.
                    <br />
                    <br />
                    In the modern world where everything is becoming easy and
                    fast, why do we even need to remember passwords to login
                    into that silly recipe website?
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default function Vault() {
    return (
        <div className="h-screen w-screen font-satoshi flex items-center justify-center flex-col gap-16">
            <div className=" text-7xl font-extrabold">VAULT</div>
            <p className="w-1/2 text-center text-xl">
                This is where we can place anything that the user needs to see
                after authentication. This is a protected route, so the user
                must be authenticated to see this page.
                <br />
                <br />
                For the time being, here&rsquo;s Riko!
                <img
                    className="pl-36 mt-4"
                    src="https://media0.giphy.com/media/W0VuY0dTxH9L6vLUJ2/giphy.gif?cid=ecf05e47mc3oc65wze3fcshzvxre3aymcrddw3s7dotq8cuv&ep=v1_stickers_search&rid=giphy.gif&ct=s"
                    alt="Dancing Cat"
                />
            </p>
        </div>
    );
}

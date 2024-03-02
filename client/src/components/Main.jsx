import { Parallax } from "react-parallax";
import BG from "../assets/pic1.png";

function Btn({ text, onClick }) {
    return (
        <button onClick={onClick} className="bg-orange-600 text-white py-2 px-3 rounded-xl m-2 transition duration-200 ease-in-out hover:bg-orange-700">{text}</button>
    )
}

function Main() {
    return (
        <div>
            <Parallax strength={400} bgImage={BG}>
                <div className="content bg-black bg-opacity-75 flex justify-center items-center">
                    <div>
                        <h1 className="font-semibold text-3xl text-center text-white p-3">Swami Vivekananda Social Development and Charitable Trust Kurukshetra</h1>
                        <div className="flex justify-center items-center">
                            <Btn text="Mail Us" onClick={() => alert("Mail Us")} />
                            <Btn text="Donate" onClick={() => alert("Donate")} />
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default Main;
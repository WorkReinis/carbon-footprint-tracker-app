import "./footer-01.css";
import { IoMdAdd } from "react-icons/io";


function Footer01() {
    const data = [
        { name: "M", value: 12, maxValue: 100 },
        { name: "T", value: 65, maxValue: 100 },
        { name: "W", value: 30, maxValue: 100 },
        { name: "T", value: 35, maxValue: 100 },
        { name: "F", value: 20, maxValue: 100 },
    ];

    return (
        <div className="footer flex flex-row justify-between items-center gap-4 mt-4">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-md font-boldleading-tight">
                    You can share your board with your friends
                </h1>
            </div>

            <div className="flex flex-row gap-2 items-start">
                
                    <div className="flex flex-col justify-center items-center gap-1">
                        <div className="flex justify-center items-center circle-add rounded-full overflow-hidden">
                            <IoMdAdd size={28} style={{ color: "var(--normal-gray)" }}/>
                        </div>
                    </div>
                

                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="circle-avatar rounded-full overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            alt="Avatar"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                        />
                    </div>
                    <h2>Nick</h2>
                </div>

                <div className="flex flex-col justify-center items-center gap-1">
                    <div className="circle-avatar rounded-full overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            alt="Avatar"
                            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"
                        />
                    </div>
                    <h2>Steffy</h2>
                </div>
            </div>
        </div>
    );
}

export default Footer01;

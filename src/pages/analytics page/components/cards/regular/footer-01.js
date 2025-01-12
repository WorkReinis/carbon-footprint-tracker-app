import "./footer-01.css";
import { IoMdAdd } from "react-icons/io";

function Footer01() {
    const imagesMap = ["/images/user-01.png", "/images/user-02.png"];

    return (
        <div className="footer-container flex flex-col justify-start items-center mt-4">
            <h1 className="text-xl font-bold pb-2">
                Your dashboard looks great!
            </h1>

            <div className="flex flex-row justify-between items-center gap-6">
                <div className="flex flex-col justify-between items-start gap-1">
                    {/* <h1 className="text-lg font-bold leading-tight">
                        Your dashboard looks great!
                    </h1> */}
                    <h1 className="text-md leading-tight">
                        Share and encourage friends to take action!
                    </h1>
                </div>

                <div className="flex flex-row gap-2 items-start ">
                    <div className="flex flex-col justify-center items-center gap-1">
                        <div className="circle-avatar rounded-full overflow-hidden hover-scale active-scale">
                            <img
                                className="w-full h-full object-cover"
                                alt="Avatar"
                                src={imagesMap[0]}
                            />
                        </div>
                        <h2>Nick</h2>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1">
                        <div className="circle-avatar rounded-full overflow-hidden hover-scale active-scale">
                            <img
                                className="w-full h-full object-cover"
                                alt="Avatar"
                                src={imagesMap[1]}
                            />
                        </div>
                        <h2>Steffy</h2>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1">
                        <div className="flex justify-center items-center circle-add rounded-full overflow-hidden hover-scale active-scale">
                            <IoMdAdd
                                size={36}
                                style={{ color: "var(--normal-gray)" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer01;

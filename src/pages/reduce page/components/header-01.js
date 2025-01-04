import "../styles/header-01.css";
import { IoMdAdd } from "react-icons/io";


function ReduceHeader01({ title, value, units, context, icon, fade, user }) {
    return (
        <div className={`header-container ${fade}`}>
            <div className="flex justify-between items-center ">
                <div>
                    <div className="flex flex-col justify-between align-start ">
                        <h1 className="font-bold text-lg">Reduce Carbon Footprint</h1>
                        <h2 className="text-2xl">Featured</h2>
                        {/* <div className="circle-avatar rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                alt="Avatar"
                                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"
                            />
                        </div> */}
                    </div>

                    <div className="flex justify-start items-end gap-1">
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <span
                            className="flex align-baseline"
                            style={{ fontSize: "0.85em" }}
                        >
                            {units}
                        </span>
                    </div>

                    <span
                        lassName="text-xs"
                        style={{
                            color: "white",
                            fontSize: "0.85em",
                        }}
                    >
                        {context}
                    </span>
                </div>
            </div>

            

            <div className="flex justify-between space-x-4 pt-8">
              
            </div>
            
        </div>
    );
}

export default ReduceHeader01;

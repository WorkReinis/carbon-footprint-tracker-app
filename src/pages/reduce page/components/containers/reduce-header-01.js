import "../../styles/reduce-header-01.css";

import ReduceCarousel01 from "./reduce-carousel-01";

function ReduceHeader01({ title, value, units, context, icon, fade, user }) {
    return (
        <div className="reduce-header-container flex justify-between items-center">
            
                <div>
                    <div className="flex flex-col justify-between align-start pr-6 pl-6 pb-6">
                        <h1 className="font-bold text-lg">
                            Reduce Footprint
                        </h1>
                        <h2 className="text-2xl">Featured Actions</h2>
                    </div>

                    <ReduceCarousel01 />
                </div>
          
        </div>
    );
}

export default ReduceHeader01;

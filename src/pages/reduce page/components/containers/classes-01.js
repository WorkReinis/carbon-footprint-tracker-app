import ReduceCarousel02 from "./reduce-carousel-02";
import "../../styles/classes-01.css";

function Classes01() {
    return (
        <div className="reduce-classes-container flex justify-between items-center">
            <div>
                <div className="flex flex-row justify-between items-baseline pl-6 pb-4 pr-6">
                    <span className="font-bold text-xl">Climate Classes</span>
                    <button className="offsets-button font-bold text-sm">
                        See More (8)
                    </button>
                </div>

                <ReduceCarousel02 />
            </div>
        </div>
    );
}

export default Classes01;

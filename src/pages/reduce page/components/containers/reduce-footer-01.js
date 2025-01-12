import "../../styles/reduce-footer-01.css";

function ReduceFooter01() {
    return (
        <div className="reduce-footer-container ">
            <div className="flex flex-col justify-center text-start items-center">
                <h1 className="font-bold text-xl pb-2">
                    You're carbon neutral!
                </h1>
                <div className="flex flex-row gap-3 justify-center items-center">
                    <h1 className=" text-md leading-tight">
                        You have offset 100% of your footprint this month
                    </h1>
                    <button className="reduce-footer-button-02 text-md active-scale">
                        Share
                    </button>
                </div>
            </div>
            {/* <div className="flex justify-center pt-4">
                <button className="reduce-footer-button text-md">
                    Share with friends
                </button>
            </div> */}
        </div>
    );
}

export default ReduceFooter01;

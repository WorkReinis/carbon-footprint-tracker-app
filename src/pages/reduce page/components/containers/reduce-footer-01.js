import "../../styles/reduce-footer-01.css";

function ReduceFooter01() {
    return (
        <div className="reduce-footer-container ">
            <div className='flex flex-col justify-center text-start'>
                <h1 className="font-bold text-lg">You're carbon neutral!</h1>
                <h1 className=" text-md leading-tight">
                    You have offset 100% of your carbon footprint this month
                </h1>
            </div>
            <div className="flex justify-center pt-4">
                <button className="reduce-footer-button text-md">
                    Share with friends
                </button>
            </div>
        </div>
    );
}

export default ReduceFooter01;

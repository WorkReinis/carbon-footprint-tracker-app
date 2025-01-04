import '../../styles/challenges-card-01.css'

function ChallengesCard01() {
    return (
        <div className="challenges-card-container flex flex-row gap-4 items-start">
            <div className="challenges-image-placeholder">
                <img />
            </div>

            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col ">
                    <span className="font-bold">Flight to UK</span>
                    <span>Business trip</span>
                </div>

                <div className="flex flex-col items-end">
                    <span className="font-bold">+1000kg</span>
                    <span>CO2</span>
                </div>
            </div>
        </div>
    );
}

export default ChallengesCard01;

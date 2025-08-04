import "../../styles/last-activities-card-01.css";

function LastActivitiesCard01({ title, date, value, img }) {
    return (
        <div className="last-activities-card flex flex-row gap-2 items-start hover-scale active-scale">
            <div className="last-activities-image-placeholder">
                <img classname="last-activities-image" src={img}/>
            </div>

            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col ">
                    <span className="font-bold text-sm">{title}</span>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>

                <div className="flex flex-col items-end">
                    <span className="font-bold text-sm">{value}</span>
                    <span className="text-xs text-gray-500">CO<sub>2</sub>e</span>
                </div>
            </div>
        </div>
    );
}

export default LastActivitiesCard01;

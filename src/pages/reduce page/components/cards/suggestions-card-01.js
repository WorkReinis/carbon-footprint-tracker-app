import "../../styles/suggestions-card-01.css";

function SuggestionsCard01({
    title,
    description,
    value,
    units,
    context,
    icon,
}) {
    return (
        <div className="swipe-card suggestions-card-container flex flex-row gap-3 items-start">
            <div className="suggestions-image-placeholder flex justify-center items-center">
                {icon}
            </div>

            <div className="flex flex-row justify-between">
                <div className="flex flex-col ">
                    <span className="text-sm ">{title}</span>
                    <span className="text-sm">{description}</span>
                </div>

                <div className="flex flex-col items-end suggestions-value">
                    <div className="flex flex-row items-end gap-1">
                        <span className="font-bold text-sm">{value}</span>
                        <span className="font-bold text-sm ">{units}</span>
                    </div>
                    <span className=" text-xs whitespace-nowrap">
                        {context}
                    </span>
                </div>
            </div>
        </div>

        // <div className="suggestions-card-container flex flex-row gap-3 items-start">
        // <div className="suggestions-image-placeholder flex justify-center items-center">
        //     {icon}
        // </div>

        // <div className="flex flex-row justify-between w-full gap-6">
        //     <div className="flex flex-col ">
        //         <span className="font-bold text-sm">{title}</span>
        //         <span className="text-sm">{description}</span>
        //     </div>

        //     <div className="flex flex-col items-end ">
        //         <span className="font-bold text-sm">{value}</span>
        //         <span className=" text-sm">{units}</span>
        //     </div>
        // </div>
        // </div>
    );
}

export default SuggestionsCard01;

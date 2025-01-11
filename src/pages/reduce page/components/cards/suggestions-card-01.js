import "../../styles/suggestions-card-01.css";

function SuggestionsCard01({
    title,
    description,
    value,
    units,
    context,
    icon,
    img
}) {
    return (
        <div className="suggestions-card-container flex flex-row gap-3 items-start">
            <div className="suggestions-image-placeholder flex justify-center items-center">
                {/* {icon} */}
                <img src={img} className="suggestions-image"></img>
            </div>
            
            <div className="suggestions-card-text flex flex-row justify-between items-center w-full">
                <div className="flex flex-col ">
                    <span className="text-md font-bold">{title}</span>
                    <span className="text-sm" style={{ color: "var(--darkish-gray)" }}>{description}</span>
                </div>

                <div className="flex flex-col items-end suggestions-value align-center pr-1 pb-0.5 pt-0.5">
                    <div className="flex flex-row items-end gap-1">
                        <span className="font-bold text-md">{value}</span>
                        <span className="font-bold text-md ">{units}</span>
                    </div>
                    <span className=" text-sm whitespace-nowrap" style={{ color: "var(--darkish-gray)" }}>
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

import "./small-comparison-chart-01.css";

const dataset = {
    personalEmissions: 960,
    globalEmissions: 4800, 
};

function SmallComparisonChart01() {
    const personalPercentage =
        (dataset.personalEmissions / dataset.globalEmissions) * 100;
    const globalPercentage = 100; 

    return (
        <div className="comparison-container gap-2">
            <div
                className="circle"
                style={{
                    width: `${personalPercentage}%`,
                    height: `${personalPercentage}%`,
                }}
            >
                <span style={{ fontSize: `${personalPercentage / 7}px` }}>
                    {dataset.personalEmissions}
                </span>
            </div>

            <div
                className="circle"
                style={{
                    width: `${globalPercentage}%`,
                    height: `${globalPercentage}%`,
                }}
            >
                <span style={{ fontSize: `${globalPercentage / 7}px` }}>
                    {dataset.globalEmissions}
                </span>
            </div>
        </div>
    );
}

export default SmallComparisonChart01;

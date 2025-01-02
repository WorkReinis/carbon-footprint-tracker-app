import "./comparison-chart-01.css";

const dataset = {
    personalEmissions: 400, 
    globalEmissions: 1000, 
};

function ComparisonChart01() {
    const personalPercentage =
        (dataset.personalEmissions / dataset.globalEmissions) * 100;
    const globalPercentage = 100; 

    return (
        <div className="comparison-container">
            <div className="circle" style={{ width: `${personalPercentage}%` }}>
                <span style={{ fontSize: `${personalPercentage / 3}px`}}>{dataset.personalEmissions} kg CO₂</span>
            </div>

            <div className="circle" style={{ width: `${globalPercentage}%` }}>
                <span style={{ fontSize: `${globalPercentage / 3}px` }}>
                    {dataset.globalEmissions} kg CO₂
                </span>
            </div>
        </div>
    );
}

export default ComparisonChart01;

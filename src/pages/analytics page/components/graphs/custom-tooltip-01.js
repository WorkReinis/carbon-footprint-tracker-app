

const CustomTooltip01 = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
        style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
            border: "0.1em solid rgba(255, 255, 255, 0.9)", // Subtle border
            backdropFilter: "blur(3px)", // Blur effect
            borderRadius: "1em", // Rounded corners
            padding: "0.5em", // Spacing
            color: "#000", // Text color
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow
            textAlign: "center",
          }}
        >
          
          <p style={{ margin: 0 }}>{`${payload[0].value}`}</p>
          {/* Add more details if needed */}
        </div>
      );
    }
  
    return null; // Return nothing when tooltip is not active
  };


  export default CustomTooltip01;

import "../../styles/last-activities-01.css";
import LastActivitiesCard01 from "../cards/last-activities-card-01";

function LastActivities01() {
    const activities = [
        {
            title: "Chicken salad for dinner",
            date: "05/10/2025",
            value: "+1.9kg",
            img: "/images/meal-01.png"
        },
        {
            title: "Public transport to city center",
            date: "05/10/2025",
            value: "+3.2kg",
            img: "/images/train-03.png"
        },
        {
            title: "Flight to the UK for business",
            date: "04/10/2025",
            value: "+520kg",
            img: "/images/plane-01.png"
        },
        {
            title: "Steak dinner at restaurant",
            date: "03/10/2025",
            value: "+7.5kg",
            img: "/images/meat-01.png"
        },
        {
            title: "Happy Meal from McDonald's",
            date: "03/10/2025",
            value: "+2.6kg",
            img: "/images/meal-01.png"
        },
    ];


    return (
        <div className="activities-container fade-in-2">
            <div className="flex flex-row justify-between items-baseline pb-4">
                <span className="font-bold text-xl">Last activities</span>
                <button className="home-see-more-button font-bold text-sm">
                    See All (100+)
                </button>
            </div>

            <div className="flex flex-col gap-2">
                {activities.map((item, index) => (
                    <LastActivitiesCard01
                        key={index}
                        title={item.title}
                        date={item.date}
                        value={item.value}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default LastActivities01;

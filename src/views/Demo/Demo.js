import ScheduledClasses from "./ScheduledClasses/ScheduledClasses";
import WidgetsBrand from "../widgets/WidgetsBrand";
function Demo(){
    return(
        <div className="events-body">
        <ScheduledClasses className="mb-4" withCharts/>
        {/* <WidgetsBrand className="mb-4" withCharts /> */}
        </div>

    );
}
export default Demo;
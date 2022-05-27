import FeaturedInfo from "../comps/FeaturedInfo";
import Widgetsm from '../comps/Widgetsm'
import Widgetlg from '../comps/Widgetlg'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      
      <div style={{margin:"20px"}} className="widegetCollection d-flex">
      <Widgetsm  />
      <Widgetlg  />
      </div>
    </div>
  );
}

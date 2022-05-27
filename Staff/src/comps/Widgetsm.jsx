import VisibilityIcon from '@mui/icons-material/Visibility';
export default function Widgetsm() {
  return (
    <div className='widgetsm shadow  bg-white rounded'>
        <span className="widgetsmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://media.istockphoto.com/photos/portrait-of-young-smiling-woman-face-partially-covered-with-flying-picture-id1297159365?b=1&k=20&m=1297159365&s=170667a&w=0&h=ojvU4Sbp8Wcu1rbE5bVx9dn0KOIAvDtpDmUfg7mLAOk=" alt="" />
                <div className="widgetsmUser">
                    <span className="widgetsmUserName">Kristen Rana</span>
                    <span className="widgetsmUserTitle">Data Analyst</span>
                </div>
                <button className="widgetsmButton">
                  <VisibilityIcon className='mx-1' />
                  Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://media.istockphoto.com/photos/cropped-shot-of-an-africanamerican-young-woman-using-smart-phone-at-picture-id1313901506?b=1&k=20&m=1313901506&s=170667a&w=0&h=Dg9qzoAe0pYsBceTUZ6lzaWeUuG3ZQ2WZuLqXvYc718=" alt="" />
                <div className="widgetsmUser">
                    <span className="widgetsmUserName">Nora Negi</span>
                    <span className="widgetsmUserTitle">SM Infulencer</span>
                </div>
                <button className="widgetsmButton">
                  <VisibilityIcon className='mx-1' />
                   Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg" alt="" />
                <div className="widgetsmUser">
                    <span className="widgetsmUserName">Megan Jyala</span>
                    <span className="widgetsmUserTitle">Model</span>
                </div>
                <button className="widgetsmButton">
                  <VisibilityIcon className='mx-1' />
                  Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585__340.jpg" alt="" />
                <div className="widgetsmUser">
                    <span className="widgetsmUserName">Laura Sean</span>
                    <span className="widgetsmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetsmButton">
                  <VisibilityIcon className='mx-1' />
                  Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg" alt="" />
                <div className="widgetsmUser">
                    <span className="widgetsmUserName">Alexa Kemnie</span>
                    <span className="widgetsmUserTitle">Data Scientist</span>
                </div>
                <button className="widgetsmButton">
                  <VisibilityIcon className='mx-1' />
                  Display
                </button>
            </li>
        </ul>
    </div>
  )
}

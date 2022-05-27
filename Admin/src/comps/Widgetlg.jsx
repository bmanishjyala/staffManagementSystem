import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function Widgetlg() {
    
  return (
    <div className='widgetlg  shadow  bg-white rounded'>
        <h3 style={{fontWeight:"600",fontSize:"22px"}}>Latest Transcation</h3>
        <table class="table ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Handle</th>
      <th scope="col">Status</th>
      <th scope="col">Amt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Manish</td>
      <td>Jyala</td>
      <td>@mdo</td>
      <td className="text-success d-flex align-item-center"><FiberManualRecordIcon style={{width:"15px",marginRight:"2px"}} />Active</td>
      <td>$25</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Vikas</td>
      <td>Dubey</td>
      <td>@fat</td>
      <td className="text-danger  d-flex align-item-center"> <FiberManualRecordIcon style={{width:"15px",marginRight:"2px"}} />Pending</td>
      <td>$50</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Nikhil</td>
      <td>Mumbiker</td>
      <td>@twitter</td>
      <td className="text-danger  d-flex align-item-center"> <FiberManualRecordIcon style={{width:"15px",marginRight:"2px"}} />Pending</td>
      <td>$20</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Deepak</td>
      <td>Chaurasiya</td>
      <td>@deechu</td>
      <td className="text-success  d-flex align-item-center"><FiberManualRecordIcon style={{width:"15px",marginRight:"2px"}} />Active</td>
      <td>$35</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Ashutosh</td>
      <td>Lalit</td>
      <td>@aslalit</td>
      <td className="text-success  d-flex align-item-center"><FiberManualRecordIcon style={{width:"15px",marginRight:"2px"}} />Active</td>
      <td>$15</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

import React from 'react'
import AnchorSharpIcon from '@mui/icons-material/AnchorSharp';
import ApartmentSharpIcon from '@mui/icons-material/ApartmentSharp';
import ApiSharpIcon from '@mui/icons-material/ApiSharp';
import AttributionSharpIcon from '@mui/icons-material/AttributionSharp';
import BatchPredictionSharpIcon from '@mui/icons-material/BatchPredictionSharp';
import BugReportSharpIcon from '@mui/icons-material/BugReportSharp';
import CastleSharpIcon from '@mui/icons-material/CastleSharp';
import CoPresentSharpIcon from '@mui/icons-material/CoPresentSharp';
import DirtyLensSharpIcon from '@mui/icons-material/DirtyLensSharp';



const RandomIcons = ({index, mr, ml, mt, mb, size, color}) => {

const random = [<AnchorSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb,  fontSize: size, color: color}} />
,<ApartmentSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<ApiSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<AttributionSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<BatchPredictionSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<BugReportSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<CastleSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<CoPresentSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<DirtyLensSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<AnchorSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<ApartmentSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<ApiSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<AttributionSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>
,<BatchPredictionSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>
,<BugReportSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<CastleSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>
,<CoPresentSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<DirtyLensSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<AnchorSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<ApartmentSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>
,<ApiSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<AttributionSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>
,<BatchPredictionSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<BugReportSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<CastleSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>,
<CoPresentSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>
,<DirtyLensSharpIcon sx={{mr: mr, ml: ml, mt: mt, mb: mb, fontSize: size, color: color}}/>]

const Ricon = random[(Math.floor(Math.random()*10))]





  return (
    <div>
        {random[index]}
    </div>
  )
}

export default RandomIcons
import { CircularProgress } from "@mui/material"

const Loading = () => {
    return (
      <CircularProgress className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24" color="inherit" />
    )
  }
  
  export default Loading
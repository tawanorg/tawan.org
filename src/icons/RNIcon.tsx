import { Icon } from "@chakra-ui/react"
import { IIconBox } from "../types"
const RNIcon: React.FC<IIconBox> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12,1.5a.5.5,0,1,0,.5.5A.5.5,0,0,0,12,1.5ZM17,0H7A2.5,2.5,0,0,0,4.5,2.5v19A2.5,2.5,0,0,0,7,24H17a2.5,2.5,0,0,0,2.5-2.5V2.5A2.5,2.5,0,0,0,17,0Zm1.5,21.5A1.5,1.5,0,0,1,17,23H7a1.5,1.5,0,0,1-1.5-1.5V18h13Zm0-4.5H5.5V4h13Zm0-14H5.5V2.5A1.5,1.5,0,0,1,7,1H17a1.5,1.5,0,0,1,1.5,1.5ZM12,22a1.5,1.5,0,1,0-1.5-1.5A1.5,1.5,0,0,0,12,22Zm0-2a.5.5,0,1,1-.5.5A.5.5,0,0,1,12,20Z"/>
  </Icon>
)

export default RNIcon
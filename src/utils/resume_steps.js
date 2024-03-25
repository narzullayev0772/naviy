import {School} from "@mui/icons-material";
import {TbBrandFlutter, TbSchoolBell} from "react-icons/tb";
import {MdPending} from "react-icons/md";
import {GiTeacher} from "react-icons/gi";
import {SiFreelancer, SiUdemy} from "react-icons/si";
import {BiLogoJavascript} from "react-icons/bi";

export const educationSteps = [{
    title: "School (2009-2021)",
    description: "i'm educated on TUIT. aksjbas aksmd aksmadbsma,m,asm,amsd,nasd,anmsd,asdnm,m",
    indicator: <TbSchoolBell/>,
    completed: true
}, {
    title: "Bachelor (2021-2024)",
    description: "i'm educated on TUIT. aksjbas aksmd aksmadbsma,m,asm,amsd,nasd,anmsd,asdnm,m",
    indicator: <School/>,
    completed: true
}, {
    title: "Udemy Course",
    description: "i'm educated on TUIT. aksjbas aksmd aksmadbsma,m,asm,amsd,nasd,anmsd,asdnm,m",
    indicator: <SiUdemy/>,
    completed: true
}, {
    title: "Master", description: "Maybe Next Plan", indicator: <MdPending/>, completed: false
},];
export const workSteps = [{
    title: "Teacher at BSA academy (2021-2022)",
    description: "i'm educated on TUIT. aksjbas aksmd aksmadbsma,m,asm,amsd,nasd,anmsd,asdnm,m",
    indicator: <GiTeacher size={24}/>,
    completed: true,
}, {
    title: "Fullstack Developer (2022-2024)",
    description: "i'm educated on TUIT. aksjbas aksmd aksmadbsma,m,asm,amsd,nasd,anmsd,asdnm,m",
    indicator: <BiLogoJavascript size={24}/>,
    completed: true
}, {
    title: "Flutter Developer (2023-2024)",
    description: "i'm educated on TUIT. aksjbas aksmd aksmadbsma,m,asm,amsd,nasd,anmsd,asdnm,m",
    indicator: <TbBrandFlutter/>,
    completed: true
}, {
    title: "Freelancer",
    description: "i'm educated on TUIT. aksjbas aksmd aksmadbsma,m,asm,amsd,nasd,anmsd,asdnm,m",
    indicator: <SiFreelancer size={24}/>
},];


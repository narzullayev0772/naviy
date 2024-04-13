import {Call, Email, Telegram} from "@mui/icons-material";

export const contacts = [{
    url: "mailto:alishernarzullayev7777@gmail.com", icon: (<Email
        sx={{
            transition: "all 0.3s", "&:hover": {
                color: "orangered",
            },
        }}
    />), color: "#0088cc", label: "Write"
}, {
    url: "tel:+998900850772", icon: (<Call
        sx={{
            transition: "all 0.3s", "&:hover": {
                color: "red",
            },
        }}
    />), color: "#e4405f", label: "Call"
}, {
    url: "https://t.me/navi_ac", icon: (<Telegram
        sx={{
            transition: "all 0.3s", "&:hover": {
                color: "#0088cc",
            },
        }}
    />), color: "#fff", label: "Chat"
},];

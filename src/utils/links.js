import { GitHub, Instagram, Telegram } from "@mui/icons-material";

export const links = [
  {
    url: "https://t.me/navi_logs",
    icon: (
      <Telegram
        sx={{
          transition: "all 0.3s",
          "&:hover": {
            color: "#0088cc",
          },
        }}
      />
    ),
    color: "#0088cc",
  },
  {
    url: "https://instagram.com/narzullayev__alisher",
    icon: (
      <Instagram
        sx={{
          transition: "all 0.3s",
          "&:hover": {
            color: "#e4405f",
          },
        }}
      />
    ),
    color: "#e4405f",
  },
  {
    url: "https://github.com/narzullayev0772",
    icon: (
      <GitHub
        sx={{
          transition: "all 0.3s",
          "&:hover": {
            color: "#ccc",
          },
        }}
      />
    ),
    color: "#fff",
  },
];

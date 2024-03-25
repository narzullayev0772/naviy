import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import "./index.css"
import {CssVarsProvider} from "@mui/joy/styles";
import {CssBaseline, extendTheme} from "@mui/joy";
import DetailPage from "./pages/detail_page/detail_page";

const router = createBrowserRouter([
    {
        path: "/", element: <App/>
    },
    {
        path: "/apps", element: <DetailPage/>
    },
    {
        path: "/img", element: (<div>
            <img src="./../assets/portfolio.png" alt="portfolio"
                 width={"100%"}
            />
        </div>),
    },]);

const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    body: "#282828"
                }
            }
        },
        light: {
            palette: {
                background: {
                    body: "#f6f6f6"
                }
            }
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(<React.StrictMode>
    <CssVarsProvider theme={theme}>
        <CssBaseline/>
        <RouterProvider router={router}/>
    </CssVarsProvider>
</React.StrictMode>);
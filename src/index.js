import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css"
import {CssVarsProvider} from "@mui/joy/styles";
import {CssBaseline, extendTheme} from "@mui/joy";
import DetailPage from "./pages/detail_page/detail_page";
import HomePage from "./pages/home_page/home_page";

const router = createBrowserRouter([{
    path: "/", element: <HomePage/>
}, {
    path: "/apps", element: <DetailPage/>
}]);

const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    body: "#000",
                }
            }
        }, light: {
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

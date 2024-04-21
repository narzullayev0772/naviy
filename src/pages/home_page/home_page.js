import "./../../index.css";
import Header from "../home_page/components/header/header";
import {Box} from "@mui/joy";
import About from "../home_page/components/about/about";
import Service from "../home_page/components/service/service";
import {Resume} from "./components/resume/resume";
import {Footer} from "./components/footer/footer";
import {useRef} from "react";
import {useInView} from "framer-motion";
import {Apps} from "./components/apps/apps";


const pages = [{
    component: <About/>, transform: "translateY(300px)",
}, {
    component: <Service/>, transform: "translateY(300px)",
}, {
    component: <Apps/>, transform: "translateY(300px)"
}, {
    component: <Resume/>, transform: "translateY(300px)"
}, {
    component: <Footer/>, transform: "translateY(300px)"
}];

function Section({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: "some"});

    return (<section ref={ref}>
      <span
          style={{
              transform: isInView ? "none" : children.transform,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
      >
        {children.component}
      </span>
    </section>);
}

export default function HomePage() {
    return <>
        <Header/>
        <Box
            sx={{
                paddingX: {
                    xs: "2%", sm: "10%",
                },
            }}>
            {pages.map((e, i) => {
                return <Section key={i}>
                    {e}
                </Section>;
            })}
        </Box>
    </>;
}

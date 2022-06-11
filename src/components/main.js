import React from "react";

import BottomBar from "./common/bottomBar";
import HeaderInfo from "./common/headerInfo";
import Nav from "./common/nav";
// import NoPropDrilling from "./noPropDrilling";

const Main = (props) => {
    return (
        <div>
            <header className="">
                <HeaderInfo/>
            </header>
            <section className="">
                <Nav/>
            </section>
            {/*<NoPropDrilling/>*/}
            <section>
                <BottomBar/>
            </section>
        </div>
    );
};
export default Main;

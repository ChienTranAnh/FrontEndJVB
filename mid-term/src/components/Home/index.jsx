import React from "react";
import {RecentlyUpdated} from "./RecentlyUpdated/RecentlyUpdated";
import {Trending} from "./Trending/Trending";
import {NewRelease} from "./NewRelease";
import {Banner} from "./Banner/Banner";
import {Recommended} from "../Recommended/Recommended";

export const Home = () => {
    return (
        <>
            <Banner />
            <RecentlyUpdated />
            <Trending />
            <NewRelease />
            <Recommended />
        </>
    );
};
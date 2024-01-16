import React from 'react';
import {Container, Row} from "react-bootstrap";
import {urlImages} from "../../types";
import {PropsRecommended} from "./PropsRecommended";

export const Recommended: React.FC = () => {
    return (
        <Container className="mt-4 mb-4 align-items-start">
            <h4 className="mb-5">You may also like</h4>
            <div className="justify-content-center">
                <Row className="mb-4">
                    <PropsRecommended
                        id={1}
                        backdrop_path={`${urlImages}/Frame 67.png`}
                        title="Black night"
                        genre_ids={
                            [
                                {id: 1, name: "HD"},
                                {id: 2, name: "Session 1"}
                            ]
                        }
                    />
                    <PropsRecommended
                        id={3}
                        backdrop_path={`${urlImages}/Frame 68.png`}
                        title="Drops of God"
                        genre_ids={
                            [
                                {id: 1, name: "HD"},
                                {id: 2, name: "Session 1"}
                            ]
                        }
                    />
                    <PropsRecommended
                        id={4}
                        backdrop_path={`${urlImages}/Frame 69.png`}
                        title="Scoop"
                        genre_ids={
                            [
                                {id: 1, name: "HD"},
                                {id: 2, name: "Session 1"}
                            ]
                        }
                    />
                    <PropsRecommended
                        id={6}
                        backdrop_path={`${urlImages}/Frame 116.png`}
                        title="The Prank Panel"
                        genre_ids={
                            [
                                {id: 1, name: "HD"},
                                {id: 2, name: "Session 1"}
                            ]
                        }
                    />
                </Row>
            </div>
        </Container>
    );
};
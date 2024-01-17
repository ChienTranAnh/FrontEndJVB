import React from 'react';
import {Container, Row} from "react-bootstrap";
import {defaultMovie} from "../../types";
import PropsRecommended from "./PropsRecommended";

const Recommended: React.FC = () => {

    return (
        <Container className="mt-4 mb-4 align-items-start">
            <h4 className="mb-5">You may also like</h4>
            <div className="justify-content-center">
                <Row className="mb-4">
                    <PropsRecommended movie={defaultMovie}/>
                    <PropsRecommended movie={defaultMovie}/>
                    <PropsRecommended movie={defaultMovie}/>
                    <PropsRecommended movie={defaultMovie}/>
                </Row>
            </div>
        </Container>
    );
};

export default Recommended;
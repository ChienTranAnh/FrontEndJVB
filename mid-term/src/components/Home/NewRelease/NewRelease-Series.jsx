import React from "react";
import {Button, Container, Row} from "react-bootstrap";

export const NewReleaseSeries = () => {
    return (
        <Container>
            <Row>
                <div className="d-flex my-4">
                    <div className="col-md-8">
                        <h3>New Release - Series</h3>
                    </div>
                    <div className="col-md-4 d-flex" style={{justifyContent: "right"}}>
                        <h3>View all</h3>
                        <img className="ms-2" src={'./images/right-arrow_small.svg'} alt="right-arrow_small.svg"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <div className="">
                            <img src={'./images/nr-series_1.svg'} alt=''/>
                        </div>
                        <div className="float-start m-2 pt-1 nrm-name">
                            <span className="text-white">Silo</span>
                        </div>
                        <div className="float-end m-2">
                            <Button variant="danger" style={{marginRight: '7px'}} className="mr-5 btn-hd"><span>HD</span></Button>
                            <Button variant="outline-danger" className="btn-nrm-clock">
                                <span className="text-white">Season 1</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

import React from "react";
import {Col, Row} from "react-bootstrap";
import {Reviewer, urlImages} from "../../types";
import {format} from "date-fns";

interface ObjReviewer {
    reviewer: Reviewer;
};

const PropsComments: React.FC<ObjReviewer> = ({reviewer}) => {

    const formattedDate = [
        format(new Date(reviewer.created_at), 'y/M/d'),
        format(new Date(reviewer.updated_at), 'y/M/d')
    ];

    return (
        <Row key={reviewer.id} className="mt-4 mb-4">
            <Col xs={2} sm={2} md={2} lg={2}>
                <div>
                    {
                        reviewer.author_details && reviewer.author_details.map((rev) => (
                            <img src={rev.avatar_path} alt="" className="w-100"/>
                        ))
                    }
                </div>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10}>
                <div className="col-md-10">
                    <p>{reviewer.author}</p>
                    <p>{formattedDate.join(' | ')}</p>
                    <p>{reviewer.content}</p>
                    {
                        reviewer.author_details && reviewer.author_details.map((rev) => (
                            <>
                                <span className="me-5"><img src={`${urlImages}/like.svg`} alt="Like"/>{rev.rating}</span>
                                <span className="me-5"><img src={`${urlImages}/dislike.svg`} alt="disLike"/></span>
                            </>
                        ))
                    }
                    <span>Reply</span>
                </div>
            </Col>
        </Row>
    );
};

export default PropsComments;
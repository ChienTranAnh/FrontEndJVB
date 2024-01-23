import React from "react";
import {Col, Row} from "react-bootstrap";
import {format} from "date-fns";
import {ObjReviewer} from "../../types/Obj";
import {urlImages, urlPoster} from "../../types/DefaultValue";

interface PropsReviewer {
    reviewer: ObjReviewer;
}

const PropsComments: React.FC<PropsReviewer> = ({reviewer}) => {

    const formattedDate = [
        format(new Date(reviewer.created_at), 'y/MM/dd'),
        format(new Date(reviewer.updated_at), 'y/MM/dd')
    ];

    return (
        <Row key={reviewer.id} className="mt-4 mb-4">
            <Col xs={2} sm={2} md={2} lg={2}>
                <div>
                    <img src={
                        reviewer.author_details.avatar_path ? `${urlPoster}` + reviewer.author_details.avatar_path : `${urlImages}/Ellipse11.png`
                    } alt={reviewer.author_details.username}
                         style={{width: '160px', height: '160px', objectFit: "cover", borderRadius: '50%'}}/>
                </div>
            </Col>
            <Col xs={10} sm={10} md={10} lg={10}>
                <Col xs={10} sm={10} md={10} lg={10} style={{textAlign: 'justify'}}>
                    <p>{reviewer.author}</p>
                    <p>{formattedDate.join(' | ')}</p>
                    <p>{reviewer.content}</p>
                    {
                        reviewer.author_details.rating ?
                            <p>
                                <span className="me-5"><img src={`${urlImages}/like.svg`}
                                                            alt="Like"/> {reviewer.author_details.rating}</span>
                                <span className="me-5"><img src={`${urlImages}/dislike.svg`} alt="disLike"/></span>
                                <span>Reply</span>
                            </p>
                            :
                            <p>
                                <span className="me-5"><img src={`${urlImages}/like.svg`} alt="Like"/> 0</span>
                            </p>
                    }
                </Col>
            </Col>
        </Row>
    );
};

export default PropsComments;
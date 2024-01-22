import React from 'react';
import {Container, Row} from "react-bootstrap";
import {useQuery} from "@tanstack/react-query";
import {defaultMovie} from "../../types/DefaultValue";
import {fetchTopRated} from "../../api";
import PropsRecommended from "./PropsRecommended";

const Recommended: React.FC = () => {
    const {isLoading, data, error, isSuccess} = useQuery(
        {queryKey: ['topRated'], queryFn: fetchTopRated}
    );

    if (isLoading) {
        return (
            <Container className="mt-4 mb-4 align-items-start">
                <h4 className="mb-5">You may also like</h4>
                <div className="justify-content-center">
                    <Row className="mb-4">
                        <PropsRecommended movie={defaultMovie}/>
                    </Row>
                </div>
            </Container>
        );
    }

    if (error) {
        return <script>alert(`Error: {error.message}`)</script>;
    }

    return (
        <Container className="mt-4 mb-4 align-items-start">
            <h4 className="mb-5">You may also like</h4>
            <div className="justify-content-center">
                <Row className="mb-4">
                    {
                        isSuccess ? data.slice(0, 8).map((movie) => (
                            <PropsRecommended key={movie.id} movie={movie}/>
                        )) : <PropsRecommended movie={defaultMovie}/>
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Recommended;
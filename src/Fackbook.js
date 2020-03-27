import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'

export default class Fackbook extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} md={12} lg={6}>
                        this is col 5
                </Col >
                    <Col xs={24} md={12} lg={6}>
                        this is col 305
                        </Col>
                </Row>
                <Row>
                    <h1> this is a fackbook page </h1>
                    <Link to="/resume"> Resume page</Link>
                    <Link to="/app"> App</Link>
                    <Link to="/"> Home </Link>
                </Row>
            </div>
        )
    }
}

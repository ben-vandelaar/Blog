import React from 'react';
import PropTypes from 'prop-types'

import { ListGroup, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

class Posts extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }



    render() {
        const { posts } = this.props.post;
        return (
            <Container>
                <ListGroup>
                    {posts.map(({ id, title, body }) => (
                        <li key={id} style={{ listStyleType: "none" }}>
                            <h3>{title}</h3> <br />
                            <p>{body}</p> <br />
                            <br />
                            <hr />
                        </li>
                    ))}
                </ListGroup>
            </Container>
        )
    }

}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
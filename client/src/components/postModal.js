import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';


class PostModal extends React.Component {
    state = {
        modal: false,
        title: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            title: this.state.title,
            body: this.state.body,
            image: this.state.image
        }

        //Add post via Action
        this.props.addPost(newPost);

        //Close Modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}>
                    Add Post
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add Post</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="title"><h3>Title</h3></Label>
                                <Input
                                    type="text"
                                    name="title"
                                    id="post"
                                    placeholder="Post title"
                                    onChange={this.onChange}
                                />
                                <Label for="title"><h3>Image</h3></Label>
                                <Input
                                    type="text"
                                    name="image"
                                    id="post"
                                    placeholder="URL"
                                    onChange={this.onChange}
                                />
                                <Label for="title"><h3>Body</h3></Label>
                                <Input
                                    type="textarea"
                                    name="body"
                                    id="post"
                                    placeholder="Share your story"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{
                                        marginTop: '2rem'
                                    }}
                                    block>
                                    Add Post
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { addPost })(PostModal);
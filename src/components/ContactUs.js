import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
class Contact extends React.Component {
    render() {
        return (
            <div>
                <p>To contact us, you can fill out the form and we will respond as soon as possible</p>
                <Form>
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone number" />
                        <Form.Text className="text-muted">
                            We'll never share your Phone number with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Write your feedback</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default Contact;
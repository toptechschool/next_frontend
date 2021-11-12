import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor, { Plugins } from "react-markdown-editor-lite";
import { Row, Col, Form, Button } from "react-bootstrap";
import "react-markdown-editor-lite/lib/index.css";
import withNavbarContainer from "../../components/Navbar";
import { useCreatePost } from "../../store/hooks/useCreatePost";

MdEditor.use(Plugins.TabInsert, { tabMapValue: 4 });

function create() {
  const mdParser = new MarkdownIt();
  const [markdown, setMarkdown] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    useCreatePost(title, markdown);
  };

  return (
    <Row>
      <Col sm={12} md={{ span: 10, offset: 1 }}>
        <form onSubmit={handleSubmit}>
          <Form.Group as={Col} className="mb-4" controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              name="title"
              placeholder="Your post title"
            />
          </Form.Group>
          <MdEditor
            value={markdown}
            renderHTML={(text) => mdParser.render(text)}
            onChange={({ text }) => setMarkdown(text)}
            view={{ html: false }}
            style={{ height: "500px" }}
          />
          <Button type="submit" variant="primary" className="mt-4">
            Submit
          </Button>
        </form>
      </Col>
    </Row>
  );
}
export default withNavbarContainer(create);

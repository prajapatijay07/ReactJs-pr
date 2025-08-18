import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

import avatar1 from "../../assets/comment-1.jpg";
import avatar2 from "../../assets/comment-2.jpg";
import avatar3 from "../../assets/comment-3.jpg";

function CommentsSection() {
  const comments = [
    {
      name: "Annie Adamson",
      avatar: avatar1,
      text: "Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque viverra cipit eges magna porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue uctus neque purus ipsum neque dolor",
    },
    {
      name: "Jackie Johnson",
      avatar: avatar2,
      text: "Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque viverra cipit eges magna porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue uctus neque purus ipsum neque dolor",
    },
    {
      name: "Botani Vatsson",
      avatar: avatar3,
      text: "Etiam sapien sem magna at vitae pulvinar congue augue egestas pretium neque viverra cipit eges magna porta ratione, mollis risus lectus porta rutrum arcu aenean primis in augue uctus neque purus ipsum neque dolor",
    },
  ];

  return (
    <Container style={{ marginTop: "40px" }}>
      {/* Title */}
      <h3
        style={{
          fontWeight: "700",
          fontSize: "34px",
          marginBottom: "24px",
          marginLeft: "130px", 
        }}
      >
        4 Comments
      </h3>

      {/* Comments */}
      {comments.map((comment, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #eee",
            borderRadius: "8px",
            padding: "45px",
            margin: "40px auto",
            width: "1024px",
            height: "272px",
            boxSizing: "border-box",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <Row style={{ height: "100%" }}>
            {/* Avatar */}
            <Col xs="auto" style={{ display: "flex", alignItems: "flex-start" }}>
              <Image
                src={comment.avatar}
                alt={comment.name}
                roundedCircle
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                }}
              />
            </Col>

            {/* Comment Content */}
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <strong
                  style={{
                    fontSize: "20px",
                    color: "#111111",
                    display: "block",
                  }}
                >
                  {comment.name}
                </strong>
                <p
                  style={{
                    fontSize: "18px",
                    width: '828px',
                    height: '96px',
                    color: "#777777",
                    margin: "8px 0 0",
                  }}
                >
                  {comment.text}
                </p>
              </div>

              {/* Reply at bottom */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "15px",
                }}
              >
                <span
                  style={{
                    color: "#ff0000",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "18px",
                  }}
                >
                  <FaArrowLeft /> Reply
                </span>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default CommentsSection;

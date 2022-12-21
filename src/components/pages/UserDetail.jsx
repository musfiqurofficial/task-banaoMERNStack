import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img from "../../assets/man.png";

const UserDetail = (props) => {
  const { avatar, profile, jobTitle, Bio } = props.userData;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=""
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {profile.firstName} {profile.lastName}
        </Modal.Title>
      </Modal.Header>
      <img className="user-image mt-3" src={avatar && img} alt="" />
      <p className="text-center mt-2">@{profile.username}</p>
      <Modal.Body className="text-start">
        <p>
          <span className="fw-bold fs-5">Bio:</span> {Bio}
        </p>
        <p>
          <span className="fw-bold fs-5">Full Name:</span> {profile.firstName}{" "}
          {profile.lastName}
        </p>
        <p>
          <span className="fw-bold fs-5">Job Title:</span> {jobTitle}
        </p>
        <p>
          <span className="fw-bold fs-5">Email:</span> {profile.email}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDetail;

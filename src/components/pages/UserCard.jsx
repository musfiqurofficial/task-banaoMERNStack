import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../assets/man.png";
import UserDetail from "./UserDetail";

const UserCard = ({ userData }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { id, avatar, profile, jobTitle, createdAt } = userData;
  return (
    <div>
      <Card className="text-center">
        <img className="user-image mt-2" src={avatar && img} alt="" />
        <Card.Body>
          <Card.Title>
            <>
              <Link onClick={() => setModalShow(true)}>
                Name: {profile.firstName} {profile.lastName}
              </Link>
              <UserDetail
                show={modalShow}
                onHide={() => setModalShow(false)}
                userData={userData}
              />
            </>
          </Card.Title>
          <small>Title: {jobTitle}</small>
        </Card.Body>
        <Card.Footer className="text-muted">
          Date: {createdAt.slice(0, 10)}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default UserCard;

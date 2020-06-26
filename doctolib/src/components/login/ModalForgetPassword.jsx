import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import styles from "./Signin.module.css";

const ModalForgetPassword = (props) => {
  const [modal, setModal] = useState(false);
  const [mail, setMail] = useState("");
  const [modal2, setModal2] = useState(false);

  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);


  return (
    <div>
      <p className={styles.forget} onClick={toggle}>
        Forget Password ?
      </p>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className={styles.bleu} toggle={toggle}>Forget password ?</ModalHeader>
        <ModalBody>
          <Input
            className={styles.inputs}
            type="text"
            value={mail}
            placeholder="Enter your mail here"
            onChange={(e) => setMail(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button className={styles.buttonModal} onClick={toggle2}>
            Send
          </Button>{" "}
          <Button className={styles.buttonModal} onClick={toggle}>
            Cancel
          </Button>
          <Modal isOpen={modal2} toggle={toggle2}>
            <ModalHeader className={styles.response} toggle={toggle2}>We would send you an email to change password at <span className={styles.span}>{mail}</span>!</ModalHeader>
          </Modal>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalForgetPassword;

import React, { useState } from "react";
import Axios from "axios";
import {
  Modal,
  ModalFooter,
  Input,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  ModalBody,
  Button,
} from "reactstrap";
import { api_url } from "../api";

function ModalMedication({ modal, handleModal, item }) {
  //   const [modal, setModal] = useState(false);

  //   const toggle = () => handleModal();

  const [onePill, setOnePill] = useState(item);

  const postPills = () => {
    Axios.put(`${api_url}/medicaments/${onePill.id}`, onePill, {
      header: { "Content-Type": "application.json" },
    })
      .then((res) => handleModal())
      .catch((err) => console.log(err.message));
  };

  const deletePills = () => {
    Axios.delete(`${api_url}/medicaments/${onePill.id}`)
      .then((res) => handleModal())
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Modal isOpen={modal} toggle={handleModal}>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Disease name</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={(e) =>
                setOnePill({ ...onePill, label: e.target.value })
              }
              placeholder={onePill.label}
              type="text"
              name={onePill.label}
              id={onePill.id}
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Frequency</InputGroupText>
            </InputGroupAddon>
            <Input
              onChange={(e) =>
                setOnePill({ ...onePill, frequency: e.target.value })
              }
              placeholder={onePill.frequency}
              type="text"
              name={onePill.frequency}
              id={onePill.id}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>

          <Button onClick={() => postPills()}>Save</Button>
          <Button onClick={() => deletePills()}>Delete</Button>
          <Button onClick={handleModal}>Cancel</Button>

        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalMedication;

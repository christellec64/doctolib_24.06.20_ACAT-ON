import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "reactstrap";
import styles from "./Mytreatment.module.css";
import logo from "../img/logowhite.png";
import Axios from "axios";

const MyTreatment = () => {
  const [medication, setMedication] = useState({});

  const numbers = [1, 2, 3, 4];

  const handleSubmit = () => {
    console.log(medication);
    Axios.post("http://localhost:8000/medicaments", medication, {
      header: { "Content-Type": "application.json" },
    }).catch((err) => console.log(err.message));
  };

  return (
    <div className={styles.background}>
      <Container className={styles.navbar}>
        <Row>
          <Col xs="2" className={styles.listItem}>
            <img src={logo} alt="logo app" className={styles.logo} />
            MediMe
          </Col>
          <Col xs="8" className={styles.heading}>
            <h2>My Treatment</h2>
          </Col>
        </Row>
        <div className={styles.formContainer}>
          <Form className={styles.form}>
            <input
              className={styles.inputs}
              type="text"
              placeholder="Medication"
              onChange={(e) =>
                setMedication({ ...medication, label: e.target.value })
              }
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Dosage"
              onChange={(e) =>
                setMedication({ ...medication, dosage: e.target.value })
              }
            />
            
                <p className={styles.inputs2}>Frequency</p>
              
                <select
                  className={styles.inputfrequency}
                  type="text"
                  placeholder="Frequency per day"
                  onChange={(e) =>
                    setMedication({ ...medication, frequency: e.target.value })
                  }
                >
                  {numbers.map((number) => (
                    <option value={number}>{number}</option>
                  ))}
                </select>
            
            <label className={styles.timelabel}>
              What time do you take your first medication?
              <input
                className={styles.inputtime}
                type="time"
                placeholder="What time do you take your first medication?"
                onChange={(e) =>
                  setMedication({ ...medication, time: e.target.value })
                }
              />
            </label>

            <Button tag={Link} to="/dashboard" className={styles.button} onClick={handleSubmit}>
              Save
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default MyTreatment;

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Form,
  FormSelect,
  FormGroup,
  Button
} from "shards-react";
import ProgressBars from "../components-overview/ProgressBars1";

const NewDraft= ({ title }) => (
  <Card small style={{backgroundColor:'#ffc266'}}>
   <CardBody className="d-flex flex-column">
    <h3>{title}</h3>
             <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-0 mt-sm-0" style={{backgroundColor:'skyblue'}}
              >
                View Report &rarr;
              </Button>
              <p>Amount that you're yet to receive from your customers</p>
 
   
      <Form className="quick-post-form">
        <FormGroup>
        <h6>Total unpaid invoices:</h6><p style={{fontFamily:'fantasy'}}>$7,7377.50</p>
        <h6>open:</h6><p style={{color:'green'}}>$6,000.00</p>
        <ProgressBars/>
          <h6>Overdue:</h6>
           <FormSelect
            size="sm"
            value="$1,737.50"
            style={{ maxWidth: "130px" ,color:'red'}}
            onChange={() => {}}
          >
            <option value="$1,737.50">$1,737.50</option>
            <option value="$1,737.50">$1,737.50</option>
            <option value="$1,737.50">$1,737.50</option>
            <option value="$1,737.50">$1,737.50</option>
          </FormSelect>
          </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

NewDraft.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewDraft.defaultProps = {
  title: "Receivables"
};

export default NewDraft;

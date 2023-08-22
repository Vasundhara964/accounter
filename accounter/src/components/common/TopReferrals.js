import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  CardBody,
  Form,
  FormGroup,
  FormSelect
} from "shards-react";
import ProgressBars from "../components-overview/ProgressBars";

const TopReferrals = ({ title, referralData }) => (
  <Card small style={{backgroundColor:'#ffc266'}}>
   
   
    <CardBody className="d-flex flex-column">
       <h3>{title}</h3>
             <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-0 mt-sm-0" style={{backgroundColor:'skyblue'}}
              >
                View Report &rarr;
              </Button>
              <p>Amount that you're yet to pay to your vendors</p>
   
      <Form className="quick-post-form">
       
        <FormGroup>
        <h6>Total unpaid bills:</h6><p style={{fontFamily:'fantasy'}}>$1,199.70</p>
   
       
        <h6>open:</h6><p style={{color:'green'}}>$1,199.70</p>
        <ProgressBars/>
          <h6>Overdue:</h6>
           <FormSelect
            size="sm"
            value="$0.00"
            style={{ maxWidth: "130px" ,color:'red'}}
            onChange={() => {}}
          >
            <option value="$0.00">$0.00</option>
            <option value="$0.00">$0.00</option>
            <option value="$0.00">$0.00</option>
            <option value="$0.00">$0.00</option>
          </FormSelect>
          </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Payables",
  // referralData: [
  //   {
  //     title: "GitHub",
  //     value: "19,291"
  //   },
  //   {
  //     title: "Stack Overflow",
  //     value: "11,201"
  //   },
  //   {
  //     title: "Hacker News",
  //     value: "9,291"
  //   },
  //   {
  //     title: "Reddit",
  //     value: "8,281"
  //   },
  //   {
  //     title: "The Next Web",
  //     value: "7,128"
  //   },
  //   {
  //     title: "Tech Crunch",
  //     value: "6,218"
  //   },
  //   {
  //     title: "YouTube",
  //     value: "1,218"
  //   },
  //   {
  //     title: "Adobe",
  //     value: "1,171"
  //   }
  // ]
};

export default TopReferrals;

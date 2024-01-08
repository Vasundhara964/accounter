import React from "react";
import {
  Card
} from "shards-react";

//import Chart from "../../utils/chart";

class UsersByDevice extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.canvasRef = React.createRef();
  // }

  // componentDidMount() {
  //   const chartConfig = {
  //     type: "pie",
  //     data: this.props.chartData,
  //     options: {
  //       ...{
  //         legend: {
  //           position: "bottom",
  //           labels: {
  //             padding: 25,
  //             boxWidth: 20
  //           }
  //         },
  //         cutoutPercentage: 0,
  //         tooltips: {
  //           custom: false,
  //           mode: "index",
  //           position: "nearest"
  //         }
  //       },
  //       ...this.props.chartOptions
  //     }
  //   };

  //   new Chart(this.canvasRef.current, chartConfig);
  // }

  render() {
    // const { title } = this.props;
    return (
      <Card small className="h-100" style={{backgroundColor:'#b3ffff'}}>
        {/* <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
        <CardFooter className="border-top">
          <Row>
            <Col>
              <FormSelect
                size="sm"
                value="last-week"
                style={{ maxWidth: "130px" }}
                onChange={() => {}}
              >
                <option value="last-week">Last Week</option>
                <option value="today">Today</option>
                <option value="last-month">Last Month</option>
                <option value="last-year">Last Year</option>
              </FormSelect>
            </Col>
            <Col className="text-right view-report">
              // {/* eslint-disable-next-line */}
              {/* // <a href="#">View full report &rarr;</a> */}
            {/* </Col> */}
          {/* </Row> */}
        {/* </CardFooter> */}
        <p style={{fontSize:24,font:"san-serif" }}>5,60,286/-
        <p style={{color:"green",padding:10,fontSize:12}}> incomes</p></p>
        <p style={{fontSize:40,fontFamily:"sans-serif"}}>-</p>
        <p style={{fontSize:24,font:"san-serif" }}>4,85,000/-
        <p style={{color:"#c9444d",fontSize:12}}> Outgoings</p></p>
        <p style={{fontSize:40,fontFamily:"sans-serif"}}>=</p>
        <p style={{fontSize:24,font:"san-serif" }}>+75,286/-
        <p style={{color:"blue",padding:10,fontSize:12}}> Profits</p></p>
      </Card>
    );
  }
}

// UsersByDevice.propTypes = {
//   /**
//    * The component's title.
//    */
//   title: PropTypes.string,
//   /**
//    * The chart config object.
//    */
//   chartConfig: PropTypes.object,
//   /**
//    * The Chart.js options.
//    */
//   chartOptions: PropTypes.object,
//   /**
//    * The chart data.
//    */
//   chartData: PropTypes.object
// };

// UsersByDevice.defaultProps = {
//   title: "Users by device",
//   chartData: {
//     datasets: [
//       {
//         hoverBorderColor: "#ffffff",
//         data: [68.3, 24.2, 7.5],
//         backgroundColor: [
//           "rgba(0,123,255,0.9)",
//           "rgba(0,123,255,0.5)",
//           "rgba(0,123,255,0.3)"
//         ]
//       }
//     ],
//     labels: ["Desktop", "Tablet", "Mobile"]
//   }
// };

export default UsersByDevice;
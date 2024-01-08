import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";

class UsersOverview extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 7 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
      },
      ...this.props.chartOptions
    };

    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: this.props.chartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
      this.props.chartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100" style={{backgroundColor:'#e6ffff'}}>
        <CardHeader className="border-bottom" style={{backgroundColor:'#e6ffff'}}>
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0" style={{backgroundColor:'#e6ffff'}}>
          <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="d-flex mb-2 mb-sm-0" style={{backgroundColor:'#e6ffff'}}>
              <RangeDatePicker />
            </Col>
            <Col style={{backgroundColor:'#e6ffff'}}>
              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-0 mt-sm-0"
              >
                View Full Report
              </Button>
              <Button  size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-0 mt-sm-0">&rarr;</Button>
            </Col>
          </Row>
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
        </CardBody>
      </Card>
    );
  }
}

UsersOverview.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

UsersOverview.defaultProps = {
 
  chartData: {
    labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
    datasets: [
      {
        label: "Incomes",
        fill: "start",
        data: [
         /* 500,
          80000,
          32000,
          18000,
          24000,
          32000,
          23000,
          65000,
          59000,
          120000,
          75000,
          94000,
          142000,
          1200,
          96000,
          145000,
          182000,
          280000,
          210200,
          192000,
          392000,
          320200,
          314000,
          280000,
          320000,
          320000,
          340000,
          291000,
          310000,
          425000*/
          66000,
          168000,
          38498,
          49500,
          12238,
          57750,
          168300
        ],
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Outgoing",
        fill: "start",
        data: [
          /*38000,
          43000,
          12000,
          23000,
          41000,
          74000,
          47200,
          21900,
          39100,
          22900,
          40000,
          20300,
          30100,
          38000,
          29100,
          62000,
          70000,
          30000,
          63000,
          40200,
          32000,
          38000,
          28900,
          41000,
          30000,
          53000,
          63000,
          72000,
          78000,
          120000*/
         50000,
         150000,
         30000,
         45000,
         10000,
         50000,
         150000
        ],
        backgroundColor: "rgba(255,65,105,0.1)",
        borderColor: "rgba(255,65,105,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,65,105,1)",
       
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2,
        pointBorderColor: "rgba(255,65,105,1)"
      },
      {
        label: "Profits",
        fill: "start",
        data: [/*12000,    
          37000,    
          20000,    
          -5000,    
          -17000,    
          -42000,    
          -24200,  
          431000,    
          19900,    
          97100,    
          35000,    
          73700,    
          111900,    
          82000,    
          66900,    
          83000,    
          112000,    
          250000,    
          147200,    
          178600,    
          712000,    
          282200,    
          285100,    
          239000,    
          290000,    
          267000,    
          11000,    
          18000,    
          32000,    
          305000 */   
         16000,
         18000,
         8498,
         4500,
         2238,
         7750,
         18300
          ],
        backgroundColor: "rgba(10.5,255,65,0.1)",
        borderColor: "rgba(55,265,65,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,65,105,1)",
     
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2,
        pointBorderColor: "rgba(255,65,105,1)"
      }
    ]
  }
};

export default UsersOverview;

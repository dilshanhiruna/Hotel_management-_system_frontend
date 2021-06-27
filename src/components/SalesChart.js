import React, { useState, useEffect } from "react";
import "./Suppliers.css";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const SalesChart = () => {
  const [history, sethistory] = useState([]);
  var Jan = 0,
    Feb = 0,
    Mar = 0,
    Apr = 0,
    May = 0,
    Jun = 0,
    Jul = 0,
    Aug = 0,
    Sep = 0,
    Oct = 0,
    Nov = 0,
    Dec = 0;

  useEffect(() => {
    //fetching CHECKOUT HISTORY data from the DB
    axios
      .get("https://hotel-sobana.herokuapp.com/checkout/")
      .then((res) => {
        if (res.data.length > 0) {
          sethistory(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    getDates();
  });

  const getDates = () => {
    history.map((date) => {
      var DATE = date.date;
      let extractDate = DATE.substring(0, 2);
      console.log(DATE);
      console.log(extractDate);

      if (extractDate === "01") {
        Jan = Jan + 1;
      }
      if (extractDate === "02") {
        Feb += 1;
      }
      if (extractDate === "03") {
        Mar += 1;
      }
      if (extractDate === "04") {
        Apr += 1;
      }
      if (extractDate === "05") {
        May += 1;
      }
      if (extractDate === "06") {
        Jun += 1;
      }
      if (extractDate === "07") {
        Jul += 1;
      }
      if (extractDate === "08") {
        Aug += 1;
      }
      if (extractDate === "09") {
        Sep += 1;
      }
      if (extractDate === "10") {
        Oct += 1;
      }
      if (extractDate === "11") {
        Nov += 1;
      }
      if (extractDate === "12") {
        Dec += 1;
      }
      return 0;
    });
  };

  return (
    <div className="display-box">
      <div className="header-box-sup"> Sales Chart</div>
      <div>
        <Bar
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Quantity Sold",
                data: [
                  Jan,
                  Feb,
                  Mar,
                  Apr,
                  May,
                  Jun,
                  Jul,
                  Aug,
                  Sep,
                  Oct,
                  Nov,
                  Dec,
                ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={80}
          scales={{ y: { min: 0 } }}
        />
      </div>
    </div>
  );
};

export default SalesChart;

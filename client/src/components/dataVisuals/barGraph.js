import { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";

const StatBar = ({ player }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const data_ = handleCreateData();
    data_.Player = player.name;
    setData(data_);
  }, [player.name]);

  const handleCreateData = () => {
    const stats = [
      { stat: "Appearences", val: 38 },
      { stat: "Starts", val: 38 },
      { stat: "Minutes", val: 90 },
      { stat: "Goals Scored", val: 20 },
      { stat: "Shots on Goal", val: 30 },
      { stat: "Assists", val: 30 },
      { stat: "Total Passes", val: 70 },
      { stat: "Tackles", val: 20 },
      { stat: "Fouls Committed", val: 20 },
    ];
    const data_ = stats.map(({ stat, val }) => ({
      stats: stat,
      "League Average": val,
      "Player Total": Math.ceil(Math.random() * (val * 1.2)),
    }));
    return data_;
  };

  return (
    <ResponsiveBar
      theme={{
        axis: {
          ticks: { text: { fontSize: 16, fontFamily: "Oswald" } },
        },
        legends: { text: { fontSize: 16, fontFamily: "Oswald" } },
      }}
      data={data}
      keys={["League Average", "Player Total"]}
      indexBy="stats"
      margin={{ top: 40, right: 170, bottom: 50, left: 70 }}
      padding={0.3}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#381d54", "#9a12cf"]}
      borderColor="#381d54"
      borderWidth="1px"
      borderRadius={4}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: `${player.name}`,
        // legendPosition: "middle",
        // legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // legend: "Value",
        // legendPosition: "middle",
        // legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="#f8f9fa"
      motionConfig="gentle"
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default StatBar;

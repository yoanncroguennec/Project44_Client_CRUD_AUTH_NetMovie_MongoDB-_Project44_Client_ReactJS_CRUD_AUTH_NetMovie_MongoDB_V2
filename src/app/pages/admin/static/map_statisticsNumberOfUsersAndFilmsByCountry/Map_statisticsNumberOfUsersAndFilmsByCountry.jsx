import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "./mockGeoFeatures";
import { mockGeographyData as data } from "./mockData";
import { Box } from "@mui/material";

export default function Map_statisticsNumberOfUsersAndFilmsByCountry({ isDashboard = false }) {
  return (
    <Box style={{ height: "1500px" }}>
      <ResponsiveChoropleth
        borderColor='#ffffff'
        borderWidth={1.5}
        domain={[0, 1000000]}
        data={data}
        features={geoFeatures.features}
        label='properties.name'
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: "#e0e0e0",
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#ffffff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        projectionRotation={[0, 0, 0]}
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#e0e0e0",
              },
            },
            legend: {
              text: {
                fill: "#e0e0e0",
              },
            },
            ticks: {
              line: {
                stroke: "#e0e0e0",
                strokeWidth: 1,
              },
              text: {
                fill: "#e0e0e0",
              },
            },
          },
          legends: {
            text: {
              fill: "#e0e0e0",
            },
          },
        }}
        tooltip={(data, color) => (
          <div
            style={{
              padding: 12,
              color,
              background: "#ffffff",
            }}
          >
            <span>Nombres de films / Utilisaurs par pays :</span>
            <br />
            <strong>
              <span>{data.feature.properties.name}</span>
            </strong>
            <br />
            <strong>
              {data.feature.id}: {data.feature.value}
            </strong>
          </div>
        )}
        unknownColor='#666666'
        valueFormat='.2s'
      />
    </Box>
  );
}

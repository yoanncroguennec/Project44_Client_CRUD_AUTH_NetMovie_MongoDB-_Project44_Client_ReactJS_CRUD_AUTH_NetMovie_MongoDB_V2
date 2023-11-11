import {
  DashBoard_CircularProgressbar,
  Widget,
  ListsTheLatestMoviesInBDD,
} from "../../../components/common";

export default function Dashboard() {

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
  
        <Widget type='user' />
        <Widget type='movies' />
        <Widget type='categoryMovies' />
      </div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          gap: "20px",
        }}
      >
        <DashBoard_CircularProgressbar />
        {/* <Chart title='Last 6 Months (Revenue)' aspect={2 / 1} /> */}
      </div>
      <div
        style={{
          alignItems: "center",
          boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
          display: "flex",
          justifyContent: "center",
          margin: "15px 90px",
          height: "45vh",
          WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.47)",
          width: "90%",
        }}
      >
        <ListsTheLatestMoviesInBDD />
      </div>
    </div>
  );
}

// export default function Dashboard() {
//   return (
//     <div>
//       <div
//         style={{
//           background: "blue",
//           display: "flex",
//           padding: "20px",
//           gap: "20px",
//           height: "10vh",
//         }}
//       >
//         <Widget type='user' />
//         <Widget type='movies' />
//         <Widget type='categoryMovies' />
//       </div>
// <div
//   style={{
//     background: "green",
//     display: "flex",
//     padding: "20px",
//     gap: "20px",
//     height: "20vh",
//   }}
// >
//   <DashBoard_CircularProgressbar />
//   {/* <Chart title='Last 6 Months (Revenue)' aspect={2 / 1} /> */}
// </div>
      // <div
      //   style={{
      //     alignItems: "center",
      //     boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
      //     display: "flex",
      //     justifyContent: "center",
      //     margin: "15px 90px",
      //     WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.47)",
      //     height: "50vh",
      //     // width: "100vw"
      //   }}
      // >
      //   <ListsTheLatestMoviesInBDD />
      // </div>
//     </div>
//   );
// }

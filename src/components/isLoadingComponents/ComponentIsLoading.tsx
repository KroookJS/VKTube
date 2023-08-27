import React from "react";

function ComponentIsLoadingMem() {
  return (
    <div
      style={{
        marginTop: 100,
        display: "flex",
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <h2 style={{ fontSize: 30, cursor: "pointer" }}>Tele</h2>
        <h3 style={{ fontSize: 34 }}>Porn</h3>
      </div>
      <img
        style={{ width: 300, height: 600, borderRadius: 30 }}
        src="http://mob.porno365.bond/uploads/gifs/2/0/2024/1.gif"
        alt="loading"
      />
    </div>
  );
}
const ComponentIsLoading = React.memo(ComponentIsLoadingMem);
export default ComponentIsLoading;

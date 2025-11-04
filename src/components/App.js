import React from "react";

const App = () => {

  const relatives = ["Uncle", "Aunt", "Grandparents", "Cousin", "Brother"];

  return (
     <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;


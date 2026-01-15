import React from "react";
import Heading from "../../Components/Shared/Reusable/Heading";

const SubscribedNewsLetter = () => {
  return (
    <>
      <Heading title={"Subscribed NewsLetter"}></Heading>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* table */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>J</th>
              <th>k</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>dsfsrerf</td>
              <td>ferfertgg</td>
              <td>sferterg</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SubscribedNewsLetter;

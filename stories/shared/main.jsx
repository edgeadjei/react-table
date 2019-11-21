// React Modules
import React from "react";

// Application Modules
import Table from "../../src/table/table.component.jsx";
import data from "./table.mock.json";

const Main = (props) => <Table data={data} {...props}/>

export default Main;

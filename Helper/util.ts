

// import path from "path";
import { promises as fs } from "fs";

import path from "path";

// const dataFilePath = path.join(
//     process.cwd(),
//     "Helper",
//     "Data.json"
// );

// export const readData = async () => {
//     const jsonData = await fs.readFile(dataFilePath, "utf8");

//     return JSON.parse(jsonData);
// };

const dataFilePath = path.join(process.cwd(), "Helper", "Data.json");


export const readData = async ()  => {
    const jsonData = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(jsonData);
}

export const writeData = async (data: any) => {
    const jsonData = JSON.stringify(data);
    await fs.writeFile(dataFilePath, jsonData, "utf8");
}


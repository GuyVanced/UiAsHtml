import ConfigJson from "../../../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchUrl = `/bin/${LocalroutePath}/${LocaltableName}/DataOnly`
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
import load from "../protos/loader";

export default load({
  serviceName: "InhabitantService",
  address: "localhost:3334",
  fileName: "inhabitants",
});

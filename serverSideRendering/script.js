const serviceWrapper = document.querySelector(".service-wrapper2");
const services = document.getElementById("service-insert");

const data = [
  {
    heading: "Service A",
    description: "This is service A",
  },
  {
    heading: "Service B",
    description: "This is service B",
  },
  {
    heading: "Service B",
    description: "This is service C",
  },
];

services.innerHTML = serviceWrapper.innerHTML;

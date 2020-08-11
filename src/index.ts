import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const userA = new User("online");
const userB = new User("online");
const company = new Company();

console.log(userA, userB);
console.log(company);

const customMap = new CustomMap("map");
customMap.addMarker(userA);
customMap.addMarker(userB);
customMap.addMarker(company);

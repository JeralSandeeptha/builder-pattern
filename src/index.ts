import { GamingComputerBuilder, OfficeComputerBuilder } from "./classes/ComputerBuilder.js";
import ComputerDirector from "./classes/Director.js";

const computerDirector = new ComputerDirector();

const gamingComputerBuilder = new GamingComputerBuilder();
const officeComputerBuilder = new OfficeComputerBuilder();

const gamingComputer = computerDirector.buildGamingComputer(gamingComputerBuilder);
const officeComputer = computerDirector.buildOfficeComputer(officeComputerBuilder);

console.log(gamingComputer);
console.log(officeComputer);

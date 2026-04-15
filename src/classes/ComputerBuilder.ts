import Computer from "./Computer.js";

interface ComputerBuilder {
    setCPU(cpu: string): ComputerBuilder;
    setRAM(ram: number): ComputerBuilder;
    setStorage(storage: number, storageType: string): ComputerBuilder;
    setMotherboard(motherboard: string): ComputerBuilder;
    setGPU(gpu: string): ComputerBuilder;
    setPSU(psu: number): ComputerBuilder;
    setCooler(hasCooler: boolean): ComputerBuilder;
    setMouse(hasMouse: boolean): ComputerBuilder;
    setKeyboard(hasKeyboard: boolean): ComputerBuilder;
    build(): Computer;
}

export class GamingComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: number): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: number, storageType: string): ComputerBuilder {
        this.computer.storage = storage;
        this.computer.storageType = storageType;
        return this;
    }

    setMotherboard(motherboard: string): ComputerBuilder {
        this.computer.motherboard = motherboard;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    setPSU(psu: number): ComputerBuilder {
        this.computer.psu = psu;
        return this;
    }

    setCooler(hasCooler: boolean): ComputerBuilder {
        this.computer.hasCooler = hasCooler;
        return this;
    }

    setMouse(hasMouse: boolean): ComputerBuilder {
        this.computer.hasMouse = hasMouse;
        return this;
    }

    setKeyboard(hasKeyboard: boolean): ComputerBuilder {
        this.computer.hasKeyboard = hasKeyboard;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}

export class OfficeComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: number): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: number, storageType: string): ComputerBuilder {
        this.computer.storage = storage;
        this.computer.storageType = storageType;
        return this;
    }

    setMotherboard(motherboard: string): ComputerBuilder {
        this.computer.motherboard = motherboard;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    setPSU(psu: number): ComputerBuilder {
        this.computer.psu = psu;
        return this;
    }

    setCooler(hasCooler: boolean): ComputerBuilder {
        this.computer.hasCooler = hasCooler;
        return this;
    }

    setMouse(hasMouse: boolean): ComputerBuilder {
        this.computer.hasMouse = hasMouse;
        return this;
    }

    setKeyboard(hasKeyboard: boolean): ComputerBuilder {
        this.computer.hasKeyboard = hasKeyboard;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}
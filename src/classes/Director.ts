import type Computer from "./Computer.js";
import type { GamingComputerBuilder, OfficeComputerBuilder } from "./ComputerBuilder.js";

class ComputerDirector {
    
    buildGamingComputer(builder: GamingComputerBuilder): Computer {
        return builder
            .setCPU("Intel Core i9")
            .setRAM(32)
            .setStorage(1000, "SSD")
            .setMotherboard("ASUS ROG Maximus XIII Hero")
            .setGPU("NVIDIA GeForce RTX 3080")
            .setPSU(750)
            .setCooler(true)
            .setMouse(true)
            .setKeyboard(true)
            .build();
    }

    buildOfficeComputer(builder: OfficeComputerBuilder): Computer {
        return builder
            .setCPU("Intel Core i5")
            .setRAM(16)
            .setStorage(512, "SSD")
            .setMotherboard("ASUS Prime B560M-A")
            .setGPU("Integrated Graphics")
            .setPSU(500)
            .setCooler(false)
            .setMouse(true)
            .setKeyboard(true)
            .build();
    }
}

export default ComputerDirector;

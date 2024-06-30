// src/commands/TurnOffCommand.ts
import { Command } from './Command';
import { Light } from '../receiver/Light';

export class TurnOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }

    undo() {
        this.light.turnOn();
    }
}
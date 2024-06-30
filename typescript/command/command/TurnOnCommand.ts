// src/commands/TurnOnCommand.ts
import { Command } from './Command';
import { Light } from '../receiver/Light';

export class TurnOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }

    undo() {
        this.light.turnOff();
    }
}
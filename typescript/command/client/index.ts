// src/index.ts
import { Light } from '../receiver/Light';
import { TurnOnCommand } from '../command/TurnOnCommand';
import { TurnOffCommand } from '../command/TurnOffCommand';
import { Command } from '../command/Command';

class RemoteControl {
    private command!: Command;

    setCommand(command: Command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }

    pressUndo() {
        this.command.undo();
    }
}

// クライアントコード
const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton(); // The light is on
remote.pressUndo();   // The light is off

remote.setCommand(turnOff);
remote.pressButton(); // The light is off
remote.pressUndo();   // The light is on


// npx ts-node ./command/client/index.ts

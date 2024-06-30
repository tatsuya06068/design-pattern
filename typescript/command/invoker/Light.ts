import { Command } from "../command/TurnOnCommand";

export class Invoker {
    private onStart!: Command;
    private onFinish!: Command;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    public doSomethingImportant(): void {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }

        if (this.isCommand(this.onFinish)) {
            console.log('Invoker: ...doing something really important...');
            this.onFinish.execute();
        }
    }

    private isCommand(object:Command): object is Command {
        return object.execute !== undefined;
    }
}
import * as dgram from 'dgram';

interface ITelloConfig {
  address: string,
  port: number
}

export enum FlipCommand {
  Left = 'l',
  Right = 'r',
  Forward = 'f',
  Back = 'b',
  BackLeft = 'bl',
  BackRight = 'rb',
  FrontLeft = 'fl',
  FrontRight = 'fr'
}

export class TelloClient {
  private readonly socket = dgram.createSocket('udp4');
  private readonly config: ITelloConfig;

  constructor(ipAddress: string, port: number) {
    this.config = {
      address: ipAddress,
      port : port
    };
  }

  command(cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`command`, cb);
  }

  takeoff(cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`takeoff`, cb);
  }

  land(cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`land`, cb);
  }

  up(cm: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`up ${cm}`, cb);
  }

  down(cm: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`down ${cm}`, cb);
  }

  left(cm: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`left ${cm}`, cb);
  }

  right(cm: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`right ${cm}`, cb);
  }

  forward(cm: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`forward ${cm}`, cb);
  }

  back(cm: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`back ${cm}`, cb);
  }

  cw(rotate: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`cw ${rotate}`, cb);
  }

  ccw(rotate: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`ccw ${rotate}`, cb);
  }

  flip(command: FlipCommand, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`flip ${command}`, cb);
  }

  setSpeed(cmPerSecond: number, cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`speed ${cmPerSecond}`, cb);
  }

  getSpeed(cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`Speed?`, cb);
  }

  getBattery(cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`Battery?`, cb);
  }

  getFlightTime(cb?: (e: Error, data: number) => void): void {
    this.sendCommand(`Time?`, cb);
  }

  private sendCommand(command: string, callback?: (e: Error, data: number) => void): void {
    const msg = new Buffer(command);
    setTimeout(() => {
      this.socket.send(msg, 0, msg.length, this.config.port, this.config.address, callback);
    }, 500);
  }
}

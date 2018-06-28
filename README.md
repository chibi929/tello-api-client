# tello-api-client

[![npm version](https://badge.fury.io/js/tello-api-client.svg)](https://www.npmjs.com/package/tello-api-client)

## Overview

Tello API Client for Node.js.  
API details: https://dl-cdn.ryzerobotics.com/downloads/tello/0228/Tello+SDK+Readme.pdf

## Usage

```ts
import { TelloClient } from 'tello-api-client'

const cli = new TelloClient(IP_ADRESS, PORT);
cli.command();
cli.takeoff();

setTimeout(() => {
  cli.land();
}, 5000);
```

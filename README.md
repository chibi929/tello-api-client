# tello-api-client

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

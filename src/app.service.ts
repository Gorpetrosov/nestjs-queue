import { Injectable } from '@nestjs/common';
import { TRANSCODE_QUEUE } from './common/constants';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue,
  ) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  async transcode(): Promise<string> {
    await this.transcodeQueue.add(
      {
        fineName: '../public/music/example.mp3',
      },
      {
        removeOnComplete: true,
      },
    );
    return 'rr';
  }
}

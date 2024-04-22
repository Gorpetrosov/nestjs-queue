import { Process, Processor } from '@nestjs/bull';
import { TRANSCODE_QUEUE } from '../../common/constants';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);

  @Process()
  async transcode(job: Job<unknown>) {
    try {
      this.logger.log(JSON.stringify(job.data));
      const result = await new Promise((resolve) => {
        setTimeout(() => resolve('process finished'), 5000);
      });
      this.logger.log(
        `Transcoding complete for job ${job.id} with result: ${result}`,
      );
    } catch (e) {
      this.logger.error(e);
      this.logger.log(
        `Transcoding failed for job ${job.id}`,
      );
      await job.remove();
    }
  }
}

package com.serverless

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import com.amazonaws.services.s3.event.S3EventNotification
import com.amazonaws.services.lambda.runtime.events.S3Event;
import groovy.transform.CompileStatic
import org.apache.log4j.Logger
import com.amazonaws.services.s3.event.S3EventNotification.S3EventNotificationRecord

/**
 * Created by lichen on 10/3/17.
 */
@CompileStatic
class FileTransformer implements RequestHandler<S3Event, String> {

    private static final Logger LOG = Logger.getLogger(FileTransformer.class)

    @Override
    String handleRequest(S3Event event, Context context) {
        try {
            LOG.info("file created ! ...")
            S3EventNotificationRecord record = event.records.first()

            LOG.info("awsRegion: ${record.awsRegion}")
            LOG.info("eventName: ${record.eventName}")
            LOG.info("eventSource: ${record.eventSource}")
            LOG.info(record.s3.bucket.name)
            return "OK"
        }catch (IOException e) {
            return e.message;
        }
    }
}
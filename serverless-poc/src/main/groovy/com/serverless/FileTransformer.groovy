package com.serverless

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import com.amazonaws.services.s3.model.S3Event
import groovy.transform.CompileStatic
import org.apache.log4j.Logger

/**
 * Created by lichen on 10/3/17.
 */
@CompileStatic
class FileTransformer implements RequestHandler<S3Event, Integer> {

    private static final Logger LOG = Logger.getLogger(FileTransformer.class)

    @Override
    Integer handleRequest(S3Event event, Context context) {
        Map<String, Object> values = event.getProperties()
        values.keySet().each {
            key -> LOG.info("${key}:")
        }
        return 0;
    }
}
package com.chc.poc.sparkpoc

/**
 * Created by lichen on 10/16/17.
 */
class WordCountSpec extends spock.lang.Specification {
    def 'do count' () {
        given:
        WordCount wordCount = new WordCount()

        when:
        Long c = wordCount.doWordCount()

        then:
        c != 0
    }

    def 'transform provider'() {
        given:
        WordCount wordCount = new WordCount()

        when:
        wordCount.doTransform('/Users/lichen/Projects/github/playground/spark-poc/src/test/resources/hca_provider_demographics.txt')

        then:
        true
    }
}

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
}

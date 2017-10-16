package com.chc.poc.sparkpoc

import org.apache.spark.api.java.JavaRDD
import org.apache.spark.sql.SparkSession

/**
 * Created by lichen on 10/16/17.
 */
class WordCount {

    Long doWordCount() {
        SparkSession sparkSession = SparkSession.builder().master("local").appName("WordCount").getOrCreate()

        JavaRDD<String> lines = sparkSession.read().textFile('/Users/lichen/Projects/github/playground/spark-poc/src/main/resources/1.txt').javaRDD()
        Long count = lines.count()

        sparkSession.stop()
        count

        /*
         Column member_Col = new Column("MEMBER_ID");
        String[] dupilcate_Filter = new String[]{"MEMBER_ID", "EFFECTIVE_DATE", "REGION", "PLAN"};

        SparkSession sparkSession = SparkSession.builder().appName("Sample App").master("local").config("spark.sql.warehouse.dir", "file:///Users/srakasi/MyDocs/test").getOrCreate();
        Dataset<Row> master = sparkSession.read().format("csv").option("header", true).option("delimiter", "|").load("file:///Users/srakasi/MyDocs/test/oldMaster.txt");
        Dataset<Row> newLoad = sparkSession.read().format("csv").option("header", true).option("delimiter", "|").load("file:///Users/srakasi/MyDocs/test/newLoad.txt");

//        newLoad.union(master).dropDuplicates(dupilcate_Filter).sort(member_Col).coalesce(1).write().option("header", true).csv("file:///Users/srakasi/MyDocs/test/master.txt");
        newLoad.union(master).dropDuplicates(dupilcate_Filter).sort(member_Col).write().option("delimiter", "|").option("header", false).csv("file:///Users/srakasi/MyDocs/test/master");

        Configuration conf = sparkSession.sparkContext().binaryRecords$default$3();

        String timestamp = new SimpleDateFormat("yyyyMMddHHmm'.txt'").format(new Date());

        FileSystem fs = FileSystem.get(conf);
        Path srcDir = new Path("/Users/srakasi/MyDocs/test/master");
        Path destFile = new Path("/Users/srakasi/MyDocs/test/" + timestamp);
        FileUtil.copyMerge(fs, srcDir, fs, destFile, true, conf, null);

        sparkSession.stop();
        return "Initiate Data load!";
         */
    }
}

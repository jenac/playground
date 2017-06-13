using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsvToSQL
{
    class Program
    {
        
        static void Main(string[] args)
        {
            List<String> sqls = new List<string>();
            var files = Directory.GetFiles(@"c:\csvs", "*.csv");
            foreach(var file in files)
            {
                string title = Path.GetFileNameWithoutExtension(file);
                Console.WriteLine(title);
                var lines = File.ReadAllLines(file);
                if (lines[0] != "Issued To,Issued By,Expiration Date,Intended Purposes,Friendly Name,Status,Certificate Template")
                {
                    continue;
                }
                foreach (string line in lines)
                {
                    if (line == "Issued To,Issued By,Expiration Date,Intended Purposes,Friendly Name,Status,Certificate Template")
                    {
                        continue;
                    }
                    var sa = line.Trim().Split(new char[] { ','});
                    if (sa.Length == 8)
                    {
                        string sqlfmt = @"INSERT INTO [OtherCerts]
           ([Category]
           ,[IssuedTo]
           ,[IssuedBy]
           ,[ExpirationDate]
           ,[IntendedPurposes]
           ,[FriendlyName]
           ,[Status]
           ,[CertificateTemplate])
     VALUES
           ('{0}'
           ,'{1}'
           ,'{2}'
           ,'{3}'
           ,'{4}'
           ,'{5}'
           ,'{6}'
           ,'{7}');";
                        DateTime p = DateTime.Parse(sa[2]);
                        string sql = string.Format(sqlfmt, title, sa[0], sa[1], p.ToString("yyyy-MM-dd"), sa[3], sa[4], sa[5], sa[6]);
                        sqls.Add(sql);
                    }
                }
                
                
            }
            File.WriteAllLines(@"C:\csvs\x.sql", sqls.ToArray());
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using Excel = Microsoft.Office.Interop.Excel;

namespace SimpleExcel
{
    class Program
    {
        static void Main(string[] args)
        {
            Excel.Application xlApp = new Excel.Application();
            Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(@"C:\2.xlsx");
            //Excel._Worksheet xlWorksheet = xlWorkbook.Sheets[1];

            foreach(Excel._Worksheet xlWorksheet in xlWorkbook.Sheets)
            {
                String name = xlWorksheet.Name;
                xlWorksheet.SaveAs(Filename: $"c:\\csvs\\{name}.csv", FileFormat: Excel.XlFileFormat.xlCSV);
                Excel.Range xlRange = xlWorksheet.UsedRange;
                Console.WriteLine(name);
                //cleanup
                GC.Collect();
                GC.WaitForPendingFinalizers();

                //rule of thumb for releasing com objects:
                //  never use two dots, all COM objects must be referenced and released individually
                //  ex: [somthing].[something].[something] is bad

                //release com objects to fully kill excel process from running in the background
                Marshal.ReleaseComObject(xlRange);
                Marshal.ReleaseComObject(xlWorksheet);
            }
            
            



            

            //close and release
            xlWorkbook.Close();
            Marshal.ReleaseComObject(xlWorkbook);

            //quit and release
            xlApp.Quit();
            Marshal.ReleaseComObject(xlApp);
        }
    }
}

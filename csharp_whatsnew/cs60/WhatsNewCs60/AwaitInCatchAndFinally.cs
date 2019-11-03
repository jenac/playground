using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace WhatsNewCs60
{
    public class AwaitInCatchAndFinally
    {
        //Await in Catch and Finally blocks
        public static async Task<string> MakeRequestAndLogFailures()
        {
            await logMethodEntrance();
            var client = new HttpClient();
            var streamTask = client.GetStringAsync("https://localHost:10000");
            try
            {
                var responseText = await streamTask;
                return responseText;
            }
            catch (HttpRequestException e) when (e.Message.Contains("301"))
            {
                await logError("Recovered from redirect", e);
                return "Site Moved";
            }
            catch (Exception ex)
            {
                await logError("Unknown Error", ex);
                return "Unknown Error";
            }
            finally
            {
                await logMethodExit();
                client.Dispose();
            }
        }

        private static Task logMethodExit()
        {
            Console.WriteLine("logMethodExit");
            return Task.FromResult(0);
        }

        private static Task logError(string v, Exception e)
        {
            Console.WriteLine($"logError {v}: {e.Message}");
            return Task.FromResult(0);
        }

        private static Task logMethodEntrance()
        {
            Console.WriteLine("logMethodEntrance");
            return Task.FromResult(0);
        }
    }

}
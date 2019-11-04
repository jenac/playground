using System;

namespace cs80 {
	public class IndicesAndRanges {
		public static void Demo() {
			Console.WriteLine($"The last word is {words[^1]}");
			// writes "dog"
			var quickBrownFox = words[1..4];
			Console.WriteLine($"quickBrownFox={string.Join(",", quickBrownFox)}");
			var lazyDog = words[^2..^0];
			Console.WriteLine($"lazyDog={string.Join(",", lazyDog)}");
			var allWords = words[..]; // contains "The" through "dog".
			Console.WriteLine($"allWords={string.Join(",", allWords)}");
			var firstPhrase = words[..4]; // contains "The" through "fox"
			Console.WriteLine($"firstPhrase={string.Join(",", firstPhrase)}");
			var lastPhrase = words[6..]; // contains "the", "lazy" and "dog"		
			Console.WriteLine($"lastPhrase={string.Join(",", lastPhrase)}");
			Range phrase = 1..4;
			var text = words[phrase];
			Console.WriteLine($"text={string.Join(",", text)}");
		}

		static string[] words = new string[]
		{
		                // index from start    index from end
		    "The",      // 0                   ^9
		    "quick",    // 1                   ^8
		    "brown",    // 2                   ^7
		    "fox",      // 3                   ^6
		    "jumped",   // 4                   ^5
		    "over",     // 5                   ^4
		    "the",      // 6                   ^3
		    "lazy",     // 7                   ^2
		    "dog"       // 8                   ^1
		};              // 9 (or words.Length) ^0
	}
	
}

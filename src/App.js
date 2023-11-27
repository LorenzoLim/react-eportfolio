function App() {

  const exampleOne = () => {
    return "The is definitely the answer"
  }

  return (
    <div>
      <h1>Minimum ASCII Delete Sum for Two Strings</h1>
      <div>
        Given two strings s1 and s2, return the lowest ASCII sum of deleted
        characters to make two strings equal.
      </div>
      <div>
        <div>Example 1: </div>
        <span>
          Input: s1 = "sea", s2 = "eat" Output: 231 Explanation: Deleting "s"
          from "sea" adds the ASCII value of "s" (115) to the sum. Deleting "t"
          from "eat" adds 116 to the sum. At the end, both strings are equal,
          and 115 + 116 = 231 is the minimum sum possible to achieve this.
        </span>
        <div>Example 2:</div>
        <span>
          Input: s1 = "delete", s2 = "leet" Output: 403 Explanation: Deleting
          "dee" from "delete" to turn the string into "let", adds 100[d] +
          101[e] + 101[e] to the sum. Deleting "e" from "leet" adds 101[e] to
          the sum. At the end, both strings are equal to "let", and the answer
          is 100+101+101+101 = 403. If instead we turned both strings into "lee"
          or "eet", we would get answers of 433 or 417, which are higher.
        </span>
      </div>
    </div>
  );
}

export default App;

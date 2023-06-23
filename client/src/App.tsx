import "./App.css";
import decodeHuffmanCode from "./utils/decodeHuffmanCode";

function App() {
  const fetchData = async (type: string) => {
    try {
      const data = await fetch(`http://localhost:5000/fetch?type=${type}`).then(
        (response) => response.json()
      );
      if (type === "withEncode") {
        const decodedStr = decodeHuffmanCode(
          data.data.encodedData,
          data.data.huffmanTreeRoot
        );
        console.log(JSON.parse(decodedStr));
      } else {
        console.log(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Huffman Implementation</h1>
      <div className="buttons">
        <button onClick={() => fetchData("withEncode")}>
          Fetch with encode
        </button>

        <button onClick={() => fetchData("withoutEncode")}>
          Fetch without encode
        </button>
      </div>
    </>
  );
}

export default App;

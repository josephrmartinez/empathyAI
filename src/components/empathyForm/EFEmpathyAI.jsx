export default function EFEmpathyAI({ empathyResponse }) {
    
    function insertNewlines(str) {
        // Remove " marks from beginning and end of string if present
        str = str.replace(/^"|"$/g, '');

    const sentences = str.split(/(?<=\.|\?) /);
    return sentences.map((sentence) => sentence.trim());
    }

    const formattedResponse = insertNewlines(empathyResponse);

  return (
    <>
      <div className="m-auto w-[180px]">RESPONSE</div>
      <div className="w-3/4 text-sm max-w-prose text-center mx-auto max-h-80 overflow-y-auto p-4" style={{color: "#4B5563"}}>
        {empathyResponse === "" && "select listener to receive response"}
        {empathyResponse === "Listening..." ? (
            <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            </div>
        ) : formattedResponse.map((sentence, i) => (
            <div className="text-left" key={i}>
                {sentence}
                <br />
                <br />
            </div>
        ))}

      </div>
    </>
  );
}
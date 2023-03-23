export default function DivGridSummary({ words, bgColor}) {

  return (
    <div className="flex row-auto flex-wrap justify-center">
          {words.map((word, index) => (
              <div
                  key={index}
                  className={`pb-2 px-4 cursor-default text-sm antialiased`}
                  style={{ color: '#525252' }}>
          {word.word}
        </div>
      ))}
       </div>
  );
}


// <div
//                   key={index}
//                   className={`py-2 px-3 rounded-full cursor-default antialiased`}
//                   style={{ color: '#FEFEFE', backgroundColor: bgColor, borderWidth: '1px', borderColor: bgColor }}>
//           {word.word}
//         </div>
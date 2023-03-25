export default function generateFeelingObject(feeling) {

    let feelingObject =
   {
      initialFeeling: feeling,
      underlyingFeelings: [
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            {word: "", selected: false}],
      needs: [
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            {word: "", selected: false}],
      empathyResponse: ""
    }
    
    return feelingObject
  }
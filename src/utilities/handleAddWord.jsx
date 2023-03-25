
// section, 

function generateComplaintObject(complaint) {

    let complaintObject =
   {
      complaint: complaint,
        initialFeelings: [
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            { word: "", selected: false },
            {word: "", selected: false}],
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
    
    return complaintObject
  }
export default function generateComplaintObject(complaint) {
      let complaintObject =
            { [complaint]: {
                        "complaint": complaint,
                        "initialFeelings": [],
                        "underlyingFeelings": [],
                        "needs": []
                  }
            }
    return complaintObject
}
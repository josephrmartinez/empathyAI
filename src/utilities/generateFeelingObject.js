export default function generateFeelingObject(feeling) {
      let feelingObject =
      {
            [feeling]: {
                  "initialFeeling": feeling,
                  "underlyingFeelings": [],
                  "needs": []
            }
      }
      return feelingObject
}
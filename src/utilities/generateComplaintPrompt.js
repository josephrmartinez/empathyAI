export default function generateComplaintPrompt() {
    return "complete the 'complaint' data object with the fields 'initialFeelings' (feeling words that end in -ed), 'underlyingFeelings' (feeling words that do not imply blame), and 'needs' and their respective values. Return only the completed data object."
}
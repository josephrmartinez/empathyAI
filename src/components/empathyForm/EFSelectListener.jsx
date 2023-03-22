import FormWrapper from "./FormWrapper";
import SpeakerGrid from "../SpeakerGrid";

export default function EFSelectListener({updateFields, needs, handleDivClick }) {

    return (
        <FormWrapper title="SELECT LISTENER">
            <SpeakerGrid speakers={["Tom", "Roy", "Anita", "Taylor"]} bgColor={'#93b1c9'}/>
        </FormWrapper>
  );
}

